import React from "react";
import { Game } from "../../hooks/useGames";
import { Text } from "@chakra-ui/react";

interface Props {
  gamerev: Game;
}

const GameRatings = ({ gamerev }: Props) => {
  const ratingsMap: { [key: string]: string } = {
    "grand-theft-auto-v": "8.5/10",
  };
  return (
    <Text as="b" fontSize={22}>
      {ratingsMap[gamerev.slug]}
    </Text>
  );
};

export default GameRatings;
