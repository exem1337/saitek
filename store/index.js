import { createStore } from 'vuex'

export default createStore ({
    state() {
        return {
            logged: true,
            userType: 2, // 0 - Студент / 1 - преподаватель / 2 - эксперт

            fizlID: 0,
            groupId: -1,
            contractID: -1,
            facultyId: -1,
            bgRotation: 0
        }
    },
    mutations: {
        login(state) {
            state.logged = true
            state.userType = 2
            console.log("login")
        },
        logout(state) {
            state.userType = 0
            state.logged = false
            console.log("logout")
        }
    }

})
