import { Grid, Typography } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { Routes } from 'routes/routes'
import SoftwareMethod from 'pages/CreateWalletPage/components/SoftwareMethod'
import FullScreenDialog from 'components/Dialogs/FullscreenDialog/FullScreenDialog'
import CreateKeystoreFile from './components/CreateKeyStoreFile/CreateKeystoreFile'
import KeystoreFileProgress from './containers/KeystoreFileProgress'

const CreateWalletPage = () => {
  const [open, setOpen] = useState(false)
  const [openKeystoreFileProgess, setOpenKeystoreFileProgress] = useState(false)

  const handleClickOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const handleOpenProgress = useCallback(() => {
    setOpenKeystoreFileProgress((prevState) => !prevState)
  }, [])

  return (
    <>
      <Grid container justifyContent={'center'} alignItems='center'>
        <Grid item xs={12} textAlign='center'>
          <Typography variant='h4' component={'div'}>
            Create a new wallet
          </Typography>
          <Typography variant='body1' component={'div'} mt={2}>
            Please select a method to create a new wallet
          </Typography>
          <Typography variant='body1' component={'div'}>
            Already have a wallet?{' '}
            <Link to={'/' + Routes.home.routes.accessWallet.path}>
              <Typography color='secondary' component='u'>
                Access Wallet
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
          <KeystoreFileProgress />
        ) : (
          <CreateKeystoreFile onOpenProgress={handleOpenProgress} />
        )}
      </FullScreenDialog>
    </>
  )
}

export default CreateWalletPage
