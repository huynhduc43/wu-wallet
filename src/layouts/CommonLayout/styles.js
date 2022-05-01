import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CommonLayoutContainer = styled(Grid)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.primary.dark,
  color: '#fff',
}))
