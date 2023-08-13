import React from 'react'
import { Container, Text, Image } from '@nextui-org/react';


export const NoFavorites = () => {
    return (
        <Container css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            height: 'calc(100vh- 100px)',
        }}>
            <Text sm={'false' as any} h1>No hay favoritos</Text>
            <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg'
            alt={'Mew two'}
            width={250}
            height={250}
            css={{
                opacity: '0.1',
            }}
            />
        </Container>
    )
}
