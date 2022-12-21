
import './keys.css'

import { CardGame } from './CardGame/cardGame'

export const Keys = () => {
    return (
        <div className="screenKeys">
            <div className="containerKeys">
                <select className="selectKeys">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                <CardGame title="C" />
            </div>
        </div>
    )
}


