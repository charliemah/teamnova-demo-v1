import { Link as RouterLink } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const SprintCard = ({sprint}) => {

  return (
    <Grid item xs={12} sm={6} md={4}>
      <CardActionArea component={RouterLink} to={`/teams/${sprint.teamKey}/sprints/${sprint.number}`}>
        <Card
          sx={{ display: 'flex', flexDirection: 'row' }}
        >
          <CardContent sx={{ flex: 1 }}>
            <Stack
              direction='column'
              alignItems='center'
              spacing={1}
              justifyContent='space-evenly'
            >
              <Typography component='h2' variant='h5'>
                SPRINT {sprint.number}
              </Typography>
              <Typography variant='h6'>
                {format(parseISO(sprint.startDate), 'MMM d')} - {format(parseISO(sprint.endDate), 'MMM d')}
              </Typography>
              <Typography variant='subtitle1'>
                {sprint.goal}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default SprintCard