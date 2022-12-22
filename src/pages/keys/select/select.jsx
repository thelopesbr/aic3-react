import './select.css'

export const Select = (options) => {

    return (
        <select className="selectKeys">
             <option value="default">Todas</option>
             {options.options.map(option => (
                <option name={option} value={option}>{option}</option>
            ))}
        </select>
    )
    
}