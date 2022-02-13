import { createTheme } from '@mui/material'
const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    type: 'dark',
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: 'inherit',
          marginBottom: '1px',
          borderBottom: '1px solid #333',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'inherit',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(110, 110, 110, 0.67)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(160, 160, 160, 0.67)',
          },
        },
      },
    },
  },
})

export default darkTheme
