<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="https://github.githubassets.com/images/modules/site/icons/footer/github-logo.svg"> -->
    <img alt="Vue logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsivHbZaqfdk5MWEQCaNOvdcB8A6fvw-dO6A&usqp=CAU">
    <Repositorio msg="Bem vinde a seus repositórios!"/>
    <Input />
    <Card />
  </div>
</template>

<script>
// @ is an alias to /src
// import 'bootstrap';
import Repositorio from '@/components/Repositorios.vue';
import Input from '@/components/input';
import Card from '@/components/card';

import { mapActions, mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    Repositorio,
    Input,
    Card
  },
  // computed: {
  //   ...mapState({
  //     repositorios: state => state.repositorios.items
  //   })
  // },
}
</script>
