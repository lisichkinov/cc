import React, { useState } from 'react'
import { Card, Button, LoadingOverlay, Select, Grid, Divider, Avatar } from '@mantine/core'
import { useActions } from '../../hooks/actions'
import { useCurrency } from '../../hooks/currency'
import { CurrencyList } from './CurrencyList'

export function CurrencyCard() {

    const {
        all, 
        base,
        selected,
        available,
        isLoading,
        rates
    } = useCurrency();

    const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null)
    const { addCurrency, setBaseCurrency } = useActions();

    const addToSelectedCurrencies = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(selectedCurrency) {
            addCurrency(selectedCurrency)
            setSelectedCurrency(null)
        }
    }

    return (
        <Card shadow="md" radius="md" padding="xl" mt="lg">
            <Select
                icon={<Avatar size="md" src={`./images/flags/${base?.country}.svg`} alt={base?.name} mr="sm" />}
                searchable
                placeholder="Основная валюта"
                data={all.map(c => ({ value: c.code, label: c.name }))}
                disabled={!all.length}
                size="lg"
                value={base?.code}
                sx={{
                    '& .mantine-Select-input': {
                        borderColor: 'transparent'
                    }
                }}
                onChange={(value) => value && setBaseCurrency(value)}
            />
            <Card.Section>
                <Divider my="xl" />
            </Card.Section>

            {isLoading &&  <LoadingOverlay visible={true} overlayBlur={2} />}

            {!isLoading &&
                <>
                    <CurrencyList 
                        baseCurrency={base}
                        targetCurrencies={selected}
                        rates={rates}
                    />
                    <Card.Section>
                        <Divider my="xl" />
                    </Card.Section>
                    <Grid>
                        <Grid.Col span="auto">
                            <Select
                                searchable
                                placeholder="Отслеживаемая валюта"
                                data={available.map(c => ({ value: c.code, label: c.name }))}
                                disabled={!available.length}
                                value={selectedCurrency}
                                onChange={setSelectedCurrency}
                            />
                        </Grid.Col>
                        <Grid.Col span="content" ta="center">
                            <Button
                                disabled={!available.length || !selectedCurrency}
                                onClick={addToSelectedCurrencies}
                            >
                                Добавить
                            </Button>
                        </Grid.Col>
                    </Grid>
                </>
            }
            
        </Card>
    )
}