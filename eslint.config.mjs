// Mesmas regras do lint global do workspace (eslint.config.mjs da raiz, ADR 0014): mudanças de regra
// são feitas lá e repetidas aqui.
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["node_modules/**"]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      globals: globals.node
    }
  },
  {
    // Código que roda no navegador.
    files: ["*.js"],
    languageOptions: {
      globals: globals.browser
    }
  },
  {
    // Parâmetros e variáveis com prefixo _ são não usados de propósito (por exemplo, para tipar mocks).
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" }
      ]
    }
  },
  {
    files: ["**/*.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off"
    }
  }
);
