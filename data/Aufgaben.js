export const Players = []
export const GendersM = []
export const GendersF = []

export const specialTasks = [
    'macht alle 5 Liegestütze',
    'Zählt Länder auf, die sich in Asien befinden.',
    'Zählt Länder auf, die sich in Afrika befinden.',
    'Zählt Länder auf, die sich in Europa befinden.',
    'Zählt Länder auf, die sich in Südamerika befinden.',
    'Zählt Länder auf die mit A beginnen',
    'Zählt Länder auf die mit K beginnen',
    'Zählt Länder auf die mit B beginnen',
    'Zählt Städte auf die mit U beginnen',
    'Zählt Städte auf die mit I beginnen',

]

export const WahrheitsAufgabenMeinfach = [
    ', wie war dein erster Kuss?',
    ', wen würdest du aus diesem Raum am ehesten daten?',
    ', hast du schon mal etwas geklaut? Wenn ja, was?',
    ', was war dein schlimmstes Date?',
    ', wie kann man dich am schnellsten von sich begeistern?',
    ', was würdest du machen, wenn du nur noch eine Stunde zu leben hättest?',
    ', hast du schon einmal jemanden gestalkt?',
    ', bist du ein eifersüchtiger Mensch?'
]

export const wahrheitMincludeFEinfach = (randomNameF) => {
    return [
        ', hattest du schon einmal einen Crush auf ' + randomNameF.text + '?',
        ', würdest du ' + randomNameF.text + ' auf ein Date ausführen?',
        ', würdest du gerne mal einen Abend mit ' + randomNameF.text + ' verbringen?',
        ', ' + randomNameF.text + "'s Körper ist der schönste!",
    ]
}

export const wahrheitMincludeMEinfach = (randomNameM) => {

    return [
        ', hast du ' + randomNameM.text + ' einmal eine bestimmte Sache nicht gegönnt?',
        ', warst du schon einmal eifersüchtig auf ' + randomNameM.text + ' ?',
        ', würdest du ' + randomNameM.text + ' küssen?',
        ', findest du ' + randomNameM.text + ' atrraktiv?',
    ]
}

    export const wahrheitFincludeFEinfach = (randomNameF) => {
        return [
            ', hatten du und ' + randomNameF.text + ' schon einmal einen gemeinsamen Crush?',
            ', haben du und ' + randomNameF.text + ' ein gemeinsames Geheimnis?',
            ', erzähle uns von dem verücktesten Treffen, dass du mit ' + randomNameF.text + ' hattest.',
            ', was war dein letzter Streit mit ' + randomNameF.text + '?',
        ]
    }

    export const wahrheitFincludeMEinfach = (randomNameM) => {
        return [
            ', wie würdest du ' + randomNameM.text + ' auf einer Skala von 1-10 bewerten?',
            ', hattest du schon einmal etwas mit ' + randomNameM.text + '?',
            ', würdest du gerne mit ' + randomNameM.text + ' etwas anfangen?',
            ', wie war dein letztes Treffen mit ' + randomNameM.text + '?',
        ]
    }

    export const pflichtMincludeMEinfach = (randomNameM) => {
        return [
            ', spiele mit ' + randomNameM.text + ' eine Runde Armdrücken.',
            ', duelliere dich mit ' + randomNameM.text + ' in einem Rapbattle.',
            ', trinke ein Getränk schneller als ' + randomNameM.text + '.',
            ', küsse ' + randomNameM.text + ' auf die Wange.',
        ]
    }

    export const pflichtMincludeFEinfach = (randomNameF) => {
        return [
            ', massiere ' + randomNameF.text + ' eine minute lang.',
            ', mache ' + randomNameF.text + ' einen Heiratsantrag.',
            ', mache ' + randomNameF.text + ' ein ernstgemeintes Kompliment.',
            ', frage ' + randomNameF.text + ' nach einem Date.'
        ]
    }

    export const pflichtFincludeFEinfach = (randomNameF) =>
    {
        return [
            ', flüstere ' + randomNameF.text + ' etwas heißes ins Ohr.',
            ', kitzele ' + randomNameF.text + ' 30 Sekunden lang',
            ', tausche dein T-Shirt mit ' + randomNameF.text + '.',
            ', duelliere dich mit ' + randomNameF.text + ' in einem Rapbattle.',
        ]
    }

    export const pflichtFincludeMEinfach = (randomNameM) => {
        return [
            ', küsse ' + randomNameM.text + ' auf die Wange',
            ', schick ' + randomNameM.text + ' per Whatsapp ein Kompliment.',
            ', umararme ' + randomNameM.text + ' so herzlich wie möglich',
            ', schicke ' + randomNameM.text + ' ein Bild von deinen Füßen über Whatsapp',
        ]
    }



export const WahrheitsAufgabenFeinfach = [
    ', hast du schon mal mit einer Frau rumgemacht?',
    ', welche Körperstellen rasierst du regelmäßig?',
    ', was war dein schlimmstes Date?',
    ', hast du schon mal jemanden betrogen?',
    ', wie hoch ist dein bodycount?',
    ', hattest du schon mal einen One Night Stand?',
    ', mit wem würdest du in dieser Runde am liebsten einen Urlaub verbringen?',
    ', was würdest du machen, wenn du nur noch eine Stunde zu leben hättest?',
]

export const PflichtAufgabenMeinfach = [
    ', lege einen Moonwalk wie Michael Jackson hin.',
    ', singe eine Minute lang ein Lied in einer Fremdsprache.',
    ', versuche ein Bier zu exen.',
    ', singe eine Minute lang ein Lied.',
    ', mache eine Rolle vorwärts.',
    ', mache zehn Liegestütze.',
    ', rufe eine Person deiner Wahl an und erkläre ihr, dass du auswandern willst.'
]
export const PflichtAufgabenFeinfach = [
    ', mache ein Selfie von der Gruppe und poste es auf Instagram/Facebook/Snapchat.',
    ', tanze 60 Sekunden sexy zu einem Lied.',
    ', singe eine Minute lang ein Lied in einer Fremdsprache.',
    ', drehe dich 10x im Kreis.',
    ', singe eine Minute lang ein Lied.',
    ', zeige uns, dass du ein Mädchen bist, ohne uns zu sagen, dass du ein Mädchen bist.',
    ', spreche den Satz "Fischers Fritz fischt frische Fische" so schnell es geht aus.'
]

export const WahrheitsAufgabenMparty = []
export const WahrheitsAufgabenFparty = []
export const PflichtAufgabenMparty = []
export const PflichtAufgabenFparty = []

export const WahrheitsAufgabenMhart = []
export const WahrheitsAufgabenFhart = []
export const PflichtAufgabenMhart = []
export const PflichtAufgabenFhart = []