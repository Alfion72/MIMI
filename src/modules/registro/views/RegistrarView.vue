<template>
    <div>
        <h2>Formulario de registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="form">
                <label for="nombre">Nombre</label>
                <Field type="text" name="nombre" id="nombre" placeholder="ingrese se nombre"/>
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
            <div class="form">
                <label for="correo">Correo</label>
                <Field type="email" name="email" id="correo" placeholder="ingrese se email"/>
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
            <div class="form">
                <button type="submit">Registrar</button>
            </div>
        </Form>
    </div>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationSchema';

const onSubmit = () => {
    console.log('Se ha enviado el formulario');
}
</script>


<style>
.form {
    margin-bottom: 10px;
}
</style>

