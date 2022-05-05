import { ThemeProvider } from '@mui/material'
import globalTheme from 'assets/themes/globalTheme'
import React from 'react'
import { Routes as RoutesDom } from 'react-router-dom'
import { RenderRoutes, Routes } from 'routes/routes'

function App() {
  const user = {
    userInfo: {
      username: '',
      email: '',
    },
    token: '',
    isAuth: false,
    isAdmin: false,
  }

  return (
    <ThemeProvider theme={globalTheme}>
      <div className='App'>
        <RoutesDom>{RenderRoutes(Routes, user, location)}</RoutesDom>
      </div>
    </ThemeProvider>
  )
}

export default App
