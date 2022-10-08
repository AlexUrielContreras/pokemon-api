import axios from "axios";

export const fetchPokemon = async (pokeName) => {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

    const lowerCaseName = pokeName.toLowerCase()

    try {
        const response = await axios({
            method: "get",
            url: `${baseUrl}${lowerCaseName}`,
            responseType: "json",
        });

        return response.data;
    } catch (err) {
        console.error(err);
    }
};
