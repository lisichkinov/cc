import { Container } from '@mantine/core'
import { PropsWithChildren } from 'react'

export function Main({ children }: PropsWithChildren<any>) {
    return (
        <Container size="lg" py="xl">
            { children }
        </Container>
    )
}