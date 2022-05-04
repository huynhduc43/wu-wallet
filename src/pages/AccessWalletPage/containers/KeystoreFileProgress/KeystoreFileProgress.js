import React, { useState } from 'react'

import {
  Box,
  Grid,
  Step,
  Paper,
  Stack,
  Button,
  Stepper,
  StepLabel,
  Typography,
} from '@mui/material'
import { purple } from '@mui/material/colors'

import SelectFile from 'pages/AccessWalletPage/components/SelectFile/SelectFile'
import EnterPassword from 'pages/AccessWalletPage/components/EnterPassword'

const ACCESS_STEPS = ['Select File', 'Enter Password']

const KeystoreFileProgress = ({
  wrongPassErr,
  onSelectFile,
  onCheckPassword,
}) => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const onFileChange = (e) => {
    onSelectFile(e.target.files[0])
    handleNext()
  }

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
              <b>Access wallet with keystore file</b>
            </Typography>
            <Box sx={{ width: '100%', mt: 6 }}>
              <Stepper activeStep={activeStep}>
                {ACCESS_STEPS.map((label) => {
                  const stepProps = {}
                  const labelProps = {}

                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  )
                })}
              </Stepper>
              {activeStep === ACCESS_STEPS.length ? (
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
                    <SelectFile onFileChange={onFileChange} />
                  )}
                  {activeStep === 1 && (
                    <EnterPassword
                      wrongPassErr={wrongPassErr}
                      onCheckPassword={onCheckPassword()}
                    />
                  )}
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
