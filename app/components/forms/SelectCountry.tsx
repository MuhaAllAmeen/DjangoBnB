'use client';
import Select from 'react-select'
import useCountries from '@/app/hooks/useCountries';

export type SelectCountryValue = {
    label: string;
    value: string;
}

interface SelectCountryProps {
    value?: SelectCountryValue
    onChange: (valye: SelectCountryValue)=>void;
}

const SelectCountry: React.FC<SelectCountryProps> = ({
    value, onChange
}) => {
    const {getAll} = useCountries()
    return (
        <>
            <Select placeholder="Anywhere" isClearable options={getAll()} value={value} onChange={(value)=> onChange(value as SelectCountryValue)}/>
        </>
    )
}

export default SelectCountry