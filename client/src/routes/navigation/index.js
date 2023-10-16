import { Fragment } from 'react'
import { Outlet, Link as RouterLink } from 'react-router-dom'

import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import { logoUrl } from '../../config'

function Navigation() {

  const assetsPath = require.context('../../assets/images', false)

  return (
    <Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Stack
          direction='row'
          spacing={3}
          sx={{ flexGrow: 1 }}
        >
          <Button component={RouterLink} to={'/'} color='inherit'>
            <Box
              component='img'
              sx={{ height: 50 }}
              alt='Logo'
              src={assetsPath(logoUrl)}
            />
          </Button>
        </Stack>
        <Button component={RouterLink} to={'/ask-charlie'} style={{textTransform: 'none'}} variant='contained'>
          Ask Charlie
        </Button>
      </Toolbar>
      <Outlet />
    </Fragment>
  )
}

export default Navigation


