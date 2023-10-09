import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { format, parseISO } from 'date-fns'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Container from '@mui/material/Container'

function SprintDetail() {

  const [value, setValue] = useState('1')

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  let { teamKey, sprintNumber } =  useParams()

  const sprint = useSelector(state => state.sprints.sprintList.filter(sprint => sprint.number == sprintNumber)[0])

  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth='sm'>
          <Stack
            direction='column'
            spacing={1}
            justifyContent='space-evenly'
            sx={{ pt: 3 }}
          >
            <Button component={RouterLink} to={`/teams/${teamKey}`} color='secondary'>
              S-TEAM {teamKey}
            </Button>
            <Typography component='h1' variant='h4' align='center' color='text.primary'>
              SPRINT {sprint.number}
            </Typography>
            <Typography variant='h6' align='center'>
              {format(parseISO(sprint.startDate), 'MMM d')} - {format(parseISO(sprint.endDate), 'MMM d')}
            </Typography>
            <Typography variant='subtitle1' align='center' color='text.secondary' paragraph>
              {sprint.goal}
            </Typography>
            <Stack
              direction='row'
              spacing={2}
              justifyContent='center'
              sx={{ py: 2 }}
            >
              <Button variant='contained'>New User Story</Button>
              <Button variant='outlined'>New Task</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} textColor='inherit' aria-label='sprint tabs'>
            <Tab label='Stories' value='1' />
            <Tab label='Tasks' value='2' />
          </TabList>
        </Box>
        <TabPanel value='1'>
        </TabPanel>
        <TabPanel value='2'>
        </TabPanel>
      </TabContext>
    </main>
  )
}

export default SprintDetail