import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, styled, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from "react"
import {useForm,Controller,SubmitHandler, get} from 'react-hook-form'
import APIConstants from '../constants';
interface IFormInputs {
  firstName: string,
  lastName: string, 
  email: string,
  username: string,
  password: string
}
interface ITokens {
  refresh: string,
  access: string, 
}
const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',

})


const SignupView: React.FC = () => {
  const [loading,setLoading] = useState(false)
  const [tokens, setTokens] = useState({})
  const [showPassword, setShowPassword] = useState(false)
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
    fetch(`${APIConstants.API_URL}${APIConstants.USERS_REGISTER}`,{
        method: 'post',
        headers: {
          'Content-Type': 'application/json'

        },
        body: JSON.stringify({
          first_name:data.firstName,
          last_name:data.lastName,
          email:data.email,
          username:data.username,
          password:data.password,
        })
      })
      .then(
        res => {
          if (res.ok) {
            getTokens(data)
          }
          else {
            console.log('error')
          }
        }
      )
    
  }

  const getTokens = (data: IFormInputs) => {
    fetch(`${APIConstants.API_URL}${APIConstants.USERS_TOKEN}`,{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username:data.username,
        password:data.password,
      })
    })
    .then(res => res.json())
    .then(res => saveTokens(res))

  }
  const saveTokens = (tokens: ITokens) => {
    setTokens(tokens)

  }

  return (
    <Box height={'100vh'} width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Stack maxHeight={'600px'} maxWidth={'600px'} width={500} height={600} padding={1} spacing={1} direction={'column'}>
        <Form onSubmit={handleSubmit(onSubmit)} method='post'>
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
            render={({ field }) => <TextField {...field} variant='outlined' label="Create username"/>} />
          <Controller
            name="password"
            control={control}
            render={({ field }) => <TextField {...field} variant='outlined' label="Create password" type='password'/>} />
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