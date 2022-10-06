import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/home.vue";
import course from "@/components/course.vue";
import placement from "@/components/placement.vue";
import faculty from "@/components/faculty.vue";
import Contact from "@/components/contact.vue";
import Regis from "@/components/regis.vue";
import Login from "@/components/login.vue";
import Signup from "@/components/signup.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/course",
    name: "course",
    component: course,
  },
  {
    path: "/placement",
    name: "placement",
    component: placement,
  },
  {
    path: "/faculty",
    name: "faculty",
    component: faculty,
  },

  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/course",
    name: "course",
    component: course,
  },
  {
    path: "/regis",
    name: "Regis",
    component: Regis,
    children:[ 
      {
        path: "/login",
        name: "Login",
        component: Login,
        
      },
      {
        path: "/signup",
        name: "Signup",
        component: Signup,
      }
      ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;