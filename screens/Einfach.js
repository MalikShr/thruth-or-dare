import GlobalGame from '../global/GlobalGame'
import { WahrheitsAufgabenMeinfach, WahrheitsAufgabenFeinfach, PflichtAufgabenMeinfach, PflichtAufgabenFeinfach } from '../data/Aufgaben'

const WahrheitsAufgabenM = WahrheitsAufgabenMeinfach
const WahrheitsAufgabenF = WahrheitsAufgabenFeinfach
const PflichtAufgabenM = PflichtAufgabenMeinfach
const PflichtAufgabenF = PflichtAufgabenFeinfach
const Mode = 'Einfach'

export default function Einfach() { 
    return(
        <GlobalGame 
        Mode={Mode}
        WahrheitsAufgabenM = {WahrheitsAufgabenM}
        WahrheitsAufgabenF = {WahrheitsAufgabenF}
        PflichtAufgabenM = {PflichtAufgabenM}
        PflichtAufgabenF = {PflichtAufgabenF}
        />
    )
}