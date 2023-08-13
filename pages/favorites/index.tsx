import React, { useEffect, useState } from 'react'
import { Layout } from '@/components/layouts'
import { FavoritePokemons, NoFavorites } from '@/components/pokemon'
import { localFavorites } from '@/utils';

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);  

  return (
    <Layout title="Pókemon - Favoritos">
      {
        favoritePokemons.length === 0
        ? (<NoFavorites />)
        : (<FavoritePokemons pokemonsIdList={favoritePokemons} />)
      }
      
    </Layout>
  )
}

export default FavoritesPage