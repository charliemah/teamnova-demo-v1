import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

const titles = [
  'We\'re on a mission to make mentorship in open source',
  'more accessible for more students',
  '.'
]
const subtitles = [
  'Inspired by the great success of Google Summer of Code (GSoC)'
]

const subheaders = [
  'Free and Open Source Indefinitely'
]

const paragraphs = [
  '"The first pass on Summer of Code was only going to have 200 students, and Larry Page, in his inevitable way said, "That\'s nice. But what about 1000 students?" I\'m said, "Unfortunately, I\'m only one guy." He\'s like, "Why don\'t you hire somebody?" So, we doubled it to 400. We were at 1000 in about two years."'
]

const links = [
  'https://news.slashdot.org/story/12/10/17/1459241/the-growth-of-google-summer-of-code'
]

const AboutPage = () => {
  return (
    <Container maxWidth='lg' disableGutters>
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
            {subheaders[0].toUpperCase()}
          </Typography>
          <Typography variant='h4' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            {titles[0]}
          </Typography>
          <Typography variant='h4' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            <Box color='primary.light' display='inline'>{titles[1]}</Box> {titles[2]}
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
                {subtitles[0].toUpperCase()}
              </Typography>
              <Typography variant='body1' gutterBottom paragraph>
                {paragraphs[0]}
              </Typography>
              <Button component={RouterLink} to={links[0]} target='_blank'>Learn More</Button>
            </Stack>
          </CardContent>
          <CardMedia component='iframe' src='https://www.youtube.com/embed/S6IP_6HG2QE' style={{ width: '50%', height: 'auto', border: 'none' }} allow='autoPlay'/>
        </Card>
      </Box>
    </Container>
  )
}

export default AboutPage
