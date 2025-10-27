import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    extends: [js.configs.recommended],
    languageOptions: { 
      globals: globals.browser, 
    },
    rules: {
      "no-var": "error",
      "no-unused-vars": "warn",
      "semi": ["error", "always"],
      "eqeqeq": "error",
      // "quotes": ["error","double"],
      "indent": ["error", 2],
    },
  },

  {
    files: ["test/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
  },

  // --- Cypress E2E files ---
  {
    files: ["cypress/**/*.cy.js"],
    languageOptions: {
      globals: {
        ...globals.mocha,      // describe, it, beforeEach, etc.
        cy: "readonly",
        Cypress: "readonly",
      },
    },
  },
]);
