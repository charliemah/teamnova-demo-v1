import { useState } from 'react'
import { useSelector } from 'react-redux'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

import ProgramsGrid from '../../components/program/ProgramsGrid'
import LinksGrid from '../../components/profile/LinksGrid'

const title = 'Democratize Mentorship in Open Source for Challenges of Tomorrow'
const description = [
  'Empower the Next Generation of Google Summer of Code (GSoC) and Alternatives to Make Mentorship in Open Source More Accessible.',
  'Get started today to build a Teamnova-empowered open source mentorship programs for challenges of tomorrow!'
]
const note = '* This is a demonstration of what\'s possible with Teamnova-empowered open source mentorship programs.'
const about = [
  'Teamnova, made in Vancouver with love, is on a mission to make Project-based Mentorship in Open Source more accessible and inclusive.',
  'Google Summer of Code (GSoC), as one of the most prestigious OSMPs, is highly competitive. According to 2023 statistics, out of 43,765 applicants and 7,723 proposals submitted, only 967 GSoC contributors were accepted. We hope that Teamnova can help more people benefit from high-quality project-based mentorship programs like GSoC.'
]
const useCaselinks = [
  {
    "title":"FoodieAI Mentorship Program",
    "url":"https://www.vercel.com",
    "tagline":"Open Source for Social Good",
    "imageUrl":"./default_card_thumbnail.jpg",
  }
]

const HomePage = () => {

  const assetsPath = require.context('../../assets/images', false)
  const backgroundImageUrl = assetsPath('./default_program_thumbnail.jpg')

  const demoProgramList = useSelector(state => state.programs.programList)

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
          mt: 2,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
        {<img style={{ display: 'none' }} src={backgroundImageUrl}/>}
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
          <Grid item md={8}>
            <Box
              sx={{
                position: 'relative',
                px: { xs: 3, md: 12 },
                pt: { xs: 10, md: 20 },
                pb: 50,
              }}
            >
              <Stack
                direction='column'
                alignItems='center'
                spacing={3}
                justifyContent='space-evenly'
              >
                <Typography component='h2' variant='h4' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '60px' }} gutterBottom>
                  {title}
                </Typography>
                <Stack
                  direction='column'
                  alignItems='center'
                  spacing={1}
                  justifyContent='space-evenly'
                >
                  <Typography variant='h6' color='primary.light'>
                    {description[0]}
                  </Typography>
                  <Typography variant='h6' color='primary.light'>
                    {description[1]}
                  </Typography>
                </Stack>
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
              <TabList onChange={handleChange} textColor='inherit' aria-label='homepage tabs'>
                <Tab label='Demos' value='1' />
                <Tab label='Use Cases' value='2' />
                <Tab label='About' value='3' />
              </TabList>
            </Box>
            <Typography variant='subtitle2' color='secondary.light'>
              {note}
            </Typography>
            <TabPanel value='1'>
              <ProgramsGrid programs={demoProgramList}/>
            </TabPanel>
            <TabPanel value='2'>
              <LinksGrid links={useCaselinks} />
            </TabPanel>
            <TabPanel value='3'>
              <Container sx={{ py: 8 }} maxWidth='md'>
                <Box
                  sx={{
                    bgcolor: '#002884',
                    color: '#fff',
                    p: 6,
                  }}
                >
                  <Stack
                    direction='column'
                    alignItems='center'
                    spacing={4}
                    justifyContent='space-evenly'
                  >
                    {about.map((paragraph, i) => (
                      <Typography variant='h6' color='inherit' key={i} paragraph>
                        {paragraph}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              </Container>
            </TabPanel>
          </TabContext>
        </Paper>
      </Container>
    </main>
  )
}

export default HomePage