import { Spacer, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const Navbar = () => {
    
    const { theme } = useTheme();

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        padding: '0 20px',
        backgroundColor: theme?.colors.gray900.value
    }}>
        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt='icono de la app'
            width={70}
            height={70}

        />

        <Link href="/" passHref style={{display: 'flex'}}>
          <h2 style={{color: 'white'}}>P</h2>
          <h3 style={{color: 'white'}}>okemon</h3>
        </Link>

        <Spacer css={{flex: '1'}}/>

        <Link href="/favorites">
          <p style={{color: 'white'}}>Favoritos</p>
        </Link>
    </div>
  )
}
