module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "prettier",
    ],
    "rules": {
        "react/react-in-jsx-scope": 0,
        "react/jsx-props-no-spreading": 0,
        "react/require-default-props": 0,
        "react-hooks/exhaustive-deps": 0,
        "import/no-extraneous-dependencies": 0,
        "no-restricted-exports": 0,
    },
    "ignorePatterns": [".eslintrc.cjs", "vite.config.ts"],
}
