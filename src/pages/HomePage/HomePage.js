import React from 'react'
import { Outlet } from 'react-router-dom'

import CommonLayout from 'layouts/CommonLayout'

const HomePage = () => {
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  )
}

export default HomePage
