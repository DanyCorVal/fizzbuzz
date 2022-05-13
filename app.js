const FizzbuzzService = require("./lib/services/FizzbuzzService");
const ExplorerService = require("./lib/services/explorerService");
const Reader = require("./lib/utils/reader")
const express = require('express')
const app = express()

const explorers = Reader.readJSONFile('explorers.json');

app.use(express.json())

const port = 3000;

app.listen(port, () => {
    console.log(`App en puerto:${port}`)
});

app.get('/v1/explorers/:mission', (req, res) => {
    const mission = req.params.mission;
    const explorersFilter = ExplorerService.filterByMission(explorers, mission);
    res.status(200).json(explorersFilter);
});

app.get('/v1/explorers/amount/:mission', (req, res) => {
    const mission = req.params.mission;
    const cantidad = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    res.status(200).json({ cantidadExplorer:cantidad });
});

app.get('/v1/explorers/usernames/:mission', (req, res) => {
    const mission = req.params.mission;
    const explorersNames = ExplorerService.getExplorersUserNamesByMission(explorers, mission);
    res.status(200).json({ exploreresNames: explorersNames });
});