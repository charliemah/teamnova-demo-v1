import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'

import TeamsGrid from '../../components/team/TeamsGrid'
import { exampleProgKey } from '../../config'

const titles = [
  'Collaborative Learning Over Code',
  'What are the possibilities with THE TEAMNOVA WAY?'
]
const subtitles = [
  'THE TEAMNOVA WAY of',
  'Democratizing',
  'Mentorship in Open Source',
  'for the Future of Work',
  'Try it free today?'
]
const propositions = [
  ['1', 'Leverage your soft skills to future-proof your career', 'Prepare for a complex future by developing a growth mindset, harnessing soft skills and embracing collaborative learning.'],
  ['2', 'Help more mentees in a more engaged and effective way', 'Foster self-organization and informal learning within a Scrum team to support a greater number of mentees.']
]
const whyTeamMentorship = [
  'Why Team Mentorship?',
  'While traditional Open Source Mentorship Programs (OSMPs) are excellent, they often lack a structured approach for effective team collaboration.',
  'Why not create a new platform where mentors can help mentees improve both the hard and soft skills required for open source?',
  'This is how the idea of the \'S-Team\' (Self-organizing Team) structure was born.'
]
const subheaders = [
  'Inspired by Larry Page\'s Experiment -',
  'Google Summer of Code (GSoC)',
  'Made in Vancouver with love'
]
const mission = [
  'Team TEAMNOVA is on a MISSION to Make',
  'Mentorship in Open Source',
  'More',
  'ACCESSIBLE',
  'for More Students'
]

const HomePage = () => {
  const assetsPath = require.context('../../assets/images', false)
  const backgroundImageUrl1 = assetsPath('./collaborative_learning_1.jpg')
  const backgroundImageUrl2 = assetsPath('./collaborative_learning_2.jpg')

  const exampleTeams = useSelector(state => state.teams.teamList.slice(0, 3))

  const [value, setValue] = useState('1')

  const handleChange = useCallback((e, newValue) => {
    setValue(newValue)
  }, [])

  return (
    <Container maxWidth={false} disableGutters>
      <Card
        sx={{ display: 'flex', flexDirection: 'row' }}
      >
        <CardContent sx={{ flex: 1 }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} textColor='inherit' aria-label='user tabs'>
                <Tab label='Mentee' style={{ textTransform: 'none' }} value='1' />
                <Tab label='Mentor' style={{ textTransform: 'none' }} value='2' />
              </TabList>
            </Box>
            {propositions.map((proposition, i) => (
              <TabPanel key={i} value={proposition[0]}>
                <Stack
                  direction='column'
                  spacing={3}
                  justifyContent='space-evenly'
                  sx={{
                    px: 6,
                    py: 6
                  }}
                >
                  <Typography variant='h4' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '50px' }}>
                    {proposition[1]}
                  </Typography>
                  <Typography variant='h6'>
                    {proposition[2]}
                  </Typography>
                </Stack>
              </TabPanel>
            ))}
          </TabContext>
        </CardContent>
        <CardMedia
          component='img'
          sx={{ width: '50%', display: { xs: 'none', sm: 'block' } }}
          image={backgroundImageUrl1}
        />
      </Card>
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#010A13',
          color: '#fff',
          alignItems: 'center',
          p: { xs: 5, md: 10 },
          my: 5
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
      <Card
        sx={{ display: 'flex', flexDirection: 'row' }}
      >
        <CardMedia
          component='img'
          sx={{ width: '50%', display: { xs: 'none', sm: 'block' } }}
          image={backgroundImageUrl2}
        />
        <CardContent sx={{ flex: 1 }}>
            <Stack
              direction='column'
              spacing={3}
              justifyContent='space-evenly'
              sx={{ p: 3 }}
            >
              <Typography variant='h4' color='primary.dark' sx={{ fontWeight: 'bold', lineHeight: '80px' }}>
                {whyTeamMentorship[0]}
              </Typography>
              <Typography variant='h6' color='inherit'>
                {whyTeamMentorship[1]}
              </Typography>
              <Typography variant='h6' color='primary.dark'>
                {whyTeamMentorship[2]}
              </Typography>
              <Typography variant='h6' color='inherit'>
                {whyTeamMentorship[3]}
              </Typography>
            </Stack>
        </CardContent>
      </Card>
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'grey.30',
          alignItems: 'center',
          p: { xs: 5, md: 10 }
        }}
      >
        <Stack
          direction='column'
          alignItems='center'
          spacing={6}
          justifyContent='space-evenly'
        >
          <Typography variant='h5' color='#010A13' sx={{ fontWeight: 'bold' }}>
            {titles[1]}
          </Typography>
          <Button component={RouterLink} to={`/programs/${exampleProgKey}`} target='_blank' variant='contained' style={{ textTransform: 'none', fontWeight: 'bold', width: 240, height: 80, fontSize: '30px' }}>
            See a Demo
          </Button>
        </Stack>
      </Box>
      <Typography variant='h4' color='primary.dark'>
        Example S-Teams
      </Typography>
      <TeamsGrid teams={exampleTeams}/>
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#010A13',
          color: '#fff',
          alignItems: 'center',
          px: { xs: 5, md: 10 },
          py: { xs: 10, md: 20 },
          my: 5
        }}
      >
        <Stack
          direction='column'
          alignItems='center'
          spacing={3}
          justifyContent='space-evenly'
        >
          <Typography variant='h4' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            {mission[0]}
          </Typography>
          <Typography variant='h4' color='primary.light' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            {mission[1]}
          </Typography>
          <Typography variant='h4' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            {mission[2]} <Box color='primary.dark' display='inline'>{mission[3]}</Box> {mission[4]}
          </Typography>
          <Typography variant='h6' color='inherit'>
            {subheaders[0]} <Box color='primary.light' display='inline'>{subheaders[1]} </Box>
          </Typography>
        </Stack>
      </Box>
    </Container>
  )
}

export default HomePage
