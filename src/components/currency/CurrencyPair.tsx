import React, { useState, useEffect } from 'react'
import { Grid, ActionIcon } from '@mantine/core'
import { CurrencyField } from "./CurrencyField"
import { IconMenu, IconTrash } from '@tabler/icons-react'
import { CurrencyPairType } from '../../types/currency'
import { useActions } from '../../hooks/actions'

export function CurrencyPair( { base, target }: CurrencyPairType) {

    const [baseValue, setBaseValue] = useState(1)
    const [targetValue, setTargetValue] = useState(1 * (target.rate ?? 1))
    const { removeCurrency } = useActions()

    const sourceChanged = (value: number | "") => {
        if(value && target.rate) {
            setBaseValue(value)
            setTargetValue(target.rate * value)
        }
    }
    const targetChanged = (value: number | "") => {
        if(value && target.rate) {
            setBaseValue(value / target.rate)
            setTargetValue(value)
        }
    };

    const removeSelectedCurrency = (event: React.MouseEvent<HTMLButtonElement>) => {
        removeCurrency(target.code)
    }

    useEffect(() => {
        if(target.rate) {
            setTargetValue(target.rate * baseValue)
        }
    }, [target.rate]);

    return (
        <Grid align="flex-end">
            <Grid.Col span="auto">
                <CurrencyField currency={base} onChange={sourceChanged} value={baseValue} />
            </Grid.Col>
            <Grid.Col span="content" ta="center">
                <IconMenu size="1.5rem" />
            </Grid.Col>
            <Grid.Col span="auto">
                <CurrencyField currency={target} onChange={targetChanged} value={targetValue} />
            </Grid.Col>
            <Grid.Col span="content" ta="right">
                <ActionIcon mb=".2rem" variant="subtle" onClick={removeSelectedCurrency}>
                    <IconTrash size="1rem" />
                </ActionIcon>
            </Grid.Col>
        </Grid>
    )
}