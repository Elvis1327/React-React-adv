import { useField,  ErrorMessage } from 'formik';
import React from 'react';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {

    const [ field, meta ] = useField(props);

    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <input 
                { ...field } 
                { ...props }
                className="text-input" 
            />
            <ErrorMessage name={props.name} component="span" className="error-input" />
            {/* {meta.touched && meta.error && (<span className="error">{meta.error}</span>)} */}
        </>
    )
}