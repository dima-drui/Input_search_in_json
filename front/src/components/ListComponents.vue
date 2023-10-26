<template>
  <v-sheet class="ma-5 d-flex flex-column justify-space-between" elevation="4">

        <section v-if="props.loading && props.data.length == 0 "
            class="d-flex justify-center pa-5"
            >
            <v-progress-circular
                size="50"
                width="5"
                color="info"
                indeterminate
                ></v-progress-circular>
        </section>

        <section v-else>
            <v-table hover>
            <thead>
                <tr>
                    <th v-for="(col, index) in props.columns"
                        :key="index"
                        class="text-center"
                        :width="tableWidth"
                        >
                        <b>{{ col.header }}</b>
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr v-if="props.data.length < 1"
                    style="height: 5rem; line-height: 5rem; text-align: center; font-style: italic;"
                    >
                    {{ props.error }}
                </tr>

                <tr v-if="props.data.length > 0"
                    v-for="(item, index) in props.data"
                    :key="index"
                    >
                        <td v-for="(col, index) in props.columns"
                            :key="index"
                            class="text-center"
                            >{{ item[col.value] }}</td>
                </tr>
            </tbody>
        </v-table>
    </section>
  </v-sheet>
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

const tableWidth = Math.floor(100 / props.columns.length) + '%'


</script>
