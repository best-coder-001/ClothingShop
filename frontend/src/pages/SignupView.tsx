import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, styled, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from "react"
import {useForm,Controller,SubmitHandler} from 'react-hook-form'
import APIConstants from '../constants';
interface IFormInputs {
  firstName: string,
  lastName: string, 
  email: string,
  username: string,
  password: string
}
interface ITokens {
  access_token: string,
  refresh_token: string
}
const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',

})


const SignupView: React.FC = () => {
  const [tokens, setTokens] = useState({})
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, control } = useForm<IFormInputs>({
    defaultValues: {
      firstName: '',
      lastName: '', 
      email: '',
      username: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    fetch(`${APIConstants.API_URL}${APIConstants.USERS_REGISTER}?
      first_name=${data.firstName}&
      last_name=${data.lastName}&
      username=${data.username}&
      password=${data.password}&
      email=${data.email}
      `)
      .then(res => res.json)
      .catch(error => console.log(error))
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  return (
    <Box height={'100vh'} width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Stack maxHeight={'600px'} maxWidth={'600px'} width={500} height={600} padding={1} spacing={1} direction={'column'}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Box padding={2} boxSizing={'border-box'}><Typography component={'h4'} variant='h4'>Signup</Typography></Box>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => <TextField {...field} variant='outlined' label="First name"/>} />
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => <TextField {...field} variant='outlined' label="Last name"/>} />
          <Controller
            name="email"
            control={control}
            render={({ field }) => <TextField {...field} variant='outlined' label="Email" type='email'/>} />
          <Controller
            name="username"
            control={control}
            render={({ field }) => <TextField {...field} variant='outlined' label="First name"/>} />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth variant="outlined" {...field}>
                <InputLabel htmlFor="outlined-adornment-password">Create password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end" >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment> }
                  label="Password" />
              </FormControl> )} />
          <Box height={56} />
          <Button fullWidth variant='contained' disableElevation type='submit'>
            <Typography variant='subtitle1'>Signup</Typography>
          </Button>
        </Form>
      </Stack>
    </Box>
  )
}

export default SignupView