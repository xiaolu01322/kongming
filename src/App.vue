<template>
  <div>
    <nav-com></nav-com>
    <router-view />
  </div>
</template>

<script>
import NavCom from "@/components/nav"
export default {
  name: 'App',
  components: {
    NavCom,
  },
  mounted(){
    // let params = {
    //       key:"",
    //       verify_code: "1234",
    //     };
    //  this.$axios.post('/api/user/refresh-captcha',params).then((res=>{
    //            console.log(res);
    //       }))
  }
}
</script>

<style>
</style>
