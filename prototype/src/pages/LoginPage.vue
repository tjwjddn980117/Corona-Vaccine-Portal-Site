<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <font-awesome-icon icon="faaddresscard" />
      <lable for = "username">id: </lable>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <lable for = "password">pw: </lable>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>
<script>
  import axios from 'axios';
  export default {
  components: { },
    name: 'LoginPage',
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      submitForm: function(){
        console.log(this.id, this.password);
        var url = 'https://jsonplaceholder.typicode.com/users';
        var data = {
          username: this.username,
          password: this.password
        }
        axios.post(url, data)
        .then(function(response){
          console.log(response);
        })
        .catch(function(error){
          console.log(error);
        })
      }
    },
    created() {}
  }
</script>
<style>
</style>