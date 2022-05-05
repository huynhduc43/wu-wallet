import React, { useCallback, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  Grid,
  Button,
  IconButton,
  InputLabel,
  Typography,
  FormControl,
  OutlinedInput,
  FormHelperText,
  InputAdornment,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

import schema from './validation'

const CreatePasswordForm = ({ onCheckPassword, wrongPassErr }) => {
  const [showPassword, setShowPassword] = useState(false)

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
    },
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const handleClickShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev)
  }, [])

  const onSubmit = useCallback((data) => {
    onCheckPassword(data.password)
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h5' component={'div'} style={{ fontWeight: 'bold' }}>
        Enter password
      </Typography>
      <Typography variant='body1' component={'div'}>
        Enter your password to unlock your wallet.
      </Typography>
      <FormControl
        fullWidth
        sx={{ mt: 3 }}
        variant='outlined'
        error={errors.password ? true : false}
      >
        <InputLabel htmlFor='password'>Enter password</InputLabel>
        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <OutlinedInput
              {...field}
              id='password'
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Enter password'
            />
          )}
        />
        {errors.password && (
          <FormHelperText>{errors.password?.message}</FormHelperText>
        )}
        {wrongPassErr && (
          <FormHelperText style={{ color: 'red' }}>
            {wrongPassErr}
          </FormHelperText>
        )}
      </FormControl>
      <Grid container justifyContent={'center'} mt={4}>
        <Button variant='contained' color='secondary' type='submit'>
          Access wallet
        </Button>
      </Grid>
    </form>
  )
}

export default CreatePasswordForm
