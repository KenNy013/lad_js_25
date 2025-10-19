import js from "@eslint/js"
import globals from "globals"
import { defineConfig } from "eslint/config"
import prettier from "eslint-config-prettier"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended", prettier],
    languageOptions: { globals: globals.browser },
    rules: {
      "no-cond-assign": "error",
      // "no-console": "warn",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty": "error",
      "no-ex-assign": "error",
      "no-extra-boolean-cast": "error",
      "no-extra-semi": "error",
      "no-func-assign": "error",
      "no-inner-declarations": "error",
      "no-unexpected-multiline": "error",
      "no-unreachable": "error",
      "no-unsafe-finally": "error",
      "use-isnan": "error",
      curly: "error",
      "default-case": "warn",
      eqeqeq: "error",
      "no-eval": "error",
      "no-extra-bind": "error",
      "no-implicit-coercion": "warn",
      "no-lone-blocks": "error",
      "no-loop-func": "error",
      "no-multi-spaces": "error",
      "no-new": "error",
      "no-return-assign": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-throw-literal": "error",
      "no-unused-expressions": "error",
      "no-useless-call": "error",
      "no-void": "error",
      "no-with": "error",
      "prefer-promise-reject-errors": "error",
      yoda: "error",
      "array-bracket-spacing": ["error", "never"],
      "block-spacing": "error",
      "brace-style": "error",
      camelcase: "warn",
      "comma-dangle": ["error", "never"],
      "comma-spacing": "error",
      "comma-style": "error",
      "eol-last": "error",
      "func-call-spacing": "error",
      // indent: ["error", ""],
      "key-spacing": "error",
      "keyword-spacing": "error",
      "linebreak-style": ["error", "unix"],
      "max-depth": ["warn", 4],
      "max-len": [
        "warn",
        {
          code: 100,
          ignoreComments: true,
          ignoreUrls: true
        }
      ],
      "max-params": ["warn", 4],
      "new-cap": "error",
      "no-multiple-empty-lines": [
        "error",
        {
          max: 2,
          maxEOF: 1
        }
      ],
      "no-trailing-spaces": "error",
      "no-whitespace-before-property": "error",
      "object-curly-spacing": ["error", "always"],
      "one-var": ["error", "never"],
      "operator-linebreak": ["error", "after"],
      quotes: [
        "error",
        "double",
        {
          allowTemplateLiterals: true
        }
      ],
      semi: ["error", "never"],
      "space-before-blocks": "error",
      "space-before-function-paren": ["error", "never"],
      "space-in-parens": ["error", "never"],
      "space-infix-ops": "error",
      "space-unary-ops": "error"
    }
  }
])
