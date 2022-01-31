import React from 'react';
import './inputs.scss'

export default function Input({ value, onChange }) {
    return (
        <input className="input" type="text" value={value} onChange={onChange} />
    )
}
