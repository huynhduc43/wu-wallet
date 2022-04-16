import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  IconButton,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Button,
  Grid,
  FormHelperText,
} from '@mui/material'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './validation'

const CreatePasswordForm = ({ onNext }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false)

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleClickShowConfirmedPassword = () => {
    setShowConfirmedPassword(!showConfirmedPassword)
  }

  const onSubmit = (data) => {
    console.log(data)
    onNext()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        error={errors.password ? true : false}
        fullWidth
        variant='outlined'
        sx={{ mt: 3 }}
      >
        <InputLabel htmlFor='password'>Password</InputLabel>
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
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
          )}
        />
        {errors.password && (
          <FormHelperText>{errors.password?.message}</FormHelperText>
        )}
      </FormControl>
      <FormControl
        error={errors.confirmPassword ? true : false}
        fullWidth
        variant='outlined'
        sx={{ mt: 3 }}
      >
        <InputLabel htmlFor='confirm-password'>Confirm password</InputLabel>
        <Controller
          name='confirmPassword'
          control={control}
          render={({ field }) => (
            <OutlinedInput
              {...field}
              id='confirm-password'
              type={showConfirmedPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowConfirmedPassword}
                    edge='end'
                  >
                    {showConfirmedPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Confirm password'
            />
          )}
        />
        {errors.confirmPassword && (
          <FormHelperText>{errors.confirmPassword?.message}</FormHelperText>
        )}
      </FormControl>
      <Grid container justifyContent={'center'} mt={4}>
        <Button variant='contained' color='secondary' type='submit'>
          Create wallet
        </Button>
      </Grid>
    </form>
  )
}

export default CreatePasswordForm
