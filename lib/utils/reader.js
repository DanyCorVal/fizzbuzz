const fs = require("fs");

// Part 1 Read json file ==========================
 
 class Reader {
    static readJSONFile(filePath) {
        const rawdata = fs.readFileSync("explorers.json");
        return JSON.parse(rawdata);
    }
}

module.exports = Reader;
