import { Button, Stack, Typography } from '@mui/material'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Routes } from 'routes/routes'

const Introduction = () => {
  let navigate = useNavigate()

  const handleClickCreateWallet = useCallback(() => {
    navigate(Routes.home.routes.createWallet.path)
  }, [])

  const handleClickAccessWallet = useCallback(() => {
    navigate(Routes.home.routes.accessWallet.path)
  })

  return (
    <Stack
      sx={{ height: '800px' }}
      direction={'column'}
      justifyContent='center'
      spacing={3}
    >
      <Typography variant='h2'>{"WU's Original Wallet"}</Typography>
      <Typography variant='body1'>
        WU wallet is a free, client-side interface helping you interact with the
        WU blockchain. Our easy-to-use, open-source platform allows you to
        generate wallets, interact with smart contracts, and so much more.
      </Typography>
      <Stack direction={'row'} spacing={2}>
        <Button
          variant='contained'
          color='secondary'
          size='large'
          onClick={handleClickCreateWallet}
        >
          Create a new wallet
        </Button>
        <Button
          variant='outlined'
          color='secondary'
          size='large'
          onClick={handleClickAccessWallet}
        >
          Access my wallet
        </Button>
      </Stack>
    </Stack>
  )
}

export default Introduction
