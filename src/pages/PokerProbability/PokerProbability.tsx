import { createReadStream } from "fs";
import React from "react";
import { Card, deck, PlayingCard } from "./PlayingCard";

function PokerProbability() {
  let cards = deck.map((card: Card) => {
    return <PlayingCard rank={card.rank} suit={card.suit}></PlayingCard>;
  });

  cards = cards.concat([
    <PlayingCard rank={"1"} suit={"B"}></PlayingCard>,
    <PlayingCard rank={"1"} suit={"J"}></PlayingCard>,
  ]);

  return (
    <div>
      <div>Probability : 0.0001%</div>
      <div className="flex flex-row flex-wrap">
        {cards.map((c) => (
          <div className="m-2">{c}</div>
        ))}
      </div>
    </div>
  );
}

export default PokerProbability;
