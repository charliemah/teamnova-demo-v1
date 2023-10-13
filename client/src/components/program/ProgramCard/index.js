import { Link as RouterLink } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const ProgramCard = ({ program }) => {

  const leadMentors = program.leadMentors.filter((x) => x.claimed).map((x) => x.name).join(', ')

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component={RouterLink} to={`/programs/${program.key}`}>
        <Card
          sx={{ 
            display: 'flex',
            bgcolor: '#90caf9',
          }}
        >
          <CardContent sx={{ flex: 1 }}>
            <Stack
              direction='column'
              alignItems='center'
              spacing={2}
              justifyContent='space-evenly'
            >
              <Typography component='h2' variant='h6'>
                {program.name.toUpperCase()}
              </Typography>
              <Typography variant='subtitle1' color='text.secondary'>
                {format(parseISO(program.startDate), 'MMM d, yyyy')} - {format(parseISO(program.endDate), 'MMM d, yyyy')}
              </Typography>
              <Typography variant='subtitle1'>
                {program.tagline}
              </Typography>
              <Typography variant='subtitle2' color='text.secondary'>
                {`${program.teamsCount} teams | ${program.openRolesCount} open roles | ${program.mentorsAcceptedCount} mentors | ${program.menteesAcceptedCount} mentees`}
              </Typography>
              <Stack
                direction='row'
                spacing={1}
                sx={{ pt: 1 }}
              >
                <Typography variant='subtitle2'>
                  Lead Mentors:
                </Typography>
                <Typography variant='subtitle2'>
                  {leadMentors}
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default ProgramCard