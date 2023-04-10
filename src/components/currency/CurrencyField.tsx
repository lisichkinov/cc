import { NumberInput, Avatar } from '@mantine/core'
import { CurrencyType } from '../../types/currency'

type Props = {
    currency: CurrencyType,
    onChange: (value: number | "") => void | undefined,
    value: number
}

export function CurrencyField({ currency, onChange, value }: Props) {
    return (
        <NumberInput 
            rightSection={<Avatar size="xs" src={`images/flags/${currency.country}.svg`} alt={currency.name} mr="sm" />}
            label={currency.name} 
            placeholder={currency.name} 
            icon={currency.symbol} 
            onChange={onChange}
            min={0}
            step={0.01}
            precision={2}
            value={value}
        />
    )
}