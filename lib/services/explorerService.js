class ExplorerService {
    static filterByMission(explorers, mission) {
        return explorers.filter((explorer) => explorer.mission == mission)
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        return explorers.filter((explorer) => explorer.mission == mission).length
    }

    static getExplorersUserNamesByMission(explorers, mission) {
        const explorersFilter = explorers.filter((explorer) => explorer.mission == mission)
        return explorersFilter.map((explorer) => explorer.githubUsername)
    }
}

module.exports = ExplorerService;
