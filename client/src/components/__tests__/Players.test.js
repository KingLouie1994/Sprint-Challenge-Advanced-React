import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import { Players } from "../Players";

afterEach(cleanup);

describe("Players component", () => {
  it("render loading when no players", () => {
    const { getByText } = render(<Players />);
    expect(getByText(/loading.../i)).toBeInTheDocument();
  });

  it("renders players", () => {
    const fakePlayers = [
      { id: 1, name: "Alex" },
      { id: 2, name: "Megan" }
    ];
    const { getAllByTestId } = render(<Players players={fakePlayers} />);
    const playerNames = getAllByTestId("player-name").map(li => li.textContent);
    const fakePlayernames = fakePlayers.map(player => `Name: ${player.name}`);
    expect(fakePlayernames).toEqual(playerNames);
  });
});
