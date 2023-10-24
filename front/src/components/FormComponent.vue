<template>
    <v-container>
        <v-row>
            <v-col cols="6">
                <form @submit.prevent="action">

                    <v-text-field 
                        v-for="(item, index) in fields"
                        v-model="item.field.value.value" 
                        :error-messages="item.field.errorMessage.value" 
                        :label=item.label
                        :counter="item.counter ? item.counter : false"
                        clearable
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
import { Fields } from '@/utils/types';
import { PropType } from 'vue'

const props = defineProps({
    fields: {} as PropType<Fields[]>,
    action: {} as PropType<any>,
})


</script>
@/store/users