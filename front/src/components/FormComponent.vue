<template>
    <v-container>
        <v-row>
            <v-col cols="6">
                <form @submit.prevent="submit">
                    <v-text-field 
                        v-model="email.value.value" 
                        :error-messages="email.errorMessage.value" 
                        label="E-mail"
                        >
                    </v-text-field>
                    <v-text-field 
                        v-model="number.value.value" 
                        :counter="6" 
                        :error-messages="number.errorMessage.value"
                        label="Number (optional)"
                        >
                    </v-text-field>
                    <v-btn 
                        type="submit"
                        >submit
                    </v-btn>
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
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

const submit = handleSubmit( 
    async (values: any) => {
        usersStore.fetchUsers(values)
    }
)

</script>
@/store/users