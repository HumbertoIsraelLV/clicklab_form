import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [formValues, setFormValues] = useState(initialState);

    const handleInputChange = ({ target }: any) => {
        const isCheckeable = target.type === 'radio';

        setFormValues({
            ...formValues,
            [ target.name ]: isCheckeable ? target.id : target.value,
        })
    }

    return [formValues, handleInputChange];
}