import { ArrowBack } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackToHome: React.FC = () => {
    const navigate = useNavigate()
    
    return (
        <Box padding={2} boxSizing={'border-box'} display={'flex'} gap={1} alignItems={'center'}>
            <IconButton onClick={() => navigate('/')}>
            <ArrowBack />
            </IconButton>
            <Typography component={'p'} variant='subtitle1'>Back to Home</Typography>
        </Box>
  )
}

export default BackToHome