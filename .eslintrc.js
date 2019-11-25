module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // prettier/prettier 옵션이 많은 문제를 일으켜서 off 로 해둠
    'prettier/prettier': 'off',

    "@typescript-eslint/no-namespace": "off",

    "@typescript-eslint/class-name-casing": "off",

    "@typescript-eslint/no-empty-interface": "off",

    "react/jsx-key": "off",

    // FunctionStatement와 BinaryExpression 은 제외 시킬려고 오버라이딩
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    'no-console': 'off',
    'max-len': [
      'error',
      {
        code: 500,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],

    // for in 구문을 사용할 때 hasOwnProperty로 검사를 진행하길 권장하는 규칙인데 코드가 너무 지저분해짐
    'guard-for-in': 'off',

    // 상속구조의 package.json 일 때의 다른 프로젝트에 있는 dependency로 깔렸는지를 알아내지 못함
    'import/no-extraneous-dependencies': 'off',

    // 우리 프로젝트에서는 서로 참조하는 import 가 필요함
    'import/no-cycle': 'off',
    // switch case 문에서 default가 꼭 필요하지 않음
    'default-case': 'off',
    // 속도가 엄청 중요하지 않은 await 문은 루프문 안에 있는게 안전하면서 더 보기 깔끔해짐
    'no-await-in-loop': 'off',
    // 이걸 키면 namespace에서 정의하는 함수들이 다 에러로 표시됨
    'no-inner-declarations': 'off',
    // multi-assign 이 많이 쓰고 편해서 off 로 해둠
    'no-multi-assign': 'off',
    // 데코레이터가 먹지 않아서 off로 해둠
    'new-cap': 'off',

    // continue 문이 없으면 중첩된 if문이 되기 때문에 코드 보기가 불편해짐
    'no-continue': 'off',

    // property 재할당은 허용
    'no-param-reassign': ['error', { props: false }],

    // 우리 프로젝트에선 세미콜론 안씀
    '@typescript-eslint/semi': ['error', 'never'],

    // 카멜케이스가 적용 안된 부분이 많아서 다른 부분 컨버팅 끝날때까지는 잠시 꺼둔다.
    '@typescript-eslint/camelcase': 'off',
    // 마찬가지로 default export 가 적용이 안된 부분이 너무 많아서 잠시 꺼둔다
    'import/prefer-default-export': 'off',

    // override 용 빈껍데기 함수를 만들 수 없어서 off로 해둠
    'class-methods-use-this': 'off',

    // array 는 오히려 가독성을 해치고, 일반 대입문은 eslint가 잘 적용되지 않으므로 제외한다.
    // 거기다 type 을 선언하는데 줄이 길어진다.
    'prefer-destructuring': 'off',

    // 다른 rule 에서 let과 const를 강제 시키기 때문에 강제시키는 의미가 없어짐
    'no-loop-func': 'off',


    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
        caughtErrors: 'none',
      },
    ],
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  env: {
    browser: true
  }
};
