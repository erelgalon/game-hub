import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Gamegrid from "./components/Gamegrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGeneres";

function App() {
  const [Selctedgenre, setSelctedGenre] = useState<Genre | null>(null);


  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // wider than 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GenreList onSelectGenre={(genre) => setSelctedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Gamegrid selectedGenre={Selctedgenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
