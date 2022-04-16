import { Paper } from '@mui/material'
import { grey } from '@mui/material/colors'
import { styled } from '@mui/material/styles'

export const PaperContainer = styled(Paper)(() => ({
  backgroundColor: grey[50],
  '&:hover': {
    backgroundColor: grey[100],
  },
  cursor: 'pointer',
}))
