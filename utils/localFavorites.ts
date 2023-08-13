
const toggleFavorite = (id: number): void => {
    let favoritesNumbers: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if(favoritesNumbers.includes(id)) {
        favoritesNumbers = favoritesNumbers.filter((pokeId) => pokeId !== id);
    } else {
        favoritesNumbers.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favoritesNumbers));
}

const existInFavorites = (id: number): boolean => {
    if(typeof window === 'undefined') return false;
    
    const favoritesNumbers: number[] = JSON.parse(localStorage?.getItem('favorites') || '[]');
    return favoritesNumbers.includes(id);
}

const pokemons = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export default {
    toggleFavorite,
    existInFavorites,
    pokemons,
};