import { defineStore } from "pinia"
import { ref } from "vue"

export const useRegistrarStore = defineStore('registrar',() => {
    const nombre = ref('');
    const email = ref('');
    const guardarRegistro = (nombreFormilario, emailFormulario) => {
        nombre.value = nombreFormilario;
        email.value = emailFormulario;
    }
    return {nombre, email, guardarRegistro}
})