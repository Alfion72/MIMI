<template>
    <div class="heder">
        {{ mensajeRecibido }}<Weather></Weather>
    </div>

</template>

<script setup> 
import Weather from './Weather.vue';
import { defineProps, ref, watch } from 'vue';
const props = defineProps(['mensaje'])
const mensajeRecibido = ref (props.mensaje);
watch(() => props.mensaje, (newValue) => {
    mensajeRecibido.value = newValue;
})
</script>

<style scoped>
.heder{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    top: 0;
    right: 0;
    left: 0;
    background-color: rgb(51, 45, 45);
    color: white;
}
.h3{
    margin: 0;
}
</style>

