const ExplorerService = require("./../../lib/services/explorerService");
const Reader = require("./../../lib/utils/reader");

describe("Explorer Service", () => {
  test("1.- Validar filtrador por mission", () => {
    const explorers = Reader.readJSONFile("explorer.json");
    expect(ExplorerService.filterByMission(explorers, "woopa")).toEqual([{
      name: "Woopa15",
      githubUsername: "ajolonauta15",
      score: 15,
      mission: "woopa",
      stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
    }]);
  });

  test("2.- Validar cantidad de explorers por mission", () => {
    const explorers = Reader.readJSONFile("explorer.json");
    expect(ExplorerService.getAmountOfExplorersByMission(explorers, "woopa")).toBe(1);
  });

  test("3.- Validar nombre de explorers por mission", () => {
    const explorers = Reader.readJSONFile("explorer.json");
    expect(ExplorerService.getExplorersUserNamesByMission(explorers, "woopa")).toEqual(['ajolonauta15' ]);
  });

});
