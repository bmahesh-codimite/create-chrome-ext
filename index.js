const fs = require("node:fs")

const appName = process.argv[2]

if (!appName) {
    console.log("Please provide an app name")
    process.exit(1)
}

const appDirectory = `${__dirname}/${appName}`
fs.mkdirSync(appDirectory)