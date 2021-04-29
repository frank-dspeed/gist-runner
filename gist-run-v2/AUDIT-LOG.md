
up to date, audited 797 packages in 2s

60 packages are looking for funding
  run `npm fund` for details

# npm audit report

lodash  <4.17.19
Prototype Pollution - https://npmjs.com/advisories/1523
fix available via `npm audit fix --force`
Will install chokidar-cli@2.1.0, which is a breaking change
node_modules/chokidar-cli/node_modules/lodash
  chokidar-cli  <=2.0.0
  Depends on vulnerable versions of lodash
  node_modules/chokidar-cli

minimist  <0.2.1 || >=1.0.0 <1.2.3
Prototype Pollution - https://npmjs.com/advisories/1179
fix available via `npm audit fix --force`
Will install svg-sprite@0.3.2, which is a breaking change
node_modules/mocha/node_modules/minimist
  mkdirp  0.4.1 - 0.5.1
  Depends on vulnerable versions of minimist
  node_modules/mocha/node_modules/mkdirp
    mocha  1.21.5 - 6.2.2 || 7.0.0-esm1 - 7.1.0
    Depends on vulnerable versions of mkdirp
    node_modules/mocha
      svg-sprite  >=1.0.0
      Depends on vulnerable versions of mocha
      Depends on vulnerable versions of xmldom
      Depends on vulnerable versions of yargs
      node_modules/svg-sprite

xmldom  <0.5.0
Misinterpretation of malicious XML input - https://npmjs.com/advisories/1650
fix available via `npm audit fix --force`
Will install svg-sprite@0.3.2, which is a breaking change
node_modules/xmldom
  svg-sprite  >=1.0.0
  Depends on vulnerable versions of mocha
  Depends on vulnerable versions of xmldom
  Depends on vulnerable versions of yargs
  node_modules/svg-sprite

yargs-parser  <=13.1.1 || 14.0.0 - 15.0.0 || 16.0.0 - 18.1.1
Prototype Pollution - https://npmjs.com/advisories/1500
fix available via `npm audit fix --force`
Will install svg-sprite@0.3.2, which is a breaking change
node_modules/svg-sprite/node_modules/yargs-parser
  yargs  4.0.0-alpha1 - 12.0.5 || 14.1.0 || 15.0.0 - 15.2.0
  Depends on vulnerable versions of yargs-parser
  node_modules/svg-sprite/node_modules/yargs
    svg-sprite  >=1.0.0
    Depends on vulnerable versions of mocha
    Depends on vulnerable versions of xmldom
    Depends on vulnerable versions of yargs
    node_modules/svg-sprite

9 low severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force
