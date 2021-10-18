module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module",
        // ↓これいるの？  プロジェクト内の型認識に使用  https://maku.blog/p/j6iu7it/#parseroption-%E3%83%91%E3%83%BC%E3%82%B5%E3%83%BC%E3%81%AE%E8%A8%AD%E5%AE%9A
        project: "./tsconfig.json",
    },
    // ↓これいるの？
    settings: {
        react: {
            version: "17",
        },
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        // "indent": ["error", 2],
        // "no-extra-semi": "warn",
        // "no-irregular-whitespace": "warn",
        // "eqeqeq": "warn",
        // "quotes": [2, "double"]
    }
};
