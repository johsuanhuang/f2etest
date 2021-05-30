<template lang="pug">
  .px-6.text-left
    h1.text-24.mb-8.ml-27 訂單狀態
    .pay-card.h-auto.shadow
      BillBlock

</template>

<script>

import BillBlock from '@/components/BillBlock.vue';



export default {
  name: 'Billing',
  components: {
    BillBlock,
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
