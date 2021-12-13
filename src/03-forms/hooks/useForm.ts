import { ChangeEvent, useState } from 'react';

export const useForm = <E>( initialValues: E ) => {

    const [ formData, setFormData ] = useState(initialValues);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            };
        });
    };

    const resetForm = () => {
        setFormData(initialValues);
    };

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        ...formData,
        onChange,
        resetForm,
        isValidEmail
    }

}



