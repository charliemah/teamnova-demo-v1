import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, Link as RouterLink } from 'react-router-dom'

import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import { logoUrl } from '../../config'

const Navigation = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user)

  const signOut = async (event) => {
    event.preventDefault()
    dispatch.user.signOutUser()
  }

  const assetsPath = require.context('../../assets/images', false)

  return (
    <Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', py: 1 }} >
        <Stack
          direction='row'
          spacing={1.5}
          sx={{ flexGrow: 1 }}
        >
          <Button component={RouterLink} to={'/'} color='inherit' sx={{ minWidth: 0, px: 0 }}>
            <Box
              component='img'
              sx={{ height: 42 }}
              alt='Logo'
              src={assetsPath(logoUrl)}
            />
          </Button>
          <Button component={RouterLink} to={'/about'} style={{ textTransform: 'none' }} color='inherit'>
            About
          </Button>
          <Button component={RouterLink} to={'/discover'} style={{ textTransform: 'none' }} color='inherit'>
            Discover
          </Button>
        </Stack>
        <Stack
          direction='row'
          spacing={1.5}
        >
          {currentUser.isSignedIn
            ? (<Stack
              direction='row'
              spacing={1.5}
            >
              <Button style={{ textTransform: 'none' }} color='inherit' variant='text'>
                Me
              </Button>
              <Button onClick={signOut} style={{ textTransform: 'none' }} color='inherit' variant='text'>
                Sign out
              </Button>
            </Stack>)
            : (
              <Button component={RouterLink} to={'/signin'} style={{ textTransform: 'none' }} color='inherit' variant='text'>
                Sign in
              </Button>)
          }
          <Button component={RouterLink} to={'/'} style={{ textTransform: 'none' }} variant='contained'>
            Start Building
          </Button>
        </Stack>
      </Toolbar>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
