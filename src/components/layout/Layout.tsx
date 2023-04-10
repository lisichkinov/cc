import { AppShell } from '@mantine/core'
import { PropsWithChildren } from 'react'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'

export function Layout( { children }: PropsWithChildren<any> ) {
    return (
        <AppShell header={<Header />}>
            <Main>
                { children }
            </Main>
        </AppShell>
    )
}