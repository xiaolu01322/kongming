<template>
  <div>
    我测试一下提交
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted(){
    let params = {
          key:"",
          verify_code: "1234",
        };
     this.$axios.post('/api/user/refresh-captcha',params).then((res=>{
               console.log(res);
          }))
  }
}
</script>

<style>
</style>
