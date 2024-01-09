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
  '"Mentorship programs in open source are critical for the growth and development of the open source community, and the LFX Mentorship program is no exception."'
]
const subtitles = [
  'Why We Need Open Source Mentorship Programs at the Linux Foundation'
]

const subheaders = [
  'Mentorship in Open Source | Linux Foundation Research'
]

const paragraphs = [
  '"Mentors can share their knowledge and experience with mentees, helping them develop the skills and knowledge they need to succeed in the open source community. Mentees, on the other hand, can learn from experienced professionals, gaining valuable insights and advice that they can use to advance their careers."'
]

const links = [
  'https://www.linuxfoundation.org/blog/why-we-need-open-source-mentorship-programs-at-the-linux-foundation'
]

const DiscoverPage = () => {
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
          <Typography variant='h5' align='center' color='inherit' sx={{ fontWeight: 'bold', lineHeight: '50px' }} gutterBottom>
            {titles[0]}
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
          <CardMedia component='iframe' src='https://www.youtube.com/embed/BQ3ZkyisjJs' style={{ width: '50%', height: 'auto', border: 'none' }} allow='autoPlay'/>
        </Card>
      </Box>
    </Container>
  )
}

export default DiscoverPage
