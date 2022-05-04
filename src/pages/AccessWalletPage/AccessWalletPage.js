import React, { useCallback, useState } from 'react'
import { Routes } from 'routes/routes'
import { Link } from 'react-router-dom'
import { Grid, Typography } from '@mui/material'

import { genPrivateKey } from 'blockchain'
import FullScreenDialog from 'components/Dialogs/FullscreenDialog/FullScreenDialog'

import SoftwareMethod from './components/SoftwareMethod'
import KeystoreFileProgress from './containers/KeystoreFileProgress'
import AccessWithKeystoreFile from './components/AccessWithKeystoreFile/AccessWithKeystoreFile'

const AccessWalletPage = () => {
  const [open, setOpen] = useState(false)
  const [walletInfo, setWalletInfo] = useState(null)
  const [openKeystoreFileProgess, setOpenKeystoreFileProgress] = useState(false)
  const [wrongPassErr, setWrongPassErr] = useState('')

  const handleClickOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const handleOpenProgress = useCallback(() => {
    setOpenKeystoreFileProgress((prevState) => !prevState)
  }, [])

  const handleSelectFile = useCallback((file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target.result
      setWalletInfo(JSON.parse(text))
    }
    reader.readAsText(file)
  }, [])

  const handleCheckPassword = useCallback(
    () => (password) => {
      if (
        genPrivateKey(password, walletInfo?.currentdate) ===
        walletInfo?.privatekey
      ) {
        console.log('Success')
        setWrongPassErr('')
        // Redirect
      } else {
        setWrongPassErr('Wrong password!')
      }
    },
    [walletInfo],
  )

  return (
    <>
      <Grid container justifyContent={'center'} alignItems='center'>
        <Grid item xs={12} textAlign='center'>
          <Typography variant='h4' component={'div'}>
            Access my wallet
          </Typography>
          <Typography variant='body1' component={'div'} mt={2}>
            Please select a method to access your wallet
          </Typography>
          <Typography variant='body1' component={'div'}>
            Don&apos;t have a wallet?{' '}
            <Link to={'/' + Routes.home.routes.createWallet.path}>
              <Typography color='secondary' component='u'>
                Create Wallet
              </Typography>
            </Link>
          </Typography>
        </Grid>

        <Grid item xs={8} mt={6}>
          <SoftwareMethod onClickOpen={handleClickOpen} />
        </Grid>
      </Grid>
      <FullScreenDialog open={open} onClose={handleClose}>
        {openKeystoreFileProgess ? (
          <KeystoreFileProgress
            wrongPassErr={wrongPassErr}
            onSelectFile={handleSelectFile}
            onCheckPassword={handleCheckPassword}
          />
        ) : (
          <AccessWithKeystoreFile onOpenProgress={handleOpenProgress} />
        )}
      </FullScreenDialog>
    </>
  )
}

export default AccessWalletPage
