import React from 'react'
import { Button, Grid, Typography } from '@mui/material'

const DownloadKeystoreFile = ({ onDownload }) => {
  return (
    <>
      <Typography variant='h5' component={'div'} style={{ fontWeight: 'bold' }}>
        Download keystore file
      </Typography>
      <Typography variant='body1' component={'div'}>
        Important things to know before downloading your keystore file.
      </Typography>
      <Grid container justifyContent={'center'} mt={4}>
        <Button variant='contained' color='secondary' onClick={onDownload}>
          Acknowledge & Download
        </Button>
      </Grid>
    </>
  )
}

export default DownloadKeystoreFile
