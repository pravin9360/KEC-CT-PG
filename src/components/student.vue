<template>
 <p></p>
 <button v-bind:enabled="isEnabled"><a style="text-decoration:none;" href="https://kongu.ac.in/docs/student/Msc-SS.pdf">student details</a></button>

<p></p>
<b><a style="text-decoration:none;" href="https://results.pythonanywhere.com/">click hear</a></b> check SEM results.
<br><br><br>
 <div class='login'>
    <h5 v-if="loginValue.email == 0">Enter E-Mail ID</h5>
    <h5 v-else-if="loginValue.password==0">Enter Password</h5>
    <h5 v-else-if="loginValue.evalid!=0">Invalid Email or Password</h5>

    <form @submit="validateform">
    <br><input type="email" placeholder="E-Mail ID" v-model=loginValue.email><br><br><br>
        <input type="password" placeholder="Password" v-model=loginValue.password><br><br><br>
        <input type="submit" v-on:click="submit='logged'" value='Login'>
    </form>
  </div>
  
<div class="alp4">
<p><b><i>Designed and Maintained by KEC - 19ISR044</i></b></p>
</div>
</template>
<script>
export default {
name: 'App',
  data(){
    return{
    loginValue:{
    email:'',
    password:'',
    evalid: ''
  }
  }
},
methods:{
  validateform(event)
  {
    if(this.loginValue.email=="pravinal.19msc@kongu.edu" && this.loginValue.password=="pravinal")
    {
     alert("Logged In Successfully")
    }
    else
    {
      this.loginValue.evalid='error'
    }
    event.preventDefault();
  }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.login
{
    text-align: center;
    color: rgb(250, 7, 7);
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 20px;
    list-style-type: none;
}  
.alp4
{
    padding: 5px;
    margin-top: 10%;
    background:rgb(250, 211, 204);
    color: rgb(250, 7, 7);


}
</style>