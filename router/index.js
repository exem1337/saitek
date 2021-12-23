import VueRouter from "vue-router";
import { createWebHistory, createRouter } from "vue-router";

import Auth from "../src/components/auth";
import notFound from "../src/components/404.vue";
import course from "../src/components/course.vue";
import profile from "../src/components/profile.vue";
import courses from "../src/components/courses.vue";
import courseEditor from "../src/components/editCourse.vue";
import themeGrades from "../src/components/themeGrades.vue";
import adminSettings from "../src/components/adminSettings";
import editRule from "../src/components/editRule";
import about from "../src/components/about";
import test from "../src/components/testTemplate";
import mamdaniForm from "../src/components/mamdaniForm";
import testTemplate from "../src/views/testTemplate";
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
