<template lang="pug">
.home.relative(ref="outside")
  Topmenu
  .main.pt-104.pb-50.bg-gray-500
    router-view

</template>

<script>
// @ is an alias to /src
import Topmenu from '@/components/Topmenu.vue';


export default {
  name: 'Home',
  components: {
    Topmenu,
  },
  data() {
    return {

    };
  },
  computed: {
  },
  async mounted() {

  },
  created() {},
  methods: {
  },
};
</script>
