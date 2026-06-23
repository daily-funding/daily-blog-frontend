import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import vitest from "eslint-plugin-vitest";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // 일반 코드 품질 규칙
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-unused-vars": "off", // TypeScript가 대신 처리
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "prefer-const": "error",
    },
  },

  // 테스트 파일 전용 설정 (vitest globals 활성화 → import 생략 가능)
  {
    files: ["src/**/*.{test,spec}.{ts,tsx}", "src/test/**/*.{ts,tsx}"],
    plugins: { vitest },
    languageOptions: {
      globals: vitest.environments.env.globals,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      "vitest/expect-expect": "error",
      "vitest/no-disabled-tests": "warn",
      "vitest/no-focused-tests": "error",
      "no-console": "off", // 테스트에서는 console 허용
    },
  },

  // 무시할 경로
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;

