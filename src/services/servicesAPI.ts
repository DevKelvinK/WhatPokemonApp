const BASE_URL = 'https://pokeapi.co/api/v2';

async function request(endpoint: string) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Erro no request:', error);
    throw error;
  }
}

export async function getPokemon(id: number | null) {
  return request(`/pokemon/${id}`);
}