<template>
    <Heder></Heder>
    <div class="container">
        <Sidebar></Sidebar>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
import Heder from '@/components/Heder.vue';
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
