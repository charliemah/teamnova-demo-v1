import React from 'react'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

import TeamCard from '../../components/team/TeamCard'
import { exampleProgKey } from '../../config'

const titles = [
  'Why',
  'TEAMNOVA?',
  'We help open source projects grow diverse talent pipelines through team mentoring.',
  'Collaborative Learning Over Code'
]
const subtitles = [
  'THE TEAMNOVA WAY of',
  'Democratizing Mentorship in Open Source for the Future of Work',
  'Example Self-organizing Teams'
]
const whySTeam = [
  'Why',
  'Self-organizing Team?',
  'While traditional Open Source Mentorship Programs are excellent, they often lack a structured approach for effective team collaboration.',
  'With TEAMNOVA open source software solution, We help mentors and mentees in maximizing the benefits of collaborative learning through the innovative design of the Self-organizing Team (S-Team) structure.'
]
const subheaders = [
  'Free and Open Source Indefinitely',
  'Inspired by Larry Page\'s Experiment -',
  'Google Summer of Code (GSoC)',
  'Made in Vancouver with love'
]
const mission = [
  'TEAMNOVA is on a MISSION to Make',
  'Mentorship in Open Source',
  'More ACCESSIBLE for More Students'
]

const HomePage = () => {
  const assetsPath = require.context('../../assets/images', false)
  const backgroundImageUrl1 = assetsPath('./collaborative_learning_1.jpg')
  const backgroundImageUrl2 = assetsPath('./collaborative_learning_2.jpg')

  const exampleTeams = useSelector(state => state.teams.teamList.slice(0, 3))

  return (
    <Container maxWidth={false} disableGutters>
      <Card
        sx={{ display: 'flex', flexDirection: 'row' }}
      >
        <CardContent sx={{ flex: 1, p: 6 }}>
          <Stack
            direction='column'
            spacing={3}
            justifyContent='space-evenly'
            sx={{ my: 6 }}
          >
            <Typography variant='h2' color='primary.light' sx={{ fontWeight: 'bold', lineHeight: '40px' }}>
              {titles[0]}
            </Typography>
            <Typography variant='h3' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '50px' }}>
              {titles[1]}
            </Typography>
            <Typography variant='h5' color='primary.dark' sx={{ fontWeight: 'bold', lineHeight: '30px' }}>
              {titles[2]}
            </Typography>
          </Stack>
          <Button component={RouterLink} to={`/programs/${exampleProgKey}`} target='_blank' variant='contained'>
            See a Live Demo
          </Button>
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
          bgcolor: '#12161A',
          color: '#fff',
          alignItems: 'center',
          p: { xs: 3, md: 6 },
          mt: 3
        }}
      >
        <Stack
          direction='column'
          alignItems='center'
          spacing={3}
          justifyContent='space-evenly'
        >
          <Typography variant='h3' color='primary.light' sx={{ fontWeight: 'bold', lineHeight: '80px' }} gutterBottom>
            {titles[3]}
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
              {subtitles[1]}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#161A1F',
          color: '#fff',
          alignItems: 'center',
          p: 3,
          mb: 3
        }}
      >
        <Box
          sx={{
            position: 'relative',
            alignItems: 'center',
            py: 1
          }}
        >
          <Typography variant='h5' align='center' color='primary.dark' gutterBottom>
            {subtitles[2]}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {exampleTeams.map((team) => (
            <TeamCard key={team.key} team={team} />
          ))}
        </Grid>
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
              <Typography variant='h4' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '80px' }}>
                <Box color='primary.light' display='inline'>{whySTeam[0]} </Box> {whySTeam[1]}
              </Typography>
              <Typography variant='h6' color='inherit'>
                {whySTeam[2]}
              </Typography>
              <Typography variant='h5' color='primary.dark' sx={{ fontWeight: 'bold', lineHeight: '30px' }}>
                {whySTeam[3]}
              </Typography>
            </Stack>
        </CardContent>
      </Card>
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#12161A',
          color: '#fff',
          alignItems: 'center',
          p: { xs: 3, md: 6 },
          my: 3
        }}
      >
        <Stack
          direction='column'
          alignItems='center'
          spacing={3}
          justifyContent='space-evenly'
        >
          <Typography variant='h5' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            {mission[0]}
          </Typography>
          <Typography variant='h3' color='primary' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            {mission[1]}
          </Typography>
          <Typography variant='h5' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            {mission[2]}
          </Typography>
          <Typography variant='h6' color='primary.light'>
            {subheaders[0]}
          </Typography>
          <Typography variant='h6' color='inherit'>
            {subheaders[1]} <Box color='primary.light' display='inline'>{subheaders[2]} </Box>
          </Typography>
        </Stack>
      </Box>
    </Container>
  )
}

export default HomePage
