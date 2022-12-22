
import './keys.css'

import { Confronto } from './confrontos/confronto'
import { Select } from './select/select'

import { KeysAPI }  from './backend/keys.js'
import { GamesAPI } from './backend/games.js'

import { Duo } from './backend/database/duo.js'
import { Names } from './backend/database/names.js'
import { Player } from './backend/database/player.js'

export const Keys = () => {

    const keys_api = new KeysAPI()
    const doubles = []
        for (let i = 0; i < 11; i++) {
            doubles.push(new Duo(
                new Player(Names[Math.round(Math.random() * 99)]),
                new Player(Names[Math.round(Math.random() * 99)])
            ))
        }
        

    keys_api.generate(doubles)
    const games = new GamesAPI()
    const gamesList = games.generate(keys_api.keys)
   

    return (
        <div className="screenKeys">
            <div className="containerKeys">
                <div id="games" className="Keys">
                    <Select id="keysSelect" options={Object.keys(keys_api.keys)}/>
                    {gamesList.map((game) => {
                        return <Confronto chave={game['key']} duoOne={game['duo1']} duoTwo={game['duo2']} court={game['court']} time="16:00" date="21/12/2022" />
                    })}
                </div>
            </div>
        </div>
    )
}


