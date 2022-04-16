import { createTheme } from '@mui/material/styles'

const globalTheme = createTheme({
  palette: {
    primary: {
      light: '#9c4dcc',
      main: '#6a1b9a',
      dark: '#38006b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffbd45',
      main: '#fb8c00',
      dark: '#c25e00z',
      contrastText: '#fff',
    },
  },
})

export default globalTheme
