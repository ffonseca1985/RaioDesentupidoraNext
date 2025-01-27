import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Spread out Next.js/TypeScript recommended configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add or override custom rules
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-explicit-any": "off",

      "react/no-unescaped-entities": "off"
    },
  },
];

export default eslintConfig;
