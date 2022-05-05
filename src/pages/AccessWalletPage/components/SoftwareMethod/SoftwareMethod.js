import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined'
import { SoftwareMethodGrid, WarningTypography } from './styles'

const SoftwareMethod = ({ onClickOpen }) => {
  return (
    <SoftwareMethodGrid
      sx={{
        p: 4,
        border: '1px solid',
        borderRadius: '16px',
        cursor: 'pointer',
      }}
      container
      onClick={onClickOpen}
    >
      <Grid item xs={12} container justifyContent={'flex-end'}>
        <WarningTypography variant='body1' component={'div'}>
          NOT RECOMMENDED
        </WarningTypography>
      </Grid>

      <Grid item xs={12}>
        <Stack direction={'row'} alignItems='center'>
          <Typography variant='h5' component={'div'} paddingRight='4px'>
            <b>Software</b>
          </Typography>
          <WarningOutlinedIcon color='warning' />
        </Stack>

        <Typography variant='body1' component={'div'} mt={1}>
          Keystore Files, Mnemonic Phrase, Private Key
        </Typography>
      </Grid>
    </SoftwareMethodGrid>
  )
}

export default SoftwareMethod
