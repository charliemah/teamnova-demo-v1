import axios from 'axios'

import { baseUrl } from '../config'

export const user = {
  state: {
    isSignedIn: false,
    userId: '',
    email: '',
    accountType: '',
    token: ''
  },
  reducers: {
    setCurrentUser (state, payload) {
      return {
        ...state,
        isSignedIn: true,
        ...payload
      }
    },
    signOutUser () {
      return {
        userId: '',
        email: '',
        accountType: '',
        token: ''
      }
    }
  },
  effects: dispatch => ({
    async asyncSignUp (payload) {
      const response = await axios.post(`${baseUrl}/api/v1/auth/signup`, payload)
      dispatch.user.setCurrentUser(response.data)
    },
    async asyncSignIn (payload) {
      const response = await axios.post(`${baseUrl}/api/v1/auth/signin`, payload)
      dispatch.user.setCurrentUser(response.data)
    }
  })
}

export const programs = {
  state: {
    programList: []
  },
  reducers: {
    setProgramList (state, payload) {
      return {
        ...state,
        programList: payload
      }
    }
  },
  effects: dispatch => ({
    async asyncFetchPrograms () {
      const response = await axios.get(`${baseUrl}/api/v1/programs`)
      dispatch.programs.setProgramList(response.data)
    }
  })
}

export const teams = {
  state: {
    teamList: []
  },
  reducers: {
    setTeamList (state, payload) {
      return {
        ...state,
        teamList: payload
      }
    }
  },
  effects: dispatch => ({
    async asyncFetchTeamsByProgram (payload) {
      const response = await axios.get(`${baseUrl}/api/v1/programs/${payload}/teams`)
      dispatch.teams.setTeamList(response.data)
    }
  })
}

export const roles = {
  state: {
    mentorList: [],
    openRoleList: [],
    menteeList: []
  },
  reducers: {
    setMentorList (state, payload) {
      return {
        ...state,
        mentorList: payload
      }
    },
    setOpenRoleList (state, payload) {
      return {
        ...state,
        openRoleList: payload
      }
    },
    setMenteeList (state, payload) {
      return {
        ...state,
        menteeList: payload
      }
    }
  },
  effects: dispatch => ({
    async asyncFetchMentorsByTeam (payload) {
      const response = await axios.get(`${baseUrl}/api/v1/teams/${payload}/mentors`)
      dispatch.roles.setMentorList(response.data)
    },
    async asyncFetchOpenRolesByTeam (payload) {
      const response = await axios.get(`${baseUrl}/api/v1/teams/${payload}/roles/open`)
      dispatch.roles.setOpenRoleList(response.data)
    },
    async asyncFetchMenteesByTeam (payload) {
      const response = await axios.get(`${baseUrl}/api/v1/teams/${payload}/mentees`)
      dispatch.roles.setMenteeList(response.data)
    }
  })
}
