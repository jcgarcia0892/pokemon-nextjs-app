import React, { FC, PropsWithChildren, useEffect } from 'react'
import Head from 'next/head'

import { Navbar } from '../ui';

type LayoutProps = {
    title?: string;
}

const origin = typeof globalThis === undefined ? '' : globalThis.location?.origin;

export const Layout: FC<PropsWithChildren & LayoutProps> = ({children, title} ) => {

    return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name='author' content='Julio Garcia' />
            <meta name='description' content={`Información sobre el pokemon ${title}`} />
            <meta name='keywords' content={`${title}, pokemon, pokedex`} />

            <meta property="og:title" content={`Información sobre ${title}`} />
            <meta property="og:description" content={`Esta es la página sbore ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>

        <Navbar />

        <main style={{
            padding: '0 20px',
        }}>
            { children }
        </main>
    </>
  )
}
