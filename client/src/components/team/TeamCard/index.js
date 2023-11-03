import React, { useCallback } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Stack from '@mui/material/Stack'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
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

const TeamCard = ({ team }) => {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = useCallback(() => {
    setExpanded(!expanded)
  }, [])

  const assetsPath = require.context('../../../assets/images', false)

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardHeader
          disableTypography
          avatar={
            <Avatar
              src={team.owner.profile.avatarUrl}
            />
          }
          title={
            <Stack
              direction='column'
            >
              <Stack
                direction='row'
                spacing={1}
              >
                <Typography variant='subtitle2'>
                  {team.owner.profile.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Product Owner
                </Typography>
              </Stack>
              <Typography variant='subtitle2' color='text.secondary'>
                {team.owner.profile.location}({team.owner.profile.timezone})
              </Typography>
            </Stack>
          }
        />
        <CardMedia
          component='div'
          sx={{
            // 16:9
            pt: '56.25%'
          }}
          image={assetsPath(team.imageUrl)}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Stack
            direction='column'
            justifyContent='space-evenly'
          >
            <Stack
              direction='row'
              justifyContent='space-between'
            >
              <Typography gutterBottom variant='h5' component='h2'>
                {team.name}
              </Typography>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </Stack>
            <Typography variant='subtitle2' color='text.secondary'>
                {team.tagline}
            </Typography>
            <ChipArray labels={team.topics} size='small' color='primary' variant='outlined'/>
            <Stack
              direction='row'
              spacing={2}
            >
              <Typography variant='subtitle2' color='text.secondary' component='div'>
                <Box color='text.primary' display='inline'>{team.openRolesCount}</Box> open roles
              </Typography>
              <Typography variant='subtitle2' color='text.secondary' component='div'>
                <Box color='text.primary' display='inline'>{team.followersCount}</Box> followers
              </Typography>
              <Typography variant='subtitle2' color='text.secondary' component='div'>
                <Box color='text.primary' display='inline'>{team.supportersCount}</Box> supporters
              </Typography>
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
          <Stack
            direction='row'
            spacing={2}
          >
            <Button size='small' variant='outlined'>Follow</Button>
            <Button component={RouterLink} to={`/teams/${team.key}`} size='small' variant='contained'>Meet the Team</Button>
          </Stack>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography variant='subtitle1'>
              Mission
            </Typography>
            <Typography variant='subtitle2' color='text.secondary' paragraph>
              {team.mission}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  )
}

export default TeamCard
