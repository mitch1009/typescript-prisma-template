import {mkdirSync,readFileSync, existsSync, writeFileSync } from 'fs';
const app =  JSON.parse(readFileSync('package.json', 'utf8'))
import * as random from 'randomstring'
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
console.log(random.generate({length:10, charset:'numeric'}))
exists('settings')

