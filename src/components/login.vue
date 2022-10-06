<template>
    <div class="login">
        <img class="logo" src="../assets/signup.jpg"/>
        <h1>LOGIN</h1>
        <div class="register">
                <input type="email" v-model=email name="email" placeholder="Email ID"/>
                <input type="password" v-model=password name="password" placeholder="Password"/>
                <button class="btn" @click="Login">Login</button><br><br>    
                <button class="btn" @click="Logout">Logout</button><br><br>            
        
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        async Login() {
            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(this.email, this.password);
                alert("Logged In Successfully");
            } catch (error) {
                alert(error.code);
            }
        },
        async Logout() {
            try {
                await firebase
                    .auth()
                    .signOut();
                alert("Logged Out Successfully !!");
            } catch (error) {
                alert(error.code);
            }
        }
    },
};
</script>


<style scoped>
.login{
    color:teal;
    
}
.logo{
   border-radius: 100%;   
   width:150px; 
}
.register{
    color: black;
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
    color: rgb(245, 248, 245);
    cursor: pointer;
    border-radius: 21px;
}

</style>