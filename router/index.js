import VueRouter from "vue-router";
import { createWebHistory, createRouter } from "vue-router";

import Auth from '../src/components/auth';
import notFound from '../src/components/404.vue';
import course from '../src/components/course.vue';
import profile from '../src/components/profile.vue';
import courses from '../src/components/courses.vue';
import courseEditor from '../src/components/editCourse.vue'
import themeGrades from '../src/components/themeGrades.vue'
import adminSettings from '../src/components/adminSettings'
import editRule from '../src/components/editRule'

const routes = [
    {
        path: '/',
        name: "Auth",
        component: Auth
    },
    {
        path: "/:catchAll(.*)",
        component: notFound,
    },
    {
        path: "/course",
        name: "course",
        component: course
    },
    {
        path: "/profile",
        name: "myProfile",
        component: profile
    },
    {
        path: "/courses",
        name: "myCourses",
        component: courses
    },
    {
        path: "/courseEdit",
        name: "editCourse",
        component: courseEditor
    },
    {
        path: "/themeGrades",
        name: "themeGrades",
        component: themeGrades
    },
    {
        path: "/adminSettings",
        name: "adminSettings",
        component: adminSettings
    },
    {
        path: "/editRule",
        name: "editRule",
        component: editRule
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
