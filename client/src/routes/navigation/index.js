import React, { Fragment } from 'react'
import { Outlet, Link as RouterLink } from 'react-router-dom'

import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import { logoUrl, exampleProgKey } from '../../config'

const Navigation = () => {
  const assetsPath = require.context('../../assets/images', false)

  return (
    <Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }} disableGutters>
        <Stack
          direction='row'
          spacing={3}
          sx={{ flexGrow: 1 }}
        >
          <Button component={RouterLink} to={'/'} color='inherit' sx={{ minWidth: 0, px: 0 }}>
            <Box
              component='img'
              sx={{ height: 50 }}
              alt='Logo'
              src={assetsPath(logoUrl)}
            />
          </Button>
        </Stack>
        <Button component={RouterLink} to={`/programs/${exampleProgKey}`} style={{ textTransform: 'none' }} variant='contained'>
          Demo
        </Button>
      </Toolbar>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
