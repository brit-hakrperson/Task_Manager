let path = require('path')
let fs = require('fs')
const logger = require('../logger/logger')
const locale = "JSON"


function exportJSON (obj) {
    try {
        let data = JSON.parse(obj)
        let logpath = "./src/data/exports/" + obj + ".log"

        try {
            fs.appendFileSync(logpath, ('\n' + data));
        } catch (err) {
            console.error(err);
        };
    } catch (error) {
        logger("error in exporting object as json", locale)
        console.error(error)
    }

}

function importJSON (targetPath) {
    try {
        
    } catch (error) {
      logger("error in importing object from json", locale)  
    }
}





/*

json data held in an object. 
object will export to .

*/