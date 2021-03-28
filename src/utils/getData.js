const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
  const apiUrl = id ? `${API}${id}` : API;
  try {
    const response = fetch(apiUrl);
    const data = await response.json();//convierte a json
  } catch(error) {
    console.log('Fetch error!', error)
  }
}

export default getData;