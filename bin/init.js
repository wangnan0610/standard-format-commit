const emoji = require('node-emoji')
const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')

const success = emoji.get('v')
const callMeHand = emoji.get('call_me_hand')

function getDestPath(filename) {
  return path.join(__dirname, '../../../' + filename)
}

function getSrcPath(filename) {
  return path.join(__dirname, '../' + filename)
}

// copy commitlint config
fs.copySync(getSrcPath('.commitlintrc.js'), getDestPath('.commitlintrc.js'))
console.log(`${success} 成功初始化commitlint config`)

// copy commitizen config
fs.copySync(getSrcPath('.cz-config.js'), getDestPath('.cz-config.js'))
console.log(`${success} 成功初始化commitizen config`)

// copy husky config
fs.copySync(getSrcPath('.huskyrc.json'), getDestPath('.huskyrc.json'))
console.log(`${success} 成功初始化husky config`)

// 提示添加package scripts
console.log(`
  请在package.json文件中添加如下scripts属性
  "commit": "node_modules/.bin/sfc-commit"
`)

// 提示使用
console.log('-------------------------------------')
console.log(chalk.green('Have a good day!'))
console.log(callMeHand, chalk.red('以后提交代码请用npm run commit 替代 git commit'), callMeHand)
