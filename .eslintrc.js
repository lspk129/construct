module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "settings": {
        "import/core-modules": [
            "react",
            "typography",
            "prop-types",
            "react-helmet",
            "styled-components"
        ]
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-a11y/href-no-hash": "off"
    }
};