import * as React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Stack from '@mui/material/Stack'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import ChipArray from '../../generic/ChipArray'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

const ProjectCard = ({ project }) => {

  const assetsPath = require.context('../../../assets/images', false)

  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component='div'
          sx={{
            // 16:9
            pt: '56.25%',
          }}
          image={assetsPath(project.imageUrl)}
        />
        <CardContent>
          <Stack
            direction='column'
          >          
            <Stack
              direction='row'
              justifyContent='space-between'
            >
              <Typography gutterBottom variant='h5' component='h2'>
                {project.name}
              </Typography>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </Stack>
              <Typography variant='subtitle2'>
                {project.role}
              </Typography>
              <ChipArray labels={project.featuredSkills} size='small'/>
            </Stack>
        </CardContent>
        <CardActions>
          <Button component={RouterLink} to={project.demoUrl} target='_blank'>Demo</Button>
          <Button component={RouterLink} to={project.repoUrl} target='_blank'>Repo</Button>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography variant='subtitle1'>
              Contribution
            </Typography>
            <Typography color='text.secondary' paragraph>
              {project.contribution}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  )
}

export default ProjectCard