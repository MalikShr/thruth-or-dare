import GlobalGame from '../global/GlobalGame'
import { WahrheitsAufgabenMparty, WahrheitsAufgabenFparty, PflichtAufgabenMparty, PflichtAufgabenFparty } from '../data/Aufgaben'

let WahrheitsAufgabenM = WahrheitsAufgabenMparty
let WahrheitsAufgabenF = WahrheitsAufgabenFparty
let PflichtAufgabenM = PflichtAufgabenMparty
let PflichtAufgabenF = PflichtAufgabenFparty

const Mode = 'Party'

export default function Party() { 
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