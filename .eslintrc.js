module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
	'extends': ['eslint:recommended', "plugin:react/recommended"],
	"parser": "babel-eslint",
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
		'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018
    },
    'plugins': ['react'],
    'rules': {
        // Possible errors
		"comma-dangle"             : [2, "always-multiline"],
		"no-cond-assign"           : [2, "except-parens"],
		"no-constant-condition"    : [2, {"checkLoops" : false}],
		"no-control-regex"         : 2,
		"no-debugger"              : 2,
		"no-dupe-args"             : 2,
		"no-dupe-keys"             : 2,
		"no-duplicate-case"        : 2,
		"no-empty-character-class" : 2,
		"no-empty"                 : 2,
		"no-ex-assign"             : 2,
		"no-extra-boolean-cast"    : 2,
		"no-extra-semi"            : 2,
		"no-func-assign"           : 2,
		"no-inner-declarations"    : 2,
		"no-invalid-regexp"        : 2,
		"no-irregular-whitespace"  : 2,
		"no-negated-in-lhs"        : 2,
		"no-obj-calls"             : 2,
		"no-regex-spaces"          : 2,
		"no-sparse-arrays"         : 2,
		"no-unreachable"           : 2,
		"use-isnan"                : 2,
		"no-unsafe-finally"        : 2,
		"valid-typeof"             : 2,
		"no-unexpected-multiline"  : 2,

		// Best practices
		"accessor-pairs"               : 2,
		"array-callback-return"        : 2,
		"eqeqeq"                       : [2, "allow-null"],
		"no-alert"                     : 2,
		"no-caller"                    : 2,
		"no-case-declarations"         : 2,
		"no-eval"                      : 2,
		"no-extend-native"             : 2,
		"no-extra-bind"                : 2,
		"no-extra-label"               : 2,
		"no-fallthrough"               : [2, { "commentPattern": "(fall[\\s\\w]*through|break[\\s\\w]*omitted)" }],
		"no-floating-decimal"          : 2,
		"no-implied-eval"              : 2,
		"no-invalid-this"              : 0,
		"no-iterator"                  : 2,
		"no-multi-str"                 : 2,
		"no-new-func"                  : 2,
		"no-new-wrappers"              : 2,
		"no-new"                       : 2,
		"no-octal-escape"              : 2,
		"no-octal"                     : 2,
		"no-proto"                     : 2,
		"no-redeclare"                 : 2,
		"no-return-assign"             : 2,
		"no-script-url"                : 2,
		"no-self-assign"               : 2,
		"no-self-compare"              : 2,
		"no-sequences"                 : 2,
		"no-throw-literal"             : 2,
		"no-unmodified-loop-condition" : 2,
		"no-unused-expressions"        : 2,
		"no-unused-labels"             : 2,
		"no-useless-call"              : 2,
		"no-useless-concat"            : 2,
		"no-useless-escape"            : 2,
		"no-void"                      : 2,
		"no-with"                      : 2,
		"wrap-iife"                    : [2, "inside"],
		"yoda"                         : [2, "never"],

		// Strict mode
		"strict"                        : [2, "global"],

		// Variables
		"no-delete-var"              : 2,
		"no-label-var"               : 2,
		"no-restricted-globals"      : ["error", "event"],
		"no-shadow-restricted-names" : 2,
		"no-undef"                   : 2,
		"no-undef-init"              : 2,
		"no-undefined"               : 2,
		"no-unused-vars"             : [2, { "vars" : "all", "args" : "after-used" }],

		// Node.js
		"handle-callback-err": "error",

		// Stylistic issues
		"array-bracket-spacing" : [2, "never"],
		"brace-style"           : [2, "1tbs", { "allowSingleLine" : true }],
		"comma-spacing"         : [2, { "before" : false, "after" : true }],
		"comma-style"           : [2, "last"],
		"eol-last"              : 1,
		"keyword-spacing": [ 2,
			{
				"after" : true,
				"overrides": {
					"if"     : { "after" : true },
					"else"   : { "after" : true },
					"for"    : { "after" : true },
					"while"  : { "after" : true },
					"do"     : { "after" : true },
					"switch" : { "after" : true },
					"case"   : { "after" : true },
					"return" : { "after" : true },
					"try"    : { "after" : true },
					"catch"  : { "after" : true },
					"typeof" : { "after" : true }
				}
			}
		],
		"max-len"                       : [2, { "code": 100, "tabWidth": 2, "ignoreComments": false, "ignoreUrls": true, "ignoreStrings": true, "ignoreTemplateLiterals": true, "ignoreRegExpLiterals": true }],
		"new-cap"                       : 2,
		"new-parens"                    : 2,
		"no-array-constructor"          : 2,
		"no-mixed-spaces-and-tabs"      : 2,
		"no-multiple-empty-lines"       : [2, { "max": 2, "maxBOF": 1, "maxEOF": 1}],
		"no-whitespace-before-property" : 2,
		"func-call-spacing"             : [2, "never"],
		"no-trailing-spaces"            : 2,
		"no-unneeded-ternary"           : 2,
		"operator-assignment"           : 2,
		"operator-linebreak"            : [2, "before"],
		"quotes"                        : [2, "single", "avoid-escape"],
		"semi-spacing"                  : [2, { "before": false, "after": true }],
		"semi"                          : [2, "always"],
		"space-before-blocks"           : [2, "always"],
		"space-before-function-paren"   : [2, "always"],
		"space-in-parens"               : [2, "never"],
		"space-infix-ops"               : 2,
		"space-unary-ops"               : [2, { "words" : true, "nonwords" : false }],
		"spaced-comment"                : [2, "always", { "exceptions" : ["-", "+", "/"], "markers" : ["//"] }],
        "unicode-bom"                   : [2, "never"],
        // Possible errors
		"no-unsafe-negation"  : 2,

		// Best practices
		"block-scoped-var"    : 2,
		"curly"               : [2, "all"],
		"dot-notation"        : [2],
		"no-else-return"      : 2,
		"no-implicit-globals" : 2,
		"no-lone-blocks"      : 2,
		"prefer-const"        : 2,
		"no-var"              : 2,

		// Variables
		"no-catch-shadow"               : 2,
		"no-shadow"                     : 2,

		// Stylistic issues
		"block-spacing"                : 2,
		"camelcase"                    : [2, { "properties": "always" }],
		"indent"                       : [2, 2],
		//"key-spacing"                : [2, { "beforeColon": false, "afterColon": true, "mode": "minimum" }],
		"padding-line-between-statements": [2,
																				{ "blankLine": "always", "prev": ["const", "let", "var"], "next": "*"}, // always blank line after var-like statements
																				{ "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"]}, // no need for a blank line between var-like statements
																				{ "blankLine": "always", "prev": "directive", "next": "*" }, // new line after directives (e.g. "use strict")
    																		{ "blankLine": "any",    "prev": "directive", "next": "directive" },
																				{ "blankLine": "always", "prev": "*", "next": "return" }
																			],
		"newline-per-chained-call"     : 2,
		"object-curly-spacing"         : [2, "always"],
		"one-var"                      : [2, "never"],
		"one-var-declaration-per-line" : 2,
		"padded-blocks"                : [2, "always"]
    }
};