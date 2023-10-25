// Utilities
import { defineStore } from 'pinia'
import api from "@/utils/api";
import { Res, User } from '../../../common/types'

export const useUsersStore = defineStore('users', {
  state: () => ({
    list: [] as User[],
    loading: false,
    controller: new AbortController(),
  }),

  getters: {
    getList: (state): User[] => state.list,
    getLoading: (state): boolean => state.loading
  },
  actions: {
    async getSearch(params: User) {
        if (this.loading) {
            this.controller.abort();
        }
        this.controller = new AbortController();
        this.loading = true
        this.list = []
        const { data } = await api.get<Res<User[]>>('users', { params: params, signal: this.controller.signal })
        this.list = data
        this.loading = false
    }
  }
})
