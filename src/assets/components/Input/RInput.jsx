import React from 'react';
import {useId} from "react";
import cs from './RInput.module.css'


// eslint-disable-next-line react/prop-types
const RInput = ({placeholder, onChange, label}) => {

    const id = useId()

    return (
        <label htmlFor={id}
               style={{display: "flex", flexDirection: "column", marginBottom: 20, fontSize: 30, fontWeight: "bold"}}>
            {label}
            <input className={cs.input} placeholder={placeholder} onChange={onChange} id={id} style={{marginTop: 4}}/>
        </label>
    );
};

export default RInput;