<template>
    <div>
        <div class="container">
            <div class="" v-for="(repo, index) in repositorios" :key="index">
                <div v-if="repo != ''" class="card-rep card">
                    <div class="card-body">
                        <div class="col-md-2">
                            <div class="avatar">
                                <img :src="repo.owner.avatar_url" :alt="repo.owner.login" >
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="avatar-text">
                                <div class="row">
                                    <strong>Usuário GitHub:</strong> <p>{{repo.owner.login}}</p>
                                </div>
                                <div class="row">
                                    <strong>Repositorio: </strong> <p>{{repo.name}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="link">
                            <a :href="repo.owner.html_url" target="_blank"><img src="../assets/link-img.png" alt="link" ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            repositorios: state => state.repositorios.items
        })

    }
}
</script>
