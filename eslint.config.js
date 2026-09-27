import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default [
  { ignores: ["build", "dist", ".firebase"] },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      // New JSX transform: no need to import React or scope-check it in JSX.
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
      // Literal apostrophes/quotes in JSX text render fine — this rule is
      // stylistic noise for a content-heavy portfolio, not a bug class.
      "react/no-unescaped-entities": "off",
      // The two long-standing, high-value hooks rules (rules-of-hooks catches
      // conditional hook calls; exhaustive-deps catches stale-closure effects).
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];
