<template>
    <v-app>
        <v-main>
            <FormComponent />
            <ListComponents 
                :columns=userColumns 
                :data=usersStore.getList 
            />
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import FormComponent from '@/components/FormComponent.vue'
import ListComponents from '@/components/ListComponents.vue'
import { Column } from '@/utils/types'
import { useUsersStore } from '@/store/users';

const usersStore = useUsersStore()

const userColumns: Column[] = [
    { value: 'email', header: 'Email' },
    { value: 'number', header: 'number' }
]
</script>
