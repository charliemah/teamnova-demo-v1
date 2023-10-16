import { Link as RouterLink } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import ChipArray from '../../generic/ChipArray'

const MentorCard = ({ role }) => {

  const profile = role.isLeadMentor ? role.leadMentor.profile : role.mentor.profile

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >  
        <Avatar
            src={profile.avatarUrl}
            sx={{ width: 'auto', height: 'auto' }}
            variant='square'
        />
        <CardContent>
          <Stack
            direction='column'
            spacing={1}
            justifyContent='space-evenly'
          >
            <Typography variant='subtitle1' color='secondary.light'>
              {role.name}
            </Typography>
            <Typography variant='h6'>
              {profile.name}
            </Typography>
            <Typography variant='subtitle2'>
              {profile.title} <Box color='text.secondary' display='inline'>at</Box> {profile.organization}
            </Typography>
            <Typography variant='subtitle2'color='text.secondary'>
              {profile.headline}
            </Typography>
            <Stack
              direction='row'
              spacing={2}
            >
              <Typography variant='subtitle2' color='text.secondary' component='div'>
                <Box color='text.primary' display='inline'>{profile.followersCount}</Box> followers
              </Typography>
              <Typography variant='subtitle2' color='text.secondary' component='div'>
                <Box color='text.primary' display='inline'>{profile.reviewsCount}</Box> reviews
              </Typography>
            </Stack>
            <ChipArray labels={role.topics} size='small' color='primary' variant='outlined'/>
          </Stack>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3,
          }}
        >
          <Stack
            direction='row'
            spacing={2}
          >
            <Button size='small' variant='outlined'>Follow</Button>
            <Button component={RouterLink} to={`/teams/${role.teamKey}/mentors/${role.number}`} size='small' variant='contained'>Learn More</Button>
          </Stack>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default MentorCard