<template>
    <v-app>
        <v-main>
            <FormComponent 
                :fields=formFields
                :action=submit
                />
            <ListComponents 
                :columns=userColumns 
                :data=usersStore.getList 
                :waiting=usersStore.getWaiting
            />
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import FormComponent from '@/components/FormComponent.vue'
import ListComponents from '@/components/ListComponents.vue'
import { Column, Fields } from '@/utils/types'
import { useUsersStore } from '@/store/users';
import { useField, useForm } from 'vee-validate'

const usersStore = useUsersStore()

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        email(value: string) {
            const emailRegx = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi
            if (emailRegx.test(value)) return true
            return 'Must be a valid e-mail.'
        },
        number(value: string = "") {  
            if (value.length == 0 || value.length == 6 ) return true
            return 'Number should contains 6 digits.'
        }
    }
})
const email = useField('email')
const number = useField('number')

const formFields: Fields[] = [
    { field: email, label: 'E-Mail' },
    { field: number, label: 'Number (optional)', counter: 6 }
]

const userColumns: Column[] = [
    { value: 'email', header: 'Email' },
    { value: 'number', header: 'number' }
]

const submit = handleSubmit( 
    async (values: any) => {
        usersStore.fetchUsers(values)
    }
)
</script>
