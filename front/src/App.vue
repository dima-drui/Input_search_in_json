<template>
  <v-app>
    <v-main>
      <FormComponent />
      <ListComponents />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import FormComponent from '@/components/FormComponent.vue'
  import ListComponents from '@/components/ListComponents.vue'
</script>
