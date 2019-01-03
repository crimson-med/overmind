export default (ts) =>
  ts
    ? [
        {
          fileName: 'overmind/actions.ts',
          code: `
import { Action } from 'overmind'
import { User } from './state'

export const getCurrentUser: Action = async ({ http, state }) => {
  state.currentUser = await http.get<User>('/user')
}
  `,
        },
      ]
    : [
        {
          fileName: 'overmind/actions.js',
          code: `
export const getCurrentUser = async ({ http, state }) => {
  state.currentUser = await http.get('/user')
}
  `,
        },
      ]
