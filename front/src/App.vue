<template>
    <v-app>
        <v-main>
            <FormComponent 
                :fields="formFields"
                :all-fields-valid="isAllFieldsValid"
                :action="submit"
                />
            <ListComponents 
                :columns="userColumns" 
                :data="usersStore.getList" 
                :waiting="usersStore.getWaiting"
            />
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import FormComponent from '@/components/FormComponent.vue'
import ListComponents from '@/components/ListComponents.vue'
import { Column, Fields } from '@/utils/types'
import { useUsersStore } from '@/store/users';
import { useField, useForm, useIsFormValid } from 'vee-validate'

const usersStore = useUsersStore()

const { handleSubmit } = useForm({
    validationSchema: {
        email(value: string) {
            const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
            if (emailRegx.test(value)) return true
            return 'Check e-mail.'
        },
        number(value: string = "") {  
            if (value.length == 0 || value.length == 8 ) return true
            return 'Number should contains 6 digits.'
        }
    }
})
const email = useField('email')
const number = useField('number')
const isAllFieldsValid = useIsFormValid()

const formFields: Fields[] = [
    { field: email, label: 'E-Mail', placeholder: 'abc@de.com' },
    { field: number, label: 'Number (optional)', placeholder: '12-34-56', mask: {mask: '##-##-##'} }
]

const userColumns: Column[] = [
    { value: 'email', header: 'Email' },
    { value: 'number', header: 'number' }
]

const submit = handleSubmit( 
    async (values: any) => {
        if(values.number) values.number = values.number.replace(/-/g, "")
        usersStore.fetchUsers(values)
    }
)
</script>
