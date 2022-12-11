import React from 'react'
import NavBar from '../navBar/NavBar'

type Prop = {
    children: React.ReactNode
}

const Layout = ({children}: Prop) => {
    return(
        <>
            <NavBar />
            {children}
        </>
    )
}

export default Layout