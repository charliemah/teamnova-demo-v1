import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

const whatIsTeamnova = [
  'Teamnova, made in Vancouver with love, is on a mission to make mentorship in open source more accessible and inclusive.',
  'While traditional Open Source Mentorship Programs (OSMPs) are excellent, they often lack a structured approach for effective team collaboration. The Apache maxim "Community Over Code" inspired me to think, "Why not create a new platform where mentors can help mentees improve both the hard and soft skills required for open source?" This is how the idea of "S-Team" (Self-organizing Team) structure was born.',
  'Google Summer of Code (GSoC), as one of the most prestigious OSMPs, is highly competitive. According to 2023 statistics, out of 43,765 applicants and 7,723 proposals submitted, only 967 GSoC contributors were accepted. We hope that Teamnova can help more people benefit from high-quality project-based mentorship programs like GSoC.'
]

const AboutPage = () => {

  return (
    <main>
      <Box
        sx={{
          bgcolor: '#002884',
          color: '#fff',
          pt: 24,
          pb: 18,
        }}
      >
        <Container maxWidth='sm'>
          <Stack
            direction='column'
            alignItems='center'
            spacing={4}
            justifyContent='space-evenly'
          >
            <Typography component='h1' variant='h3' color='inherit' sx={{ fontWeight: 'bold' }} gutterBottom>
              What is Teamnova?
            </Typography>
            <ul>
              {whatIsTeamnova.map((paragraph, i) => (
                <Typography
                  variant='subtitle1'
                  color='inherit'
                  key={i}
                  paragraph
                >
                  {paragraph}
                </Typography>
              ))}
            </ul>
          </Stack>
        </Container>
      </Box>
    </main>
  )
}

export default AboutPage


