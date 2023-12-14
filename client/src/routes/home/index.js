import React from 'react'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import Paper from '@mui/material/Paper'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

import TeamCard from '../../components/team/TeamCard'
import { exampleProgKey } from '../../config'

const titles = [
  'Together, build a better future',
  'through ',
  'mentoring at scale',
  '.',
  'We empower ',
  'large open source projects ',
  'with highly flexible software-powered solutions for ',
  'high quality mentorship at scale',
  '.',
  'We\'re on a mission to make mentorship in open source',
  'more accessible for more students',
  '.',
  'We leverage open source to help universities and employers ',
  'bridge the skills gap between education and work',
  '.',
  '"Mentorship programs in open source are critical for the growth and development of the open source community, and the LFX Mentorship program is no exception."',
  'Why',
  'Mentoring at Scale?',
  'Collaborative Learning Over Code',
  'Why',
  'Self-organizing Team?'
]
const subtitles = [
  'Give students a disproportionate advantage in lifelong employability.',
  'Inspired by the great success of Google Summer of Code (GSoC)',
  'Why We Need Open Source Mentorship Programs at the Linux Foundation',
  'The Teamnova way of high quality mentorship at scale',
  'Featured Self-organizing Teams'
]

const subheaders = [
  'Inspired by the complex experiment initiated by Larry Page in 2005 -',
  'Google Summer of Code (GSoC)',
  'Made in Vancouver with love',
  'Free and Open Source Indefinitely',
  'Mentorship in Open Source | Linux Foundation Research'
]

const paragraphs = [
  'Most large open source projects are keen to offer students high-quality Work-Integrated Learning opportunities for social good, even though they recognize that the likelihood of students becoming regular contributors might be lower than expected. However, scaling experienced mentors, particularly those in maintainer roles, presents a challenge, and successfully sustaining high-quality mentorship on a large scale is even more difficult.',
  '"The first pass on Summer of Code was only going to have 200 students, and Larry Page, in his inevitable way said, "That\'s nice. But what about 1000 students?" I\'m said, "Unfortunately, I\'m only one guy." He\'s like, "Why don\'t you hire somebody?" So, we doubled it to 400. We were at 1000 in about two years."',
  'Teamnova open source project wants to work with partners to help solve this problem through innovative team mentoring and collaborative learning solutions, aiming to empower large open-source projects to sustain high-quality mentorship at scale.Together, let\'s work towards a better future by exposing more students to real-world software development while also helping them in developing a growth mindset.',
  '"Mentors can share their knowledge and experience with mentees, helping them develop the skills and knowledge they need to succeed in the open source community. Mentees, on the other hand, can learn from experienced professionals, gaining valuable insights and advice that they can use to advance their careers."',
  'Google Summer of Code (GSoC), as one of the most prestigious open source mentorship programs, is highly competitive. According to 2023 statistics, out of 43,765 applicants and 7,723 proposals submitted, only 967 GSoC contributors were accepted.',
  'While traditional open source mentorship programs are excellent, they often lack a structured approach that allows mentors and mentees to maximize the benefits of collaborative learning. Why not create a new platform where mentors can help mentees improve both the hard and soft skills required in open source? This thinking led to the idea of the \'Self-organizing Team\' structure.'
]

const links = [
  'https://news.slashdot.org/story/12/10/17/1459241/the-growth-of-google-summer-of-code',
  'https://www.linuxfoundation.org/blog/why-we-need-open-source-mentorship-programs-at-the-linux-foundation'
]

