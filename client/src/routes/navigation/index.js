import { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, Link as RouterLink } from 'react-router-dom'

import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

function Navigation() {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user)

  const signOut = async (event) => {
    event.preventDefault()
    dispatch.user.signOutUser()
  }

  return (
    <Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Stack
          direction='row'
          spacing={1}
          sx={{ flexGrow: 1 }}
        >
          <Button component={RouterLink} to={'/'} variant='contained'>
            Teamnova
          </Button>
          <Button component={RouterLink} to={'/about'} style={{textTransform: 'none'}} size='small' color='inherit'>
            About
          </Button>
        </Stack>
          {currentUser.isSignedIn ? (
            <Stack
              direction='row'
              spacing={2}
            >
              <Button style={{textTransform: 'none'}} size='small' color='inherit' variant='text'>
                Me
              </Button>
              <Button onClick={signOut} style={{textTransform: 'none'}} size='small' color='inherit' variant='text'>
                Sign out
              </Button>
            </Stack>

          ) : (
            <Stack
              direction='row'
              spacing={1}
            >
              <Button component={RouterLink} to={'/signin'} style={{textTransform: 'none'}} size='small' color='inherit' variant='text'>
                Sign in
              </Button>
              <Button component={RouterLink} to={'/signup'} style={{textTransform: 'none'}} size='small' variant='contained'>
                Sign up
              </Button>
            </Stack>
          )}
      </Toolbar>
      <Outlet />
    </Fragment>
  )
}

export default Navigation


