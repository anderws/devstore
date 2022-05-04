# devstore
#Init start commands
npm init -y
yarn.cmd add typescript jest @types/jest pg-promise sinon
npx tsc --init

#tsconfig.json adds
 "incremental": true,                              /* Enable incremental compilation */"outDir": "./dist",

  "include": [
    "src",
    "test"
  ]

yarn.cmd add ts-node ts-jest
npx ts-jest config:init
# to test
npx jest
yarn.cmd add @types/sinon