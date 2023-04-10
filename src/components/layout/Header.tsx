import { Text, Container, Title, Image } from '@mantine/core'
import logoSrc from '../../assets/images/logo.svg'

export function Header() {
    return (
        <header>
            <Container size="lg" py="xl">
                <Image maw={100} mx="auto" radius="md" src={logoSrc} alt="Logo" color="white"/>

                <Title order={2} ta="center">
                    Валютный калькулятор
                </Title>

                <Text c="dimmed" ta="center" mt="lg">
                    Курсы валют предоставлены <a href="https://www.coinbase.com/" target="_blank">coinbase.com</a>
                </Text>
            </Container>
        </header>
    )
}