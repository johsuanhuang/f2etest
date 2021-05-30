<template lang="pug">
  .bg-gray-500.p-24
    .w-full(v-for="(each,index) in status")
      .bg-gray-1200
        .p-8.px-14
          .border-l-4.border-green-200.pl-8 {{each}}
      .border-2.border-gray-900.p-30.flex(v-for="(item,index) in data(each)")
        .max-w-100
          img(:src="item.logo")
        .ml-20.w-full
          .flex.justify-between
            .type(:class="{'text-green-200': each == '進行中'}") {{item.status.type}}
            .date 預計出貨日： {{item.date}}
          .name.py-10 {{item.name}}
        font-awesome-icon.self-center.ml-20.cursor-pointer.text-gray-200(:icon="['fa', 'chevron-right']")
</template>

<script>
// import { SSOApi } from "@/api";

export default {
  name: "BillBlock",
  components: {
  },
  data() {
    return {
      status:['進行中','已完成']
    };
  },
  computed: {
  },
  async created() {},
  async mounted() {
    await this.$store.dispatch("user/getBillInfo");
  },
  methods: {
    data(each){
      if(each == '進行中'){
        // console.log(this.$store.state.user.billDone)
        return this.$store.state.user.billDone;
      }else{
        return this.$store.state.user.billOn;
      }
      //  this.this.$store.state.user.billData;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
