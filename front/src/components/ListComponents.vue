<template>
    <v-container>
        <v-table hover class="flex-1-1-100 ">

            <thead>
                <tr>
                    <th v-for="(col, index) in props.columns"
                        :key="index"
                        >
                        <b>{{ col.header }}</b>
                    </th>
                </tr>
            </thead>

            <tbody v-if="props.data.length > 0">
                <tr v-for="(item, index) in props.data"
                    :key="index"
                    >
                        <td v-for="(col, index) in props.columns"
                            :key="index"
                            >{{ item[col.value] }}</td>
                </tr>
            </tbody>

            <v-progress-circular v-if="props.loading && props.data.length == 0 "
                class="align-center"
                size="50"
                width="5"
                color="info"
                indeterminate
                ></v-progress-circular>

            <section v-else>{{ props.error }}</section>

        </v-table>
    </v-container>
</template>

<script setup lang="ts">
import { Column } from '@/utils/types'
import { PropType } from 'vue';

const props = defineProps({
    columns: {
        type: Array as PropType<Column[]>,
        required: true
    },
    data: {
        type: Array as PropType<any[]>, 
        required: true
    },
    loading: Boolean,
    error: String
})


</script>
