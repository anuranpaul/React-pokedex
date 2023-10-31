import * as C from "./styles";
import { ReactComponent as BoltIcon } from "../../assets/icon-bolt.svg";
import { ReactComponent as DividerIcon } from "../../assets/divider-fire.svg";
import { Waves } from "../Waves";
import { PokemonType } from "../PokemonType";
import { Header } from "../Layout/Header";
import { fetchPokemon } from "../../api/fetchPokemon";
import imgSrc from "../../assets/img-charizard-min.png";
import { Pokemon } from "../../types/Pokemon";

type HeroSectionProps = {
  setModal: (value: boolean) => void;
  setPokemonData: (data: Pokemon) => void;
};

export const HeroSection = ({ setModal, setPokemonData }: HeroSectionProps) => {
  const handleClick = async () => {
    const { data } = await fetchPokemon("charizard");
    setPokemonData(data);
    setModal(true);
  };

  return (
    <C.Container>
      <Header />
      <div className="main-container">
        <C.Content>
          <C.CharizardData>
            <C.CharizardNumber>#006</C.CharizardNumber>
            <C.CharizardTypes>
              <PokemonType type={"fire"} tabIndex={false} />
              <PokemonType type={"flying"} tabIndex={false} />
            </C.CharizardTypes>
            <C.CharizardName>Charizard</C.CharizardName>
            <C.CharizardDescription>
              Charizard resembles a large, traditional European dragon.
              Despite the resemblance, Charizard is explicitly a Pokémon 
              of the Fire and Flying types, not a Dragon type, except 
              in its 'Mega Charizard X' form; however, it can learn Dragon-type moves.
            </C.CharizardDescription>
            <C.MoreDetailsButton onClick={handleClick}>
              <BoltIcon />
              More details
            </C.MoreDetailsButton>
          </C.CharizardData>

          <C.Divider>
            <DividerIcon />
          </C.Divider>

          <C.CharizardImg>
            <img
              src={imgSrc}
              width="488"
              height="528"
              alt="Imagem do Charizard"
            />
          </C.CharizardImg>
        </C.Content>
      </div>

      <Waves />
    </C.Container>
  );
};
