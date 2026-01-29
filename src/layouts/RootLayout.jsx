import React from 'react'
import { NavbarComponent } from './NavbarComponent'
import { Outlet } from 'react-router'
import { FooterComponent } from './FooterComponent'

export default function RootLayout() {
  return (
    <div className='flex flex-col h-screen'>
        {/* header */}
        <NavbarComponent/>
        <div className='grow'>
            <Outlet/>
        </div>
        {/* main */}
        {/* Footer */}
        <FooterComponent/>
    </div>
  )
}
