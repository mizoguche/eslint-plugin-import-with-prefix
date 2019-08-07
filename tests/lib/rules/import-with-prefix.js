"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/import-with-prefix"),
  { RuleTester } = require("eslint");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

const prefixError = { messageId: "importWithPrefix" };
const options = [{ from: "@material-ui/core", prefix: "Mui" }];
const parserOptions = { ecmaVersion: 2015, sourceType: "module" };

ruleTester.run("import-with-prefix", rule, {
  valid: [
    {
      code: 'import MuiCard from "@material-ui/core/Card";',
      options,
      parserOptions,
    },
    {
      code: 'import { Card as MuiCard } from "@material-ui/core";',
      options,
      parserOptions,
    },
    {
      code: `
import {
  Card as MuiCard,
  CardActionArea as MuiCardActionArea,
} from "@material-ui/core";
`,
      options,
      parserOptions,
    },
    {
      code: 'import React from "react";',
      options,
      parserOptions,
    },
    {
      code: 'import * as React from "react";',
      options,
      parserOptions,
    },
  ],
  invalid: [
    {
      code: 'import Card from "@material-ui/core/Card";',
      options,
      errors: [prefixError],
      parserOptions,
    },
    {
      code: 'import { Card } from "@material-ui/core";',
      options,
      errors: [prefixError],
      parserOptions,
    },
    {
      code: `
import {
  Card,
  CardActionArea,
} from "@material-ui/core";
`,
      options,
      errors: [prefixError, prefixError],
      parserOptions,
    },
  ],
});
