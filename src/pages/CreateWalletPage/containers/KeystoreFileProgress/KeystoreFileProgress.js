import React, { useCallback, useState } from 'react'
import { saveAs } from 'file-saver'

import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Grid, Paper, Stack } from '@mui/material'
import { purple } from '@mui/material/colors'

import STEPS from 'constants/steps'
import CreatePasswordForm from 'pages/CreateWalletPage/components/CreatePasswordForm'
import DownloadKeystoreFile from 'pages/CreateWalletPage/components/DownloadKeystoreFile'
import { createKeystoreFile } from 'blockchain'
import Done from 'pages/CreateWalletPage/components/Done'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'routes/routes'

const KeystoreFileProgress = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [keystoreFile, setKeystoreFile] = useState({
    blob: null,
    fileName: '',
  })
  const navigate = useNavigate()
  // const [skipped, setSkipped] = React.useState(new Set())

  // const isStepSkipped = (step) => {
  //   return skipped.has(step)
  // }

  const handleNext = (password) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const file = createKeystoreFile(password)
    setKeystoreFile(file)
  }

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1)
  // }

  const handleReset = () => {
    setActiveStep(0)
  }

  const handleDownload = () => {
    saveAs(keystoreFile.blob, keystoreFile.fileName)
    handleNext()
  }

  const handleAccessWallet = useCallback(() => {
    navigate(Routes.home.routes.accessWallet.path)
  }, [])

  const handleCreateOtherWallet = useCallback(() => {
    setActiveStep(0)
  }, [])

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
              <b>Create wallet with keystore file</b>
            </Typography>
            <Box sx={{ width: '100%', mt: 6 }}>
              <Stepper activeStep={activeStep}>
                {STEPS.map((label) => {
                  const stepProps = {}
                  const labelProps = {}

                  // if (isStepSkipped(index)) {
                  //   stepProps.completed = false
                  // }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  )
                })}
              </Stepper>
              {activeStep === STEPS.length ? (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    Step {activeStep + 1}.
                  </Typography>
                  {activeStep === 0 && (
                    <CreatePasswordForm onNext={handleNext} />
                  )}
                  {activeStep === 1 && (
                    <DownloadKeystoreFile onDownload={handleDownload} />
                  )}
                  {activeStep === 2 && (
                    <Done
                      onAccessWallet={handleAccessWallet}
                      onCreateOtherWallet={handleCreateOtherWallet}
                    />
                  )}
                  {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                      color='inherit'
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />

                    <Button onClick={handleNext}>
                      {activeStep === STEPS.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </Box> */}
                </React.Fragment>
              )}
            </Box>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default KeystoreFileProgress
