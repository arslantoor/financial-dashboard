import js from "@eslint/js";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import globals from "globals";

export default [
  js.configs.recommended, // Base JavaScript rules
  {
    ignores: ["vite.config.js",],
    plugins: {
      react,
      prettier
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      "prettier/prettier": "error",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off"
    }
  }
];