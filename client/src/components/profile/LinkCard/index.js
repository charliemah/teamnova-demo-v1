import { Link as RouterLink } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const LinkCard = ({ link }) => {

  const assetsPath = require.context('../../../assets/images', false)

  return (
    <Grid item xs={12} sm={6} md={4}>
      <CardActionArea component={RouterLink} to={link.url} target='_blank'>
        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
            component='div'
            sx={{
              // 16:9
              pt: '56.25%',
            }}
            image={assetsPath(link.imageUrl)}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography gutterBottom variant='h5' component='h2'>
              {link.title}
            </Typography>
            <Typography variant='subtitle1' color='text.secondary'>
              {link.tagline}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default LinkCard