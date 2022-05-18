const ExplorerService = require('./../services/explorerService');
const FizzbuzzService= require('./../services/fizzbuzzService');
const Reader = require("./../utils/reader.js");

class ExplorerController {
    
    static getExplorersByMission(mission) { 
        const explorers = Reader.readJSONFile('explorer.js');
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorerUsernamesByMission(mission) { 
        const explorers = Reader.readJSONFile('explorer.js');
        return ExplorerService.getExplorersUserNamesByMission(explorers, mission);
    }

    static getExplorersAmountByMission(mission) { 
        const explorers = Reader.readJSONFile('explorer.js');
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static applyValidationInNumber(number) {
        return FizzbuzzService.applyValidationInNumber(number);
    }

}

module.exports = ExplorerController;
 