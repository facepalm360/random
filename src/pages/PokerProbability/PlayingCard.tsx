import clsx from "clsx";
import React from "react";
import { Card } from "./utils";

export interface props {
  card: Card;
  isSelected: boolean;
  onSelect: (card: Card) => void;
}

export function PlayingCard({ card, isSelected, onSelect }: props) {
  const src = `/poker/${card.rank}${card.suit}.svg`;

  return (
    <div
      className={clsx({
        "border-8 border-indigo-600 bg-indigo-600": isSelected,
        "border-8 border-white ": !isSelected,
      })}
      onClick={() => onSelect(card)}
    >
      <img src={src} style={{ height: "200px" }}></img>
    </div>
  );
}
