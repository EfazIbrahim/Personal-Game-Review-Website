import React from "react";
import { Game } from "../../hooks/useGames";
import { Card, CardBody, Image, Heading, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import GameReview from "./GameReview";
import GameRatings from "./GameRatings";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconList>
        <GameReview gameslug={game}></GameReview>
        <GameRatings gamerev={game}></GameRatings>
      </CardBody>
    </Card>
  );
};

export default GameCard;
