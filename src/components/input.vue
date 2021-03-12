<template>
    <div>
        <input type="text" class="input-rep" v-model="formData.nameRepo" name="nameRepo" placeholder="Digite o usuário que deseja buscar os repositorios">
        <button class="btn-input" @click.prevent="inputRepo" :disabled="loading">
            <span v-if="loading">Buscando...</span>
            <span v-else>Buscar</span>
        </button>
    </div>
</template>

<script>

import { mapActions } from 'vuex';
export default {
    data() {
        return {
            loading: false,
            formData: {
                nameRepo: ''
            }
        }
    },
    methods: {
        inputRepo() {
            this.loading = true;
            this.getRepositorios(this.formData.nameRepo)
            .catch(error => this.$vToastify.error("Op's repositório não informado ou não localizado!"))
            .finally(() => {
                this.loading = false,
                this.formData.nameRepo = ''
                }
            )
        },
        ...mapActions([
            'getRepositorios'
        ])
    }
}

</script>
