import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const LeadMentorCard = ({ leadMentor }) => {

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >  
        <Avatar
            src={leadMentor.profile.avatarUrl}
            sx={{ width: 'auto', height: 'auto' }}
            variant='square'
        />
        <CardContent>
          <Typography variant='h6'>
            {leadMentor.name}
          </Typography>
          <Typography variant='subtitle2' color='text.secondary'>
            {leadMentor.profile.location}({leadMentor.profile.timezone})
          </Typography>
          <Typography variant='subtitle1'>
            {leadMentor.profile.title} <Box color='text.secondary' display='inline'>at</Box> {leadMentor.profile.organization}
          </Typography>
          <Typography variant='subtitle2'>
            {leadMentor.profile.headline}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {leadMentor.profile.bio.slice(0, 90)}...
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default LeadMentorCard