import React, { Fragment } from 'react'
import Topbar from './Topbar'

const MobileLayout = (props) => {
  return (
    <Fragment>
        <Topbar type="mobile" />
        <main>{props.children}</main>
    </Fragment>
  )
}

export default MobileLayout
