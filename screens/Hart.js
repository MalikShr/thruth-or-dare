import GlobalGame from '../global/GlobalGame'
import { WahrheitsAufgabenMhart, WahrheitsAufgabenFhart, PflichtAufgabenMhart, PflichtAufgabenFhart } from '../data/Aufgaben'

let WahrheitsAufgabenM = WahrheitsAufgabenMhart
let WahrheitsAufgabenF = WahrheitsAufgabenFhart
let PflichtAufgabenM = PflichtAufgabenMhart
let PflichtAufgabenF = PflichtAufgabenFhart

const Mode = 'Hart'

export default function Hart() { 
    return(
        <GlobalGame 
        Mode = {Mode}
        WahrheitsAufgabenM = {WahrheitsAufgabenM }
        WahrheitsAufgabenF = {WahrheitsAufgabenF}
        PflichtAufgabenM = {PflichtAufgabenM}
        PflichtAufgabenF = {PflichtAufgabenF}
        />
    )
}