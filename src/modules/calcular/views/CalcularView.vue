<template>
    <br>
    <h3>Propiedades computadas</h3>
    <input type="text" v-model="valor">
    {{ valorCalculado  }}
    <ResultadoSection v-if="mostrarElemento" :resultado="valorCalculado"></ResultadoSection>
    <div v-else-if="isNaN(valor)">Escribe un numero para calcular</div>
    <div v-else>Aqui no ha pasado nada</div>
</template>


<script setup>
import { ref, computed } from 'vue';
import ResultadoSection from '../components/ResultadoSection.vue';
const valor = ref('');
const valorCalculado = computed(() => {
    return valor.value * 3
});

const mostrarElemento = computed(()=>{
    return valor.value > 10;
})

</script>

<style scoped>

</style>

