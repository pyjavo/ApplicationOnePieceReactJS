import { useEffect } from "react";
import getCharacters from "../../services/apiService";
import characterImages from "./chartersImages"; // Importa las imágenes de los personajes
import './CharacterCard.css'; // Archivo CSS importado

const CharacterFetcher = ({ setCharacters }) => {
  // const [loading, setLoading] = useState(true); // Inicializa el estado de carga

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      const filteredCharacters = data
        .filter(({ name }) => characterImages[name])
        .map(({ id, name, age, bounty }) => ({
          id,
          name,
          image: characterImages[name],
          age,
          bounty,
        }));

      setCharacters(filteredCharacters);
      // setLoading(false); // Cambia a falso una vez cargados los personajes
    };

    fetchCharacters();
  }, [setCharacters]);
  // if (loading) {
  //   return (
  //     <div className="loading">
  //       <div className="spinner"></div>
  //       <p className="charge"> Cargando personajes...</p>
  //     </div>
  //   );
  // }
  return null; // Este componente no necesita renderizar nada más
};

export default CharacterFetcher;
