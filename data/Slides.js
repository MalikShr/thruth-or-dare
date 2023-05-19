import { Fontisto, FontAwesome5, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

export default 
  [
    {
        name: 'Einfach',
        id: '1',
        component: 'Einfach',
        description: 'Für die Angsthasen unter euch...',
        icon: <FontAwesome5 name="laugh-beam" size={180} color="black" />,
        buttonText: 'Jetzt Spielen ❯',
        status: 'ready',
    },
    {
        name: 'Party',
        id: '2',
        component: 'Party',
        description: 'Coming Soon...',
        icon: <MaterialCommunityIcons name="party-popper" size={180} color="black" />,
        buttonText: <Fontisto name="locked" size={37} color="black" />,
        status: 'unready',
    },
    {
        name: 'Hart',
        id: '3',
        component: 'Hart!',
        description: 'Coming Soon...',
        icon: <FontAwesome5 name="hammer" size={180} color="black" />,
        buttonText: <Fontisto name="locked" size={37} color="black" />,
        status: 'unready',

    },
    {
        name: 'ownTask',
        id: '4',
        component: 'Eigene Aufgaben',
        description: 'Coming Soon...',
        icon: <FontAwesome name="pencil" size={180} color="black" />,
        buttonText: <Fontisto name="locked" size={37} color="black" />,
        status: 'unready',
    }
]
