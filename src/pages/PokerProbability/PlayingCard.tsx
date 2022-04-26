import clsx from "clsx";
import React from "react";

export const ranks = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "T",
  "J",
  "Q",
  "K",
];

export const suits = ["S", "C", "H", "D"];

export const deck = ranks
  .map((rank) => {
    return suits.map((suit) => {
      return {
        rank,
        suit,
      };
    });
  })
  .flat();

console.log(deck);

export interface Card {
  rank: string;
  suit: string;
}

export function PlayingCard(card: Card) {
  const src = `/poker/${card.rank}${card.suit}.svg`;

  console.log(src);
  return (
    <div className={clsx({ "border-8 border-indigo-600 bg-indigo-600": true })}>
      <img src={src} style={{ height: "200px" }}></img>
    </div>
  );
}
