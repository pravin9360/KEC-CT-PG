<template>
<p></p>
 <button v-bind:enabled="isEnabled"><a style="text-decoration:none;" href="https://kongu.ac.in/docs/student/Msc-SS.pdf">student details</a></button>

<p></p>
<b><a style="text-decoration:none;" href="https://results.pythonanywhere.com/">click hear</a></b> check SEM results.
<br><br><br>
  <div class="auth">

    <authenticlink/>
  </div>
    <router-view/>
    <div class="alp4">
<p><b><i>Designed and Maintained by KEC - 19ISR044</i></b></p>
</div>
</template>
<script>
  import authenticlink from "./authlink.vue"
export default{
  name:'Regis',
  components: {
    authenticlink
  }
}
</script>
<style>
.auth
{
    color: red;
    background: black;
}
.alp4
{
    padding: 5px;
    margin-top: 10%;
    background:rgb(250, 211, 204);
    color: rgb(250, 7, 7);


}
</style>
