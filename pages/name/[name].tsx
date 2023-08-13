import React, { useEffect, useState } from 'react'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';

import confetti from 'canvas-confetti';

import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts';
import { Pokemon, PokemonListResponse } from '@/interfaces';
import { getPokemonInfo, localFavorites } from '@/utils';

interface Props {
    pokemon: Pokemon
}

const PokemonByNamePage: NextPage<Props> = ({pokemon}) => {
    const [isInFavorites, setIsInFavorites] = useState(false);
    useEffect(() => {
        setIsInFavorites(localFavorites.existInFavorites(pokemon.id));
    }, [pokemon.id])
    
    
    const onToggleFavorites = () => {
        localFavorites.toggleFavorite(pokemon.id);
        setIsInFavorites(!isInFavorites);

        if(isInFavorites) return;

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0,
            }
        })
    }
  return (
    <Layout title={pokemon.name}>
        <Grid.Container css={{marginTop: '5px'}} gap={2}>
            <Grid xs={12} sm={4}>
                <Card hoverable css={{padding: '30px'}}>
                    <Card.Body>
                        <Card.Image
                            src={pokemon.sprites?.other?.dream_world.front_default || '/no-image.png'}
                            alt={pokemon.name}
                            width="100%"
                            height={200}
                        />
                    </Card.Body>
                </Card>
            </Grid>
            <Grid xs={12} sm={8}>
                <Card>
                    <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
                        <Text h1 transform='capitalize' sm={'false' as any}>{pokemon.name}</Text>
                        <Button
                            color="gradient"
                            ghost={!isInFavorites}
                            onClick={onToggleFavorites}
                        >
                            {isInFavorites ? 'En Favoritos' : 'Guardar en Favoritos'}
                        </Button>
                    </Card.Header>
                    <Card.Body>
                        <Text sm={'false' as any} size={30}>Sprites:</Text>
                        <Container direction='row' display='flex'>
                            <Image
                                src={pokemon.sprites?.front_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}

                            />
                            <Image
                                src={pokemon.sprites?.back_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}

                            />
                            <Image
                                src={pokemon.sprites?.front_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}

                            />
                            <Image
                                src={pokemon.sprites?.back_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}

                            />
                        </Container>
                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container>
    </Layout>
  )
}

export default PokemonByNamePage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const pokemons151 = [...Array(151)].map((_, index) => ({name: data.results[index].name}));

    return {
        paths: pokemons151.map((value) => ({params: value})),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<any> = async (context) => {
    const { name } = context.params as { name: string };
    const pokemon = await getPokemonInfo(name);
    return {
        props: {
            pokemon
        }
    }
}