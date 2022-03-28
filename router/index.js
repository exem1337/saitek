import VueRouter from "vue-router";
import { createWebHistory, createRouter } from "vue-router";

import Auth from "../src/views/auth.vue";
import notFound from "../src/views/404.vue";
import course from "../src/views/course.vue";
import profile from "../src/views/profile.vue";
import courses from "../src/views/courses.vue";
import courseEditor from "../src/views/editCourse.vue";
import themeGrades from "../src/views/themeGrades.vue";
import adminSettings from "../src/views/adminSettings";
import editRule from "../src/components/editRule";
import about from "../src/views/about";
import test from "../src/views/testTemplate";
import mamdaniForm from "../src/views/mamdaniForm";
import testTemplate from "../src/views/testTemplate";
import editThemeTest from "../src/views/editThemeTest";
const routes = [
  {
    path: "/test",
    name: "test",
    component: testTemplate,
  },
  {
    path: "/mamdani",
    name: "mamdani",
    component: mamdaniForm,
  },
  {
    path: "/",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/:catchAll(.*)",
    component: notFound,
  },
  {
    path: "/course",
    name: "course",
    component: course,
  },
  {
    path: "/profile",
    name: "myProfile",
    component: profile,
  },
  {
    path: "/courses",
    name: "myCourses",
    component: courses,
  },
  {
    path: "/courseEdit",
    name: "editCourse",
    component: courseEditor,
  },
  {
    path: "/themeGrades",
    name: "themeGrades",
    component: themeGrades,
  },
  {
    path: "/adminSettings",
    name: "adminSettings",
    component: adminSettings,
  },
  {
    path: "/editRule",
    name: "editRule",
    component: editRule,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/testTemplate",
    name: "testTemplate",
    component: test,
  },
  {
    path: "/testEdit",
    name: "testEdit",
    component: editThemeTest
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
