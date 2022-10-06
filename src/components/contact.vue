<template>
 <div class="hed1">
      <img class="bird" src="@/assets/header.jpg">
</div>
<br><br><br>
  <h2 class ="underline2" v-bind:class="status"> For any query contact us using below option  </h2>
 <button v-bind:enabled="isEnabled"><a style="text-decoration:none;" href="https://alp4.godaddysites.com/">Contact</a></button>
 <p></p>

<div class="alp5">
<p><b><i>Designed and Maintained by KEC - 19ISR044</i></b></p>
</div>
</template>
<script>

export default {
 name: 'App', 
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
.hed1
{
  height: 200%;
}
.bird
 {
   width: 100%;
 }
.underline2
{
  font-style:italic;
  color: rgb(255, 166, 0);
  font-size: 20px;
  font-style:bold;
}
.alp5
{
    padding: 5px;
    margin-top: 20%;
    background:rgb(250, 211, 204);
    color: rgb(250, 7, 7);

}
</style>