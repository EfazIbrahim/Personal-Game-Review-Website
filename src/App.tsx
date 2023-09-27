import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./assets/components/NavBar";
import GameGrid from "./assets/components/GameGrid";

function App() {
  return (
    <>
      <Text as="b" fontSize={50} padding={1}>
        Game Reviews
      </Text>
      <Grid
        templateAreas={{
          base: `"nav""main"`,
          lg: `"nav nav""aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">Aside</GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}
export default App;
