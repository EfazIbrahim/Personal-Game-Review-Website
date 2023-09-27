import { Game } from "../../hooks/useGames";
import { Text } from "@chakra-ui/react";

interface Props {
  gameslug: Game;
}

const GameReview = ({ gameslug }: Props) => {
  const reviewMap: { [key: string]: string } = {
    "grand-theft-auto-v":
      "Heists are great with friends for casual fun. Single-player is good as well!",
    portal: "Have not played",
    "portal-2": "Have not played",
    "the-witcher-3-wild-hunt":
      "Greatest game ever made. Exceptional story,characters and gameplay.",
    "counter-strike-global-offensive":
      "FPS game with a very high skill ceiling. Competitive and rewarding to learn.",
    "the-elder-scrolls-v-skyrim":
      "Open-world done right. Has everything you expect from skilltrees and magic to dragons and swords.",
    "tomb-raider": "Have not played",
    "left-4-dead-2": "Have not played",
    "red-dead-redemption-2":
      "A story to remember with characters equally memorable. Gameplay is fantastic as well.",
    "god-of-war-2":
      "A reboot done right. It does justice to Kratos's character and introduces the Norse world beautifully",
  };
  return <Text>{reviewMap[gameslug.slug]}</Text>;
};

export default GameReview;
