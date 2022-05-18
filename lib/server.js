const ExplorerController = require("./controllers/explorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    console.log(mission);
    const explorerInMission = ExplorerController.getExplorersByMission(mission);
    res.json(explorerInMission);
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission= req.params.mission;
    const amount =  ExplorerController.getExplorersAmountByMission(mission);
    res.json({ "mission" : mission, "quantity" : amount});
});

app.get('/v1/explorers/usernames/:mission', (req, res) => {
    const mission = req.params.mission;
    const usernames = ExplorerController.getExplorerUsernamesByMission(mission);
    res.json(usernames);
})

app.get('/v1/fizzbuzz/:score', (req, res) => {
    const score = req.params.score;
    const trick = ExplorerController.applyValidationInNumber(score);
    res.json({score, trick});
})

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});