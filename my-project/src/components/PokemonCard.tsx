interface pokemonProps {
  name: string;
  imgSrc?: string;
}

function PokemonCard({ name, imgSrc }: pokemonProps) {
  return (
    <figure>
      {imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
