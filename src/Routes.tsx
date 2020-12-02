import React from 'react'
import { Router } from '@reach/router'
import { Home } from './components/Home'
import { Remount } from './components/Remount'
import { State } from './components/State'

interface Props {}

export const Routes = (props: Props) => {
  return (
    <Router>
      <Home path="/" />
      <Remount path="remount" />
      <State path="state" />
    </Router>
  )
}