const HomePage = () => {
  const assetsPath = require.context('../../assets/images', false)
  const backgroundImageUrl1 = assetsPath('./vancouver_wallpaper_1.jpg')
  const backgroundImageUrl2 = assetsPath('./collaborative_learning_1.jpg')
  const backgroundImageUrl3 = assetsPath('./collaborative_learning_2.jpg')

  const featuredTeams = useSelector(state => state.teams.teamList.slice(0, 3))

  return (
    <Container maxWidth={false} disableGutters>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center 70%',
          backgroundImage: `url(${backgroundImageUrl1})`
        }}
      >
        {<img style={{ display: 'none' }} src={backgroundImageUrl1}/>}
        <Box
          sx={{
            position: 'relative',
            alignItems: 'center',
            mx: 9,
            mb: 9
          }}
        >
          <Box
            sx={{
              position: 'relative',
              bgcolor: 'deepOrange.800',
              color: '#fff',
              opacity: 0.8,
              alignItems: 'center',
              p: { xs: 3, md: 6 }
            }}
          >
            <Box
              sx={{
                position: 'relative',
                bgcolor: '#12161A',
                color: '#fff',
                opacity: 0.95,
                p: 3,
                m: 6
              }}
            >
              <Stack
                direction='column'
                alignItems='center'
                spacing={3}
              >
                <Typography variant='h3' align='center' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '60px' }} gutterBottom>
                  {titles[0]}
                </Typography>
                <Typography variant='h3' align='center' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '60px' }} gutterBottom>
                  {titles[1]} <Box color='primary.light' display='inline'>{titles[2]}</Box> {titles[3]}
                </Typography>
                <Typography variant='h5' align='center' color='inherit' sx={{ lineHeight: '40px' }}>
                  {subtitles[0]}
                </Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                position: 'relative',
                opacity: 1,
                p: { xs: 3, md: 6 },
                mt: { xs: 12, md: 30 }
              }}
            >
              <Stack
                direction='column'
                alignItems='center'
                spacing={1.5}
              >
                <Typography variant='subtitle1' align='center' color='inherit'>
                  {subheaders[0].toUpperCase()} <Box display='inline'>{subheaders[1]}</Box>
                </Typography>
                <Box textAlign='center'>
                  <Button component={RouterLink} to={`/programs/${exampleProgKey}`} target='_blank' color='inherit' size='large' style={{ textTransform: 'none' }} variant='outlined'>
                    Try Teamnova for free
                  </Button>
                </Box>
                <Typography variant='subtitle2' align='center' color='inherit'>
                  {subheaders[2].toUpperCase()}
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Paper>
      <Box
        sx={{
          position: 'relative',
          alignItems: 'center',
          p: { xs: 3, md: 6 }
        }}
      >
        <Stack
          direction='column'
          spacing={6}
          justifyContent='center'
          sx={{ py: 3 }}
        >
          <Typography variant='h4' align='center' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '60px' }} gutterBottom>
            {titles[4]}
            <Box color='primary.dark' display='inline'>{titles[5]}</Box>
            {titles[6]}
            <Box color='primary.dark' display='inline'>{titles[7]}</Box>
            {titles[8]}
          </Typography>
          <Typography variant='body1' color='inherit' paragraph>
            {paragraphs[0]}
          </Typography>
        </Stack>
        <Stack
          direction='row'
          spacing={2}
          justifyContent='center'
          sx={{ py: 2 }}
        >
          <Button size='large' variant='outlined'>Learn More</Button>
          <Button component={RouterLink} to={`/programs/${exampleProgKey}`} target='_blank' size='large' variant='contained'>
            Request A Full Demo
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#12161A',
          color: '#fff',
          alignItems: 'center',
          p: { xs: 3, md: 6 },
          mt: 9
        }}
      >
        <Stack
          direction='column'
          alignItems='center'
          spacing={3}
          justifyContent='space-evenly'
        >
          <Typography variant='subtitle1' color='primary.light'>
            {subheaders[3].toUpperCase()}
          </Typography>
          <Typography variant='h4' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            {titles[9]}
          </Typography>
          <Typography variant='h4' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            <Box color='primary.light' display='inline'>{titles[10]}</Box> {titles[11]}
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#161A1F',
          color: '#fff',
          alignItems: 'center',
          p: 6,
          mb: 9
        }}
      >
        <Card
          sx={{ display: 'flex', flexDirection: 'row' }}
        >
          <CardContent sx={{ flex: 1, p: 6 }}>
            <Stack
              direction='column'
              alignItems='center'
              spacing={1.5}
              justifyContent='space-evenly'
            >
              <Typography variant='subtitle1' align='center' color='primary.dark' sx={{ fontWeight: 'bold', lineHeight: '30px' }} >
                {subtitles[1].toUpperCase()}
              </Typography>
              <Typography variant='body1' gutterBottom paragraph>
                {paragraphs[1]}
              </Typography>
              <Button component={RouterLink} to={links[0]} target='_blank'>Learn More</Button>
            </Stack>
          </CardContent>
          <CardMedia component='iframe' src='https://www.youtube.com/embed/S6IP_6HG2QE' style={{ width: '50%', height: 'auto', border: 'none' }} allow='autoPlay'/>
        </Card>
      </Box>
      <Box
        sx={{
          position: 'relative',
          alignItems: 'center',
          p: { xs: 3, md: 6 }
        }}
      >
        <Stack
          direction='column'
          spacing={6}
          justifyContent='center'
          sx={{ py: 3 }}
        >
          <Typography variant='h4' align='center' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '60px' }} gutterBottom>
            {titles[12]}
              <Box color='primary.dark' display='inline'>{titles[13]}</Box>
            {titles[14]}
          </Typography>
          <Typography variant='body1' color='inherit' paragraph>
            {paragraphs[2]}
          </Typography>
        </Stack>
        <Stack
          direction='row'
          spacing={2}
          justifyContent='center'
          sx={{ py: 2 }}
        >
          <Button size='large' variant='outlined'>Learn More</Button>
          <Button component={RouterLink} to={`/programs/${exampleProgKey}`} target='_blank' size='large' variant='contained'>
            Request A Full Demo
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#12161A',
          color: '#fff',
          alignItems: 'center',
          p: { xs: 3, md: 6 },
          mt: 9
        }}
      >
        <Stack
          direction='column'
          alignItems='center'
          spacing={3}
          justifyContent='space-evenly'
        >
          <Typography variant='subtitle1' color='primary.light'>
            {subheaders[4].toUpperCase()}
          </Typography>
          <Typography variant='h5' align='center' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            {titles[15]}
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#161A1F',
          color: '#fff',
          alignItems: 'center',
          p: 6,
          mb: 9
        }}
      >
        <Card
          sx={{ display: 'flex', flexDirection: 'row' }}
        >
          <CardContent sx={{ flex: 1, p: 6 }}>
            <Stack
              direction='column'
              alignItems='center'
              spacing={1.5}
              justifyContent='space-evenly'
            >
              <Typography variant='subtitle1' align='center' color='primary.dark' sx={{ fontWeight: 'bold', lineHeight: '30px' }} >
                {subtitles[2].toUpperCase()}
              </Typography>
              <Typography variant='body1' gutterBottom paragraph>
                {paragraphs[3]}
              </Typography>
              <Button component={RouterLink} to={links[1]} target='_blank'>Learn More</Button>
            </Stack>
          </CardContent>
          <CardMedia component='iframe' src='https://www.youtube.com/embed/BQ3ZkyisjJs' style={{ width: '50%', height: 'auto', border: 'none' }} allow='autoPlay'/>
        </Card>
      </Box>
      <Grid container sx={{ height: '60vh', my: 9 }}>
        <CssBaseline />
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              position: 'relative',
              alignItems: 'center',
              p: { xs: 3, md: 8 }
            }}
          >
            <Stack
              direction='column'
              spacing={3}
              justifyContent='space-evenly'
              sx={{ py: 3 }}
            >
              <Stack
                direction='column'
                spacing={1.5}
                justifyContent='space-evenly'
              >
                <Typography variant='h4' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '30px' }}>
                  {titles[16]}
                </Typography>
                <Typography variant='h4' color='primary' sx={{ fontWeight: 'bold', lineHeight: '30px' }}>
                  {titles[17]}
                </Typography>
              </Stack>
              <Typography variant='body1' color='inherit' paragraph>
                {paragraphs[4]}
              </Typography>
            </Stack>
            <Button size='large'>Learn More</Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          md={5}
          sx={{
            backgroundImage: `url(${backgroundImageUrl2})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </Grid>
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#12161A',
          color: '#fff',
          alignItems: 'center',
          p: { xs: 3, md: 6 },
          mt: 9
        }}
      >
        <Stack
          direction='column'
          alignItems='center'
          spacing={3}
          justifyContent='space-evenly'
        >
          <Typography variant='h3' color='primary' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            {titles[18]}
          </Typography>
          <Stack
            direction='column'
            alignItems='center'
            spacing={2}
            justifyContent='space-evenly'
          >
            <Typography variant='h5' color='inherit'>
              {subtitles[3]}
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
          pb: 9,
          mb: 9
        }}
      >
        <Box
          sx={{
            position: 'relative',
            alignItems: 'center',
            py: 1
          }}
        >
          <Typography variant='h5' align='center' color='inherit' gutterBottom>
            {subtitles[4]}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {featuredTeams.map((team) => (
            <TeamCard key={team.key} team={team} />
          ))}
        </Grid>
      </Box>
      <Grid container sx={{ height: '60vh', my: 9 }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          md={5}
          sx={{
            backgroundImage: `url(${backgroundImageUrl3})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              position: 'relative',
              alignItems: 'center',
              p: { xs: 3, md: 6 }
            }}
          >
            <Stack
              direction='column'
              spacing={3}
              justifyContent='space-evenly'
              sx={{ py: 3 }}
            >
              <Stack
                direction='column'
                spacing={1.5}
                justifyContent='space-evenly'
              >
                <Typography variant='h4' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '30px' }}>
                  {titles[19]}
                </Typography>
                <Typography variant='h4' color='primary' sx={{ fontWeight: 'bold', lineHeight: '30px' }}>
                  {titles[20]}
                </Typography>
              </Stack>
              <Typography variant='body1' color='inherit' paragraph>
                {paragraphs[5]}
              </Typography>
            </Stack>
            <Button size='large'>Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage
