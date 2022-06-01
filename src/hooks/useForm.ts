import { useState } from 'react';

import { FormValuesInterface } from '../interfaces/form';

export const useForm = (initialState = {}) => {
    const [formValues, setFormValues] = useState<FormValuesInterface>(initialState);

    const handleInputChange = ({ target }: any) => {
        const isCheckeable = target.type === 'radio';
        
        setFormValues({
            ...formValues,
            [ target.name ]: isCheckeable ? target.id : target.value,
        })
    }

    return [formValues, setFormValues, handleInputChange] as const;
}