import React, { useState, useCallback } from 'react'
import { useParams, Link as RouterLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Container from '@mui/material/Container'

import ChipArray from '../../components/generic/ChipArray'
import LinksGrid from '../../components/profile/LinksGrid'
import ProjectsGrid from '../../components/profile/ProjectsGrid'

const MentorDetail = () => {
  const [value, setValue] = useState('1')

  const handleChange = useCallback((e, newValue) => {
    setValue(newValue)
  }, [])

  const { teamKey, roleNumber } = useParams()

  const role = useSelector(state => state.roles.mentorList.filter(mentor => mentor.number == roleNumber)[0])

  const profile = role.isLeadMentor ? role.leadMentor.profile : role.mentor.profile

  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6
        }}
      >
        <Container maxWidth='sm'>
          <Stack
            direction='row'
            alignItems='center'
            spacing={3}
            justifyContent='space-evenly'
          >
            <Avatar
              src={profile.avatarUrl}
              sx={{ width: 180, height: 180 }}
            />
            <Stack
              direction='column'
              alignItems='center'
              spacing={1}
              justifyContent='space-evenly'
              sx={{ pt: 3 }}
            >
              <Stack
                direction='row'
                justifyContent='center'
                spacing={0.5}
                sx={{ pt: 3 }}
              >
                <Button color='inherit' variant='text' sx={{ minWidth: 0, px: 0 }}>
                  {role.name} | S-Team
                </Button>
                <Button component={RouterLink} to={`/teams/${teamKey}`} color='primary' sx={{ minWidth: 0, px: 0 }}>
                  {teamKey.toUpperCase()}
                </Button>
              </Stack>
              <Typography component='h1' variant='h5' color='text.primary'>
                {profile.name}
              </Typography>
              <Typography variant='subtitle1'>
                {profile.title} <Box color='text.secondary' display='inline'>at</Box> {profile.organization}
              </Typography>
              <Typography variant='subtitle1'color='text.secondary'>
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
              <Stack
                direction='row'
                spacing={2}
                justifyContent='center'
                sx={{ py: 2 }}
              >
                <Button variant='outlined'>Follow</Button>
                <Button variant='contained'>Get Help</Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} textColor='inherit' aria-label='mentor tabs' centered>
            <Tab label='Links' value='1' />
            <Tab label='Projects' value='2' />
            <Tab label='About' value='3' />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <LinksGrid links={profile.links} />
        </TabPanel>
        <TabPanel value='2'>
          <ProjectsGrid projects={profile.featuredProjects} />
        </TabPanel>
        <TabPanel value='3'>
          <Container sx={{ py: 8 }} maxWidth='md'>
            <Typography paragraph>
              {profile.bio}
            </Typography>
            <ChipArray labels={role.topics} color='primary' variant='outlined'/>
          </Container>
        </TabPanel>
      </TabContext>
    </main>
  )
}

export default MentorDetail
