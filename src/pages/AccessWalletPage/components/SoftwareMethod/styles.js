import { styled } from '@mui/material/styles'
import { Grid, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'

export const SoftwareMethodGrid = styled(Grid)(() => ({
  '&:hover': {
    backgroundColor: purple[800],
  },
}))

export const WarningTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}))
