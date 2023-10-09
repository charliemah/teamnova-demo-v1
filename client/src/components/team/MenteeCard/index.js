import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import ChipArray from '../../generic/ChipArray'

const MenteeCard = ({ role }) => {

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >  
        <Avatar
            src={role.mentee.profile.avatarUrl}
            sx={{ width: 'auto', height: 'auto' }}
            variant='square'
        />
        <CardContent>
          <Stack
            direction='column'
            spacing={1}
            justifyContent='space-evenly'
          >
            <Typography variant='subtitle1' color='secondary'>
              {`${role.name} (${role.teamKey.toUpperCase()}-${role.number})`}
            </Typography>
            <Stack
              direction='row'
              justifyContent='space-between'
            >
              <Typography variant='h5'>
                {role.mentee.profile.name}
              </Typography>
              {role.graduated &&
                <Typography variant='subtitle2' color='secondary'>
                  Graduated
                </Typography>                   
              }
            </Stack>
            <Typography variant='subtitle2'>
              {role.mentee.profile.title} <Box color='text.secondary' display='inline'>at</Box> {role.mentee.profile.organization}
            </Typography>
            <Typography variant='subtitle2'color='text.secondary'>
              {role.mentee.profile.headline}
            </Typography>
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
            <Button component={RouterLink} to={'/signin'} size='small' variant='outlined'>Follow</Button>
            <Button component={RouterLink} to={`/teams/${role.teamKey}/mentees/${role.number}`} size='small' variant='contained'>View More</Button>
          </Stack>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default MenteeCard