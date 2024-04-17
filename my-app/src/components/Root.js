
import {  Outlet } from "react-router-dom"



import React from 'react'
import Navigation from "./Navigation"

export const Root = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  )
}