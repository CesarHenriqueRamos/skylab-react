import {theme, DefaultTheme} from '@chakra-ui/core';

const custonTheme: DefaultTheme = {
    ...theme,
    radii:{
        ...theme.radii,
        sm: '5px',
        md: '8px'
    },
   
    colors:{
        ...theme.colors,
        purple:{
            ...theme.colors.purple,
            500 : '#8257e5'
        },
        gray:{
            ...theme.colors.gray,
            300: '#e1e1e6',
            600: '#29292e',
            700: '#202024',
            800: '#121214'
        }
    }
}

export default custonTheme;