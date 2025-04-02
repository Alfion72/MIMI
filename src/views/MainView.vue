<template>
    <Heder :mensaje="texto"></Heder>
    <div class="container">
        <Sidebar></Sidebar>
        <div class="content">
            <input type="text" v-model="texto">
            {{ texto }}
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
import Heder from '@/components/Heder.vue';
import { ref } from 'vue';
const texto = ref('');
</script>

<style>
.container {
    display: flex;
}

.content {
    flex: 1;
    padding: 20px;
}
</style>
