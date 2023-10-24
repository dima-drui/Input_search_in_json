// Utilities
import { defineStore } from 'pinia'
import api from "@/utils/api";
import { Res, User } from '../../../common/types'

export const useUsersStore = defineStore('users', {
  state: () => ({
    list: [] as User[]
  }),
  
  actions: {
    async fetchUsers(params: any) {
        const { data } = await api.get<Res<User[]>>('users', { params: params })
        this.list = data
    }
  }
})
