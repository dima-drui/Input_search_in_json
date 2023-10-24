<template>
    <v-container>
        <v-table hover>
            <thead>
                <tr>
                    <th 
                        v-for="(col, index) in props.columns"
                        :key="index"
                        >
                        <b>{{ col.header }}</b>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="(item, index) in props.data"
                    :key="index"
                    >
                    <td 
                        v-for="(col, index) in props.columns"
                        :key="index"
                        >{{ item[col.value] }}</td>
                </tr>
            </tbody>
        </v-table>
    </v-container>
</template>

<script setup lang="ts">
import { Column } from '@/utils/types'
import { PropType } from 'vue';

const props = defineProps({
    columns: {} as PropType<Column[]>,
    data: {} as PropType<any[]>
})


</script>
