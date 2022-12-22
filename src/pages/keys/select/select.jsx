import './select.css'

import React, { useEffect, useState } from 'react'

export const Select = (options) => {
    const [state, setState] = useState(2)

    return (
        <select value={state} onChange={console.log('seu cu')} className="selectKeys">
             {options.options.map(option => (
                <option name={option} value={option}>{option}</option>
            ))}
        </select>
    )
    
}