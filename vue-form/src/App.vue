<template>
  <form v-on:submit.prevent="submitForm">
    <header>
      <h1>CoPo</h1>
    </header>
    <div>
      <lable for = "username">id: </lable>
      <input id="username" type="text" v-model="username" placeholder="아이디를 입력하세요">
    </div>
    <div>
      <lable for = "password">pw: </lable>
      <input id="password" type="password" v-model="password" placeholder="비밀번호를 입력하세요">
    </div>
    <div>
      <button type="submit" v-on:submit.prevent="submitForm"><i class="addBtn fas fa-sign-in-alt" aria-hidden="true"></i>  로그인</button>
    </div>
    <div>
      <button type="submit"><i class="addBtn fas fa-handshake" aria-hidden="true"></i>  게스트 로그인</button>
    </div>
     <div>
      <button type="submit"><i class="addBtn fas fa-user-plus" aria-hidden="true"></i>  회원가입</button>
    </div>
    <div>
      <input type="checkbox" id ="login_check" value="로그인 유지" v-model="loginCheck">
      <label for="login_check">로그인유지</label>
      <button type="submit">비밀번호 찾기</button>
      
    </div>
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
        loginCheck : '',
      }
    },
    methods: {
      submitForm: function(){
        console.log(this.username, this.password);
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
  body{
    text-align: center;
    background-color: #F6F6F8;
  }
  input{
    background : rgb(192, 235, 255);
    border-radius: 50px;
    height: 0.5cm;
    border-style: groove;
    width: 200px;
  }
  button{
    border-style: groove;
    border-radius: 50px;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }
  h1{
    color: #adc9ff;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
  }
  label{
    text-align: left;
  }
</style>