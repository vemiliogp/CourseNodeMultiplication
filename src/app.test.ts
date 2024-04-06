import { ServerApp } from "./presentation/server-app";

describe("Test app.ts", () => {
  test("should call ServerApp.run with values", async () => {
    const serverRunMock = jest.fn();
    ServerApp.run = serverRunMock;
    process.argv = [
      "node",
      "app",
      "-b",
      "2",
      "-l",
      "10",
      "-d",
      "test-destination",
      "-n",
      "test-filename",
    ];

    await import("./app");

    expect(serverRunMock).toHaveBeenCalledWith({
      base: 2,
      limit: 10,
      showTable: false,
      fileName: "test-filename",
      fileDestination: "test-destination",
    });
  });
});
