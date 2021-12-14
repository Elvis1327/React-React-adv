import { useField } from 'formik';
import React from 'react';

interface Props {
    label: string;
    name: string;

    [x: string]: any;
}

export const MyCheckBox = ({ label, ...props }: Props) => {

    const [ field, meta ] = useField({...props, type: 'checkbox'});

    return (
        <>
            <label>
                <input type="checkbox" {...field} {...props} />
                { label }
            </label>
            { meta.touched && meta.error && <span className="error">{meta.error}</span> }
        </>
    )
}