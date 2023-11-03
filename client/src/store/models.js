import axios from 'axios'

import { baseUrl } from '../config'

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
