import React, { useState } from "react";
import { ClientComponent } from "../../Framework/GameClient";
import { GameDefinition } from "../../Framework/types";

type GameListItemProps = {
  game: GameDefinition;
};

type PlayPageProps = { getGameList: () => GameDefinition[] };

export const PlayPage = (props: PlayPageProps) => {
  const [game, selectGame] = useState<GameDefinition | null>(null);

  const GameListItem = (props: GameListItemProps) => {
    return (
      <button onClick={() => selectGame(props.game)}>
        {props.game.gameName}
      </button>
    );
  };

  const GameModePicker = () => {
    const gameList: GameDefinition[] = props.getGameList();

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {gameList.map((g) => (
          <GameListItem key={g.gameName} game={g} />
        ))}
      </div>
    );
  };

  const content = game ? <ClientComponent {...game} /> : <GameModePicker />;

  return <div className="play-page">{content}</div>;
};
