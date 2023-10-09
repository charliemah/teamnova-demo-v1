import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}))

const ChipArray = ({labels, size, color, variant}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component='ul'
    >
      {labels.map((label, index) => (
        <ListItem key={index}>
          <Chip label={label} size={size} color={color} variant={variant} />
        </ListItem>
      ))}
    </Box>
  )
}

export default ChipArray