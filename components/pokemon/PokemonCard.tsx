import React, { FC } from 'react'
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { SmallPokemon } from '@/interfaces'
import { useRouter } from 'next/router';

interface Props {
    pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({pokemon}) => {

    const router = useRouter();
    const navigateToPokemonPage = () => {
        router.push(`/name/${pokemon.name}`);    
        // router.push(`/pokemon/${pokemon.id}`);    
    }
  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
        <Card onClick={ navigateToPokemonPage } hoverable clickeable="true">
            <Card.Body css={{p: 1}}>
            <Card.Image
                src={pokemon.img}
                width="100%"
                height={140}
            />
            </Card.Body>
            <Card.Footer>
            <Row justify="space-between">
                <Text sm={'false' as any} transform="capitalize">{pokemon.name}</Text>
                <p>#{pokemon.id}</p>
            </Row>
            </Card.Footer>
        </Card>
    </Grid>
  )
}
