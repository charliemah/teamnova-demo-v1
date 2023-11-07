import React, { useState, useCallback } from 'react'
import { useParams, Link as RouterLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
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

const titles = [
  'Collaborative Learning Over Code',
  'What are the possibilities with THE TEAMNOVA WAY?'
]
const subtitles = [
  'THE TEAMNOVA WAY of',
  'Democratizing',
  'Mentorship in Open Source',
  'for the Future of Work'
]

const ProgramDetail = () => {
  const { progKey } = useParams()

  const program = useSelector(state => state.programs.programList.filter(program => program.key == progKey)[0])

  const teamList = useSelector(state => state.teams.teamList)

  const assetsPath = require.context('../../assets/images', false)
  const backgroundImageUrl3 = assetsPath(program.imageUrl)

  const [value, setValue] = useState('1')

  const handleChange = useCallback((e, newValue) => {
    setValue(newValue)
  }, [])

  return (
    <main>
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#010A13',
          color: '#fff',
          alignItems: 'center',
          p: { xs: 5, md: 10 },
          mt: 5
        }}
      >
        <Stack
          direction='column'
          alignItems='center'
          spacing={6}
          justifyContent='space-evenly'
        >
          <Typography variant='h3' color='primary.light' sx={{ fontWeight: 'bold', lineHeight: '80px' }} gutterBottom>
            {titles[0]}
          </Typography>
          <Stack
            direction='column'
            alignItems='center'
            spacing={2}
            justifyContent='space-evenly'
          >
            <Typography variant='h5' color='inherit'>
              {subtitles[0]}
            </Typography>
            <Typography variant='h5' color='inherit'>
              {subtitles[1]} <Box color='primary.dark' display='inline'>{subtitles[2]}</Box> {subtitles[3]}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${backgroundImageUrl3})`
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)'
          }}
        />
        <Grid container>
          <Grid item md={12}>
            <Box
              sx={{
                position: 'relative',
                px: { xs: 3, md: 12 },
                pt: { xs: 6, md: 12 },
                pb: 50
              }}
            >
              <Stack
                direction='column'
                alignItems='center'
                spacing={2}
                justifyContent='space-evenly'
              >
                <Stack
                  direction='row'
                  justifyContent='center'
                  spacing={0.5}
                  sx={{ pt: 3 }}
                >
                  <Button component={RouterLink} to={program.repoUrl} target='_blank' color='primary'>
                    {`${program.openSourceProj} | ${program.openSourceOrg}`}
                  </Button>
                  <Button sx={{ minWidth: 0, px: 0 }}>
                    {program.key.toUpperCase()}
                  </Button>
                </Stack>
                <Typography variant='h4' align='center' color='inherit'>
                  {program.name}
                </Typography>
                <Typography variant='subtitle1'>
                  {format(parseISO(program.startDate), 'MMM d, yyyy')} - {format(parseISO(program.endDate), 'MMM d, yyyy')}
                </Typography>
                <Typography variant='subtitle1' align='center' color='secondary.light'>
                  {program.tagline}
                </Typography>
                <Typography variant='h6'>
                  {program.teamsCount} teams | {program.openRolesCount} open roles | {program.mentorsAcceptedCount} mentors | {program.menteesAcceptedCount} mentees
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Container sx={{ mt: -30 }} maxWidth='xl'>
        <Paper
          sx={{
            position: 'relative',
            backgroundColor: 'grey.30',
            color: '#fff',
            mb: 20,
            backgroundSize: 'cover'
          }}
        >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label='program tabs' centered>
                <Tab label='S-Teams' value='1' />
                <Tab label='Lead Mentors' value='2' />
                <Tab label='About' value='3' />
              </TabList>
            </Box>
            <TabPanel value='1'>
              <Typography variant='h4' color='primary.dark'>
                Explore the S-Teams
              </Typography>
              <TeamsGrid teams={teamList}/>
            </TabPanel>
            <TabPanel value='2'>
              <LeadMentorsGrid leadMentors={program.leadMentors.filter((x) => x.claimed)} />
            </TabPanel>
            <TabPanel value='3'>
              <Container sx={{ py: 8 }} maxWidth='md'>
                <Box
                  sx={{
                    bgcolor: '#002884',
                    color: '#fff',
                    p: 6
                  }}
                >
                  <Typography variant='h6' color='inherit' paragraph>
                    {program.description}
                  </Typography>
                </Box>
              </Container>
            </TabPanel>
          </TabContext>
        </Paper>
      </Container>
    </main>
  )
}

export default ProgramDetail
