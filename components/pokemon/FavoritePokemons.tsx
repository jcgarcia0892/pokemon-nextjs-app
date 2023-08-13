import React, { FC } from 'react'
import { Card, Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from '.';

interface Props {
    pokemonsIdList: number[];
}

export const FavoritePokemons: FC<Props> = ({pokemonsIdList}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
    {
      pokemonsIdList.map((id) => (
        <FavoriteCardPokemon key={id} id={id} />
      ))
    }
  </Grid.Container>
  )
}
