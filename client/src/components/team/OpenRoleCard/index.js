import React, { useCallback } from 'react'

import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Stack from '@mui/material/Stack'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import ChipArray from '../../generic/ChipArray'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))

const OpenRoleCard = ({ role }) => {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = useCallback(() => {
    setExpanded(!expanded)
  }, [])

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardContent>
          <Stack
            direction='column'
          >
            <Stack
            direction='column'
            spacing={0.5}
            >
              <Typography variant='h6'>
                {role.name} ({role.teamKey.toUpperCase()}-{role.number})
              </Typography>
              <Stack
                direction='row'
                justifyContent='space-between'
              >
                <ChipArray labels={role.topics} size='small'/>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </Stack>
            </Stack>
            <Stack
              direction='column'
              spacing={1}
              sx={{ pt: 3 }}
            >
              <Typography variant='subtitle2' color='secondary.light'>
                Open Role
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Required Skills
              </Typography>
              <ChipArray labels={role.requiredSkills} size='small'/>
              <Typography variant='body2' color='text.secondary'>
                Preferred Skills
              </Typography>
              <ChipArray labels={role.preferredSkills} size='small'/>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >
          <Button size='small' variant='contained'>Apply Now</Button>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography variant='subtitle1'>
              Description
            </Typography>
            <Typography color='text.secondary' paragraph>
              {role.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  )
}

export default OpenRoleCard
