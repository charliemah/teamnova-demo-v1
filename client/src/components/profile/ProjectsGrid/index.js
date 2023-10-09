import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import ProjectCard from '../ProjectCard'

const ProjectsGrid = ({projects}) => {
  return (
    <Container sx={{ py: 8 }} maxWidth='lg'>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </Grid>
    </Container>
  )
}

export default ProjectsGrid