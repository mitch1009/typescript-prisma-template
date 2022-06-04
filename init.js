import {mkdirSync,readFileSync, existsSync, writeFileSync } from 'fs';
const app =  JSON.parse(readFileSync('package.json', 'utf8'))
const exists = (file) => {
    if (!existsSync(`.config`)) {
        mkdirSync('.config')
        const data = {
            APP_NAME: "",
            APP_VERSION: app.version
        }
        writeFileSync(`.config/${file}.json`, JSON.stringify(data), "utf-8")
    }
}
exists('settings')

