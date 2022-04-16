import React from 'react'

import { Container } from '@mui/material'

import { Header, Footer } from './components'
import { CommonLayoutContainer } from './styles'

const CommonLayout = ({ children }) => {
  return (
    <CommonLayoutContainer>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100vh',
        }}
      >
        <Header />
        {children}
        <Footer />
      </Container>
    </CommonLayoutContainer>
  )
}

export default CommonLayout
