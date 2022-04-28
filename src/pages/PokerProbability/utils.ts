import _ from "lodash";

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

export type Suit = "S" | "C" | "H" | "D";
export const suits: Suit[] = ["S", "C", "H", "D"];

const suitNames = {
  S: "Spades",
  C: "Clubs",
  H: "Hearts",
  D: "Diamonds",
};

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

export interface Card {
  rank: string;
  suit: string;
}

export const printCard = (card: Card) =>
  card.rank + " " + suitNames[card.suit as Suit];

export const hasHighCard = (cards: Card[]) => {
  if (cards.length == 0) return false;

  const duplicates = getDuplicates(cards);
  return duplicates.length == 0 && !hasStraight(cards);
};

export const hasPair = (cards: Card[]) => {
  const duplicates = getDuplicates(cards);
  return duplicates.length == 2;
};

export const hasTwoPairs = (cards: Card[]) => {
  const duplicates = getDuplicates(cards);
  return duplicates.length == 4 && !duplicates.every((r) => r == duplicates[0]);
};

export const hasThreeOfAKind = (cards: Card[]) => {
  const duplicates = getDuplicates(cards);
  return duplicates.length == 3;
};

export const hasFourOfAKind = (cards: Card[]) => {
  const duplicates = getDuplicates(cards);
  return duplicates.length == 4 && duplicates.every((r) => r == duplicates[0]);
};

export const hasFlush = (cards: Card[]) => {
  const duplicates = getDuplicates(cards);
  return duplicates.length == 5;
};

export const hasStraight = (cards: Card[]) => {
  if (cards.length != 5) return false;
  const rankIndices = cards.map((card) => ranks.indexOf(card.rank));

  const aceIndex = rankIndices.indexOf(0);
  if (aceIndex != -1 && rankIndices.includes(12)) {
    rankIndices[aceIndex] = 13;
  }

  const sortedRankIndices = rankIndices.sort((a, b) => a - b);

  return _(sortedRankIndices)
    .tail()
    .every((rankIndex, i) => {
      return rankIndex - 1 === rankIndices[i];
    });
};

const getDuplicates = (cards: Card[]) => {
  const ranks = cards.map((card) => card.rank);
  const duplicates = ranks.filter((rank, index) => {
    const remainingRanks = [
      ...ranks.slice(0, index),
      ...ranks.slice(index + 1),
    ];
    return remainingRanks.includes(rank);
  });

  //   console.log(duplicates);
  return duplicates;
};
