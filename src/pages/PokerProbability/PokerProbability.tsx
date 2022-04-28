import clsx from "clsx";
import { createReadStream } from "fs";
import React from "react";
import { PlayingCard } from "./PlayingCard";
import {
  Card,
  deck,
  hasFullHouse,
  hasFourOfAKind,
  hasHighCard,
  hasPair,
  hasStraight,
  hasThreeOfAKind,
  hasTwoPairs,
  printCard,
  hasFlush,
} from "./utils";

function PokerProbability() {
  const [selectedCards, setSelectedCards] = React.useState<Card[]>([]);

  let cards = deck.map((card: Card) => {
    return (
      <PlayingCard
        card={card}
        isSelected={selectedCards.includes(card)}
        onSelect={(card) => toggleSelectedCards(card)}
      ></PlayingCard>
    );
  });

  function toggleSelectedCards(card: Card) {
    const index = selectedCards.findIndex(
      (c) => c.rank === card.rank && c.suit === card.suit
    );
    if (index != -1) {
      setSelectedCards([
        ...selectedCards.slice(0, index),
        ...selectedCards.slice(index + 1),
      ]);
    } else {
      if (selectedCards.length === 5) {
        return;
      }
      setSelectedCards([...selectedCards, card]);
    }
  }

  return (
    <div>
      <div>Selected cards : {selectedCards.map(printCard).join(" , ")}</div>
      <div className="flex flex-row space-x-3">
        <div>
          High Card : <Status isTrue={hasHighCard(selectedCards)} />
        </div>
        <div>
          One Pair : <Status isTrue={hasPair(selectedCards)} />{" "}
        </div>
        <div>
          Two Pairs : <Status isTrue={hasTwoPairs(selectedCards)} />{" "}
        </div>
        <div>
          Three of a kind : <Status isTrue={hasThreeOfAKind(selectedCards)} />{" "}
        </div>
        <div>
          Straight : <Status isTrue={hasStraight(selectedCards)} />{" "}
        </div>
        <div>
          Full House : <Status isTrue={hasFullHouse(selectedCards)} />{" "}
        </div>
        <div>
          Flush : <Status isTrue={hasFlush(selectedCards)} />{" "}
        </div>
        <div>
          Four of a kind : <Status isTrue={hasFourOfAKind(selectedCards)} />{" "}
        </div>
      </div>
      <div className="flex flex-row flex-wrap">
        {cards.map((c, i) => (
          <div className="m-2" key={i}>
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}

function Status({ isTrue }: { isTrue: boolean }) {
  return (
    <div
      className={
        "text-center " + clsx("bg-green-400", { "bg-red-400": !isTrue })
      }
    >
      {String(isTrue)}
    </div>
  );
}

export default PokerProbability;
