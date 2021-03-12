<template>
    <div>
        <div v-for="(repo, index) in repositorios" :key="index">
            <div v-if="repo != ''" class="card-rep">
                card
            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    data: {
        openRepo: false
    },
    computed: {
        ...mapState({
            repositorios: state => state.repositorios.items
        })

    }
}
</script>
