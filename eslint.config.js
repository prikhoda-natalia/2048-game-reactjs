import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import eslintComments from "eslint-plugin-eslint-comments";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

const tsPlugin = tseslint.plugin;

export default tseslint.config(
  { ignores: ["dist", "node_modules"] },
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: globals.browser
    },
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    plugins: {
      "@typescript-eslint": tsPlugin,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      prettier: prettierPlugin,
      "eslint-comments": eslintComments,
      "react-refresh": reactRefresh
    },
    settings: {
      react: {
        version: "detect"
      },
      "import/resolver": {
        alias: {
          map: [
            ["~", "./src"],
            ["/", "./src"]
          ],
          extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
        }
      }
    },
    rules: {
      // Prettier rules
      "prettier/prettier": "error",

      // TypeScript
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: false,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true
        }
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" }
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports"
        }
      ],

      // React
      "react/react-in-jsx-scope": "error",
      "react/prop-types": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function"
        }
      ],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector: "TSTypeReference[typeName.name='FC']",
          message: "Use (props): JSX.Element instead of React.FC<Props>"
        }
      ],

      // Imports
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index"
          ],
          pathGroups: [
            {
              pattern: "~/**",
              group: "internal",
              position: "before"
            },
            {
              pattern: "**/*.css",
              group: "index",
              position: "after"
            },
            {
              pattern: "**/*.scss",
              group: "index",
              position: "after"
            }
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "never",
          alphabetize: {
            order: "asc",
            caseInsensitive: true
          }
        }
      ],
      "no-restricted-imports": [
        "error",
        {
          patterns: ["../*"]
        }
      ],

      // ESLint comments
      "eslint-comments/no-unused-disable": "error"
    }
  },
  prettier
);
