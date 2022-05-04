import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import keystorefile from 'assets/images/keystore_file.jpg'

const Input = styled('input')({
  display: 'none',
})

const SelectFile = ({ onFileChange }) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography
          variant='h5'
          component={'div'}
          style={{ fontWeight: 'bold' }}
        >
          Download keystore file
        </Typography>
        <Typography variant='body1' component={'div'}>
          Please select keystore file that unlocks your wallet.
        </Typography>
        <label htmlFor='contained-button-file'>
          <Input
            accept='text/*'
            id='contained-button-file'
            type='file'
            onChange={onFileChange}
          />
          <Button variant='outlined' component='span'>
            Select file
          </Button>
        </label>
      </Grid>
      <Grid item xs={6}>
        <img src={keystorefile} alt='keystore file' width={'100%'} />
      </Grid>
    </Grid>
  )
}

export default SelectFile
