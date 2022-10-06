<template>
<div class="main">
    <p><img src="@/assets/kongu.jpg">KONGU ENGINEERING COLLEGE </p>
</div>

<div class="main1">
    <p>DEPARTMENT OF COMPUTER TECHNOLOGY - PG</p>
</div>

<div class="main2">
     <ul>
         <li> <router-link style="text-decoration:none;" to="/">HOME </router-link> </li>
         <li> <router-link style="text-decoration:none;" to="/course">COURSE </router-link> </li>
         <li> <router-link style="text-decoration:none;" to="/placement">PLACEMENT OFFERS</router-link> </li>
         <li> <router-link style="text-decoration:none;" to="/faculty">FACULTY DETAILS </router-link> </li>
         <li> <router-link style="text-decoration:none;" to="/regis">STUDENT DETAILS </router-link> </li>
         <li> <router-link style="text-decoration:none;" to="/contact">CONTACT </router-link> </li>
     </ul>
</div>
  <router-view />
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
.body
{
  background-color:rgb(14, 1, 14);
}

.main
{
  padding: 10px;
    color: rgb(8, 0, 0);
background-image: linear-gradient( rgb(255, 42, 5),#abcc32);  
  font-weight: 900;
  top: 20px;
  height: 2%;
  
}
.main1
{
  padding: 10px;
background-image: linear-gradient( rgb(255, 42, 5),#abcc32);  
  color: rgb(8, 0, 0);
  font-weight: 900;
  top: 0px
}
.main2
{
  padding: 10px;
background-image: linear-gradient( rgb(255, 42, 5),#abcc32);  
}
.main2 ul
{
  text-decoration: none;
  list-style-type: none;
  display: inline-flex;
}
.main2 ul li
{
  text-decoration: none;
  padding-right: 50px;
  color: rgb(156, 245, 12);
  font-weight: 700;
  text-decoration-color: azure;
}

</style>