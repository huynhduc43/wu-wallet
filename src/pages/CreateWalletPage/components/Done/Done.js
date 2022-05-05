import React from 'react'
import { Button, Grid, Typography } from '@mui/material'

const Done = ({ onAccessWallet, onCreateOtherWallet }) => {
  return (
    <>
      <Typography variant='h5' component={'div'} style={{ fontWeight: 'bold' }}>
        You are done!
      </Typography>
      <Typography variant='body1' component={'div'}>
        You are now ready to take advantage of all that Ethereum has to offer!
        Access with keystore file should only be used in an offline setting.
      </Typography>
      <Grid
        container
        justifyContent={'center'}
        alignItems='center'
        direction='column'
        mt={4}
        spacing={2}
      >
        <Grid item>
          <Button
            variant='contained'
            color='secondary'
            fullWidth={false}
            onClick={onAccessWallet}
          >
            Access Wallet
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={onCreateOtherWallet}>Create Other Waller</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Done
