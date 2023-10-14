import { useEffect, useState } from 'react'
import { useParams, Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { format, parseISO } from 'date-fns'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Container from '@mui/material/Container'

import LeadMentorsGrid from '../../components/program/LeadMentorsGrid'
import TeamsGrid from '../../components/team/TeamsGrid'

const ProgramDetail = () => {

  const { progKey } =  useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch.teams.asyncFetchTeamsByProgram(progKey)
  }, [progKey])

  const program = useSelector(state => state.programs.programList.filter(program => program.key === progKey)[0])

  const teamList = useSelector(state => state.teams.teamList)

  const assetsPath = require.context('../../assets/images', false)

  const backgroundImageUrl = assetsPath(program.imageUrl)

  const [value, setValue] = useState('1')

  const handleChange = (e, newValue) => {
    setValue(newValue);
  }

  return (
    <main>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                px: { xs: 3, md: 12 },
                pt: { xs: 6, md: 12 },
                pb: 40,
              }}
            >
              <Stack
                direction='column'
                alignItems='center'
                spacing={2}
                justifyContent='space-evenly'
              >
                <Button component={RouterLink} to={program.repoUrl} target='_blank' color='secondary'>
                  {`${program.openSourceProj} | ${program.openSourceOrg}`}
                </Button>
                <Typography component='h1' variant='h4'  align='center' color='inherit'>
                  {`${program.name} (${program.key.toUpperCase()})`}
                </Typography>
                <Typography variant='subtitle1'>
                  {format(parseISO(program.startDate), 'MMM d, yyyy')} - {format(parseISO(program.endDate), 'MMM d, yyyy')}
                </Typography>
                <Typography variant='subtitle1' align='center'>
                  {program.tagline}
                </Typography>
                <Typography variant='subtitle2'>
                  {`${program.teamsCount} teams | ${program.openRolesCount} open roles | ${program.mentorsAcceptedCount} mentors | ${program.menteesAcceptedCount} mentees`}
                </Typography>
                <Stack
                  direction='row'
                  spacing={2}
                  justifyContent='center'
                  sx={{ py: 2 }}
                >
                  <Button component={RouterLink} to={program.discordServerUrl} target='_blank' variant='outlined' color='inherit'>
                    Discord
                  </Button>
                  <Button component={RouterLink} to={'/signin'} variant='contained'>
                    Apply Now                   
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Container sx={{ mt: -25 }} maxWidth='xl'>
        <Paper
          sx={{
            position: 'relative',
            backgroundColor: 'grey.30',
            color: '#fff',
            backgroundSize: 'cover',
          }}
        >
          <TabContext value={value}>
            <Box sx={{
              backgroundColor: '#002884',
              color: '#fff',
              borderBottom: 1,
              borderColor: 'divider',
            }}>
              <TabList onChange={handleChange} textColor='inherit' aria-label='program tabs'>
                <Tab label='S-Teams' value='1' />
                <Tab label='Lead Mentors' value='2' />
                <Tab label='About' value='3' />
              </TabList>
            </Box>
            <TabPanel value='1'>
              <TeamsGrid teams={teamList}/>
            </TabPanel>
            <TabPanel value='2'>
              <LeadMentorsGrid leadMentors={program.leadMentors.filter((x) => x.claimed)} />
            </TabPanel>
            <TabPanel value='3'>
              <Container sx={{ py: 8 }} maxWidth='md'>
                <Typography color='text.secondary' paragraph>
                  {program.description}
                </Typography>
              </Container>
            </TabPanel>
          </TabContext>
        </Paper>
      </Container>
    </main>
  )
}

export default ProgramDetail