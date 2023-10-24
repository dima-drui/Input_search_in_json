<template>
    <v-container>
        <v-table>
            <thead>
            <tr>
                <th class="text-left">
                    email
                </th>
                <th class="text-left">
                    number
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="(item, index) in usersStore.list"
                :key="index"
            >
                <td>{{ item.email }}</td>
                <td>{{ item.number }}</td>
            </tr>
            </tbody>
        </v-table>
    </v-container>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/store/users';

const usersStore = useUsersStore()

</script>
