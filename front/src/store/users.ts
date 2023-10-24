// Utilities
import { defineStore } from 'pinia'
import api from "@/utils/api";
import { Res, User } from '../../../common/types'

export const useUsersStore = defineStore('users', {
  state: () => ({
    list: [] as User[],
    waiting: false
  }),

  getters: {
    getList: (state): User[] => state.list,
    getWaiting: (state): boolean => state.waiting
  },
  actions: {
    async fetchUsers(params: User) {
        this.waiting = true
        this.list = []
        const { data } = await api.get<Res<User[]>>('users', { params: params })
        this.list = data
        this.waiting = false
    }
  }
})
