import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

const defaultFormFields = {
  accountType: '',
  email: '',
  password: '',
}

const SignUpForm = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { accountType, email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      dispatch.user.asyncSignUp(formFields)
      resetFormFields()
    } catch (err) {
      console.log('user creation encountered an error', err)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component='h1' variant='h5'>
        Sign Up
      </Typography>
      <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <FormControl sx={{ pl: 4 }}>
          <FormLabel id='accountType'>Account Type</FormLabel>
          <RadioGroup
            row
            aria-labelledby='accountType'
            name='accountType'
            onChange={handleChange}
            value={accountType}
          >
            <FormControlLabel value='LeadMentor' control={<Radio />} label='Lead Mentor'/>
            <FormControlLabel value='Mentor' control={<Radio />} label='Mentor'/>
            <FormControlLabel value='Mentee' control={<Radio />} label='Mentee'/>
          </RadioGroup>
        </FormControl>
        <TextField
          id='email'
          label='Email Address'
          margin='normal'
          required
          fullWidth
          onChange={handleChange}
          name='email'
          value={email}
        />
        <TextField
          id='password'
          label='Password'
          margin='normal'
          required
          fullWidth
          onChange={handleChange}
          name='password'
          type='password'
          value={password}
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent='flex-end'>
          <Grid item>
            <Link href='/signin' variant='body2'>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default SignUpForm