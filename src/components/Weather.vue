<template>
{{ weatherStore.temperatura }}
</template>

<script setup>
import { useWeather } from '../composables/useWeather';
import { onMounted } from 'vue';
import { usewatherStore } from '../stores/weatherStore';

const weatherStore = usewatherStore();

onMounted(() => {
    useWeather();
})
</script>

<style scoped>

</style>
