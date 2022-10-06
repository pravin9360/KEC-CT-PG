<template>
    <div class="signup">
        <img class="logo" src="../assets/signup1.jpg"/>
        <h1>SIGNUP</h1>
        <div class="register">
            <input type="email" v-model=email  name="email" placeholder="Email ID" />
            <input type="password" v-model=password name="password" placeholder="Password" pattern="^[A-Za-z]{10}$"/>
            <button class="btn" @click="SignUp">SignUp</button>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue';
import firebase from 'firebase';

export default {
    name:'signup',
   setup() {
        const email = ref("");
        const password = ref("");
        const SignUp = () =>{
            firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then(()=>alert("SignUp Successfull!!"))
                .catch(err => alert(err.code));
            }
            return{
                SignUp,
                email,
                password
            }
    }
          
}
</script>

<style scoped>
.signup{
    color:teal;
}
.logo{
   border-radius: 100%;   
   width:150px; 
}
.register input{
    width: 250px;
    height: 30px;
    padding-left: 15px;
    display: block;
    margin-bottom: 20px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid teal;
}
.btn{
    width: 265px;
    height: 35px;
    background: teal;
    border: 1px  solid teal;
    color: #fff;
    cursor: pointer;
    border-radius: 21px;
}
</style>