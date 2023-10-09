import { useState, useEffect } from 'react'
import { useParams, Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

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
import Grid from '@mui/material/Grid'

import MentorsGrid from '../../components/team/MentorsGrid'
import MenteesGrid from '../../components/team/MenteesGrid'
import OpenRolesGrid from '../../components/team/OpenRolesGrid'
import SprintsGrid from '../../components/team/SprintsGrid'

function TeamDetail() {

  const [value, setValue] = useState('1')

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  let { teamKey } =  useParams()

  const team = useSelector(state => state.teams.teamList.filter(team => team.key == teamKey)[0])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch.roles.asyncFetchMentorsByTeam(teamKey)
  }, [teamKey])

  const mentorList = useSelector(state => state.roles.mentorList)

  useEffect(() => {
    dispatch.roles.asyncFetchMenteesByTeam(teamKey)
  }, [teamKey])

  const menteeList = useSelector(state => state.roles.menteeList)

  useEffect(() => {
    dispatch.roles.asyncFetchOpenRolesByTeam(teamKey)
  }, [teamKey])

  const openRoleList = useSelector(state => state.roles.openRoleList)

  useEffect(() => {
    dispatch.sprints.asyncFetchSprintsByTeam(teamKey)
  }, [teamKey])

  const sprintList = useSelector(state => state.sprints.sprintList)

  const assetsPath = require.context('../../assets/images', false)

  const logoUrl = assetsPath(team.logoUrl)

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
            direction='row'
            alignItems='center'
            spacing={3}
            justifyContent='space-evenly'
          >
            <Avatar
              src={logoUrl}
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
                <Button component={RouterLink} to={`/programs/${team.program.key}`} size='small' color='secondary' sx={{ minWidth: 0, px: 0 }}>
                  {team.program.key.toUpperCase()}
                </Button>
                <Button size='small' color='inherit' variant='text' sx={{ minWidth: 0, px: 0 }}>
                  S-TEAM {team.key.toUpperCase()}
                </Button>
              </Stack>
              <Typography component='h1' variant='h5' color='text.primary'>
                {team.name}
              </Typography>
              <Typography variant='subtitle1' color='text.secondary'>
                {team.tagline}
              </Typography>
              <Stack
                direction='row'
                spacing={2}
              >
                <Typography variant='subtitle2' color='text.secondary' component='div'>
                  <Box color='text.primary' display='inline'>{team.openRolesCount}</Box> open roles
                </Typography>
                <Typography variant='subtitle2' color='text.secondary' component='div'>
                  <Box color='text.primary' display='inline'>{team.followersCount}</Box> followers
                </Typography>
                <Typography variant='subtitle2' color='text.secondary' component='div'>
                  <Box color='text.primary' display='inline'>{team.supportersCount}</Box> supporters
                </Typography>
              </Stack>
              <Stack
                direction='row'
                spacing={2}
                justifyContent='center'
                sx={{ py: 2 }}
              >
                <Button variant='outlined'>Follow</Button>
                <Button variant='contained'>Support</Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} textColor='inherit' aria-label='team tabs'>
            <Tab label='Mentors' value='1' />
            <Tab label='Mentees' value='2' />
            <Tab label='Open Roles' value='3' />
            <Tab label='Sprints' value='4' />
            <Tab label='Mission' value='5' />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <MentorsGrid roles={mentorList} />
        </TabPanel>
        <TabPanel value='2'>
          <MenteesGrid roles={menteeList} />
        </TabPanel>
        <TabPanel value='3'>
          <OpenRolesGrid roles={openRoleList} />
        </TabPanel>
        <TabPanel value='4'>
          <SprintsGrid sprints={sprintList}/>
        </TabPanel>
        <TabPanel value='5'>
          <Grid container>
            <Grid item md={6}>
              <Box
                sx={{
                  position: 'relative',
                  px: 10,
                  pr: { md: 0 },
                  py: 20,
                }}
              >
                <Typography align='center' variant='h2' color='inherit'>
                  Mission
                </Typography>
                <Typography align='center' variant='h6' color='inherit'>
                  {team.mission}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </main>
  )
}

export default TeamDetail