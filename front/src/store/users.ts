// Utilities
import { defineStore } from 'pinia'
import { User } from '../../../common/types'
import { defaultActions } from './defaultActions';

export const useUsersStore = defineStore('users', {
  state: () => ({
    entity: 'users',
    list: [] as User[],
    loading: false,
    error: '' as string
  }),

  getters: {
    getList: (state): User[] => state.list,
    getLoading: (state): boolean => state.loading,
    getError: (state): string => state.error
  },
  actions: {
    ...defaultActions
  }
})
