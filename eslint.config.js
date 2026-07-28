import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{
		ignores: [
			".licensing-policy/**",
			"dist/**",
			"node_modules/**",
			"eslint.config.js",
		],
	},
	eslint.configs.recommended,
	...tseslint.configs.strictTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	prettier,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			"@typescript-eslint/consistent-type-exports": "error",
			"@typescript-eslint/no-import-type-side-effects": "error",
		},
	},
);
