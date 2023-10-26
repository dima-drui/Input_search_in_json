<template>
    <v-row class="d-flex justify-center ">
        <v-col cols="6">
            <form 
                class="d-flex flex-column justify-center"
                @submit.prevent="action" 
                >
                <v-text-field 
                    v-for="(item, index) in fields"
                    :key="index"
                    v-model="item.field.value.value" 
                    :error-messages="item.field.errorMessage.value" 
                    :label="item.label"
                    :placeholder="item.placeholder"
                    v-maska:[item.mask]
                    clearable
                    >
                </v-text-field>

                <v-btn 
                    class="mx-auto"
                    width="250px"
                    type="submit"
                    color="primary"
                    :disabled="!props.allFieldsValid"
                    >submit
                </v-btn>
            </form>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { Fields } from '@/utils/types';
import { PropType } from 'vue'
import { vMaska } from "maska"

const props = defineProps({
    fields: {} as PropType<Fields[]>,
    allFieldsValid: Boolean,
    action: {} as PropType<any>,
})


</script>
@/store/users