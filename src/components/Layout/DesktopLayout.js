import React, { Fragment } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

const DesktopLayout = (props) => {
  return (
    <Fragment>
        <Sidebar />
        <Topbar />
        <main>{props.children}</main>

    </Fragment>
    
  )
}

export default DesktopLayout
