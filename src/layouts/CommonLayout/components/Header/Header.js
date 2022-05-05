import React, { useCallback } from 'react'

import { ReactComponent as Logo } from 'assets/images/logo.svg'
import { Grid, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'routes/routes'

const Header = () => {
  let navigate = useNavigate()
  const handleClickLogo = useCallback(() => {
    navigate(Routes.home.path)
  }, [])
  return (
    <Grid container height={94} alignItems='center' sx={{ bgcolor: '#38006b' }}>
      <Grid item>
        <Stack
          direction={'row'}
          alignItems='center'
          spacing={2}
          onClick={handleClickLogo}
          sx={{ cursor: 'pointer' }}
        >
          <Logo width={64} height={64} />
          <div>WU Wallet</div>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Header
