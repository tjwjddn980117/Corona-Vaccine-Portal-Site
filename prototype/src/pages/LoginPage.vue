<template>
  <form v-on:submit.prevent="submitForm">
<<<<<<< HEAD
    <div style="padding-top:10%;">
      <h1 class="login_title">COFO</h1>
      <lable for="username"> </lable>
      <input class="textinput" id="username" type="text" v-model="username" placeholder="아이디를 입력하세요">
      <br>
      <lable for="password"> </lable>
      <input class="textinput" id="password" type="password" v-model="password" placeholder="비밀번호를 입력하세요">
      <br>
      <button type="submit" v-on:submit.prevent="submitForm" class="login"> 로그인</button>
      <button type="submit" class="login"> 회원가입</button>
      <button type="submit" class="login"> 계정 찾기</button>
    </div>
    <!-- <div>
      <button type="submit"><i class="addBtn fas fa-user-plus" aria-hidden="true"></i>  구글로 로그인</button>
    </div> -->
    <div>
      <!-- <input type="checkbox" id ="login_check" value="로그인 유지" v-model="loginCheck">
      <label for="login_check" style="fontsize:">로그인유지</label> -->
=======
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
      <input type="checkbox" id ="login_check" v-model="loginCheck">
      <label for="login_check">로그인유지</label>
      <button type="submit">비밀번호 찾기</button>
      
>>>>>>> 8dba1ebb1525f2da3b3b75ef7e4c73457d5d870e
    </div>
  </form>
</template>
<script>
  import axios from 'axios';
  export default {
<<<<<<< HEAD
    components: {},
=======
  components: { },
>>>>>>> 8dba1ebb1525f2da3b3b75ef7e4c73457d5d870e
    name: 'LoginPage',
    data() {
      return {
        username: '',
        password: '',
<<<<<<< HEAD
        loginCheck: '',
      }
    },
    methods: {
      submitForm: function () {
=======
        loginCheck : '',
      }
    },
    methods: {
      submitForm: function(){
>>>>>>> 8dba1ebb1525f2da3b3b75ef7e4c73457d5d870e
        console.log(this.username, this.password);
        var url = 'https://jsonplaceholder.typicode.com/users';
        var data = {
          username: this.username,
          password: this.password
        }
        axios.post(url, data)
<<<<<<< HEAD
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
=======
        .then(function(response){
          console.log(response);
        })
        .catch(function(error){
          console.log(error);
        })
>>>>>>> 8dba1ebb1525f2da3b3b75ef7e4c73457d5d870e
      }
    },
    created() {}
  }
</script>
<style>
<<<<<<< HEAD
  .login_title {
    color: #adc9ff;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
    font-size: 100px;
    margin-bottom: 10px;
  }

  body {
    text-align: center;
    background-color: #F6F6F8;
  }

  .textinput {
    background: rgb(208, 241, 255);
    border-radius: 50px;
    height: 0.8cm;
    border-style: groove;
    width: 300px;
    margin-bottom: 12px;
    font-size: 13px;
    border: 0px;
    text-indent:15px;
  }

  button {
    border-style: groove;
    border-radius: 50px;
    margin-top: 5px;
    height: 0.5cm;
    border: 0;
    outline: 0;
    background-color: #f6f6f8;
    font-size: 19px;

  }
  .register{
    font-family: "ng", 'BMJUA_ttf';
  }
  .login {
    margin-left: 16px;
    margin-right: 16px;
    font-family: "ng", 'BMJUA_ttf';
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }

  label {
    text-align: left;
  }

  @font-face {
    font-family: "ng";
    src: url(./BMJUA_ttf.ttf);
  }

  h1 {
    font-family: "ng", 'BMJUA_ttf';
=======
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
>>>>>>> 8dba1ebb1525f2da3b3b75ef7e4c73457d5d870e
  }
</style>