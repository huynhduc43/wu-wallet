import React from 'react'

import { Grid, Paper, Stack, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'

import { ReactComponent as KeystoreIcon } from 'assets/images/keystore.svg'
import { PaperContainer } from './styles'

const CreateKeystoreFile = ({ onOpenProgress }) => {
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems='center'
      sx={{ minHeight: '100%', backgroundColor: purple[50] }}
    >
      <Grid item xs={5}>
        <Paper elevation={16} sx={{ p: 4 }}>
          <Stack>
            <Typography variant='h4' component={'div'} textAlign='center'>
              <b>Create wallet using software</b>
            </Typography>
            <PaperContainer
              variant='outlined'
              sx={{ p: 4, mt: 5 }}
              onClick={onOpenProgress}
            >
              <Grid container>
                <Grid item xs={9}>
                  <Typography variant='h5' component={'div'}>
                    <b>Keystore File</b>
                  </Typography>
                  <Typography variant='body1' component={'div'}>
                    Using a keystore file online makes your wallet more
                    vulnerable to loss of funds. We don’t recommend this method
                    of wallet creation.
                  </Typography>
                </Grid>
                <Grid item xs={3} textAlign='center'>
                  <KeystoreIcon />
                </Grid>
              </Grid>
            </PaperContainer>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default CreateKeystoreFile
