"use strict";

module.exports = {
  meta: {
    messages: {
      importWithPrefix: "Import with prefix '{{ prefix }}' from '{{ from }}'",
    },
  },
  create: function(context) {
    return {
      ImportDeclaration: node => {
        context.options.forEach(option => {
          const { from, prefix } = option;
          if (!node.source.value.startsWith(from)) {
            return;
          }

          node.specifiers.forEach(specifier => {
            if (!specifier.local.name.startsWith(prefix)) {
              context.report({
                node,
                messageId: "importWithPrefix",
                data: {
                  from,
                  prefix,
                },
              });
            }
          });
        });
      },
    };
  },
};
