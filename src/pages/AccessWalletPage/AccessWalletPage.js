import React, { useCallback, useState } from 'react'
import { Routes } from 'routes/routes'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Grid, Typography } from '@mui/material'

import { genPrivateKey } from 'blockchain'
import { accessWallet } from 'redux/userSlice'
import FullScreenDialog from 'components/Dialogs/FullscreenDialog/FullScreenDialog'

import SoftwareMethod from './components/SoftwareMethod'
import KeystoreFileProgress from './containers/KeystoreFileProgress'
import AccessWithKeystoreFile from './components/AccessWithKeystoreFile/AccessWithKeystoreFile'

const AccessWalletPage = () => {
  const [open, setOpen] = useState(false)
  const [info, setInfo] = useState({})
  const [wrongPassErr, setWrongPassErr] = useState('')
  const [openKeystoreFileProgess, setOpenKeystoreFileProgress] = useState(false)

  const dispatch = useDispatch()

  const handleClickOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const handleOpenProgress = useCallback(() => {
    setOpenKeystoreFileProgress((prevState) => !prevState)
  }, [])

  const handleSelectFile = async (e) => {
    return await new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = async (e) => {
        const text = e.target.result
        setInfo(JSON.parse(text))
        resolve(text)
      }
      reader.readAsText(e.target.files[0])
    })
  }

  const handleCheckPassword = () => (password) => {
    if (genPrivateKey(password, info?.currentdate) === info?.privatekey) {
      dispatch(accessWallet(info))
      setWrongPassErr('')
    } else {
      setWrongPassErr('Wrong password!')
    }
  }

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
