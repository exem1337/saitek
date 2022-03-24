<template>
  <div class="container">
    <h3 class="grey-text text-darken-2 headText z-depth-1">
      Редактирование курса
    </h3>
    <div class="card horizontal edit" style="padding: 15px">
      <form style="width: 100%">
        <div class="row" style="margin-bottom: 0">
          <div class="input-field col s12 m12 l6">
            <i class="material-icons prefix">mode_edit</i>
            <textarea
              v-model="course.courseName"
              id="course_name"
              class="materialize-textarea"
            ></textarea>
            <!-- <label for="course_name">Название курса</label> -->
          </div>
          <div class="input-field col s12 m12 l6">
            <i class="material-icons prefix">mode_edit</i>
            <textarea
              v-model="course.courseDescription"
              id="course_description"
              class="materialize-textarea"
            ></textarea>
            <!-- <label for="course_description">Описание курса</label> -->
          </div>
        </div>
        <button
          @submit.prevent="saveChanges"
          class="waves-effect waves-light btn"
          style="background-color: #2f79ee"
        >
          <i class="material-icons left">cloud</i>Сохранить изменения
        </button>
        <a
          class="waves-effect waves-light btn"
          @click="edit = true"
          style="background-color: #2f79ee; margin-left: 15px"
          ><i class="material-icons left">group_add</i>Редактор групп</a
        >
        <button
          @submit.prevent="saveChanges"
          class="waves-effect waves-light btn"
          style="background-color: #2f79ee; margin-left: 15px"
        >
          Добавить тему
        </button>
        <ul>
          <li v-for="theme in course.courseThemes" :key="theme.themeID" class="big-font">
            <div class="card courseCard" style="width: 100%">
              <div
                class="card-content grey-text text-darken-2"
                style="font-weight: 600"
              >
                <span class="card-title" style="font-weight: 600"
                  >{{ theme.name }} Сложность:
                  {{ getDifficuiltyName(theme.difficuilty) }}</span
                >
                <p>
                  Основы программирования на языке C++. Сложность
                  {{ getDifficuiltyName(theme.difficuilty) }}
                </p>
                <router-link to="/themeGrades"
                  ><i
                    v-if="
                      $store.state.userType === 2 || $store.state.userType === 1
                    "
                    class="material-icons edit-icon tooltipped"
                    data-position="top"
                    data-tooltip="Оценки"
                    >person</i
                  ></router-link
                >
                <router-link to="/courseEdit"
                  ><i
                    v-if="
                      $store.state.userType === 2 || $store.state.userType === 1
                    "
                    class="material-icons stats-icon tooltipped"
                    data-position="top"
                    data-tooltip="Редактировать тему"
                    >edit</i
                  ></router-link
                >
                <router-link to="/courseEdit"
                  ><i
                    v-if="
                      $store.state.userType === 2 || $store.state.userType === 1
                    "
                    class="material-icons test-icon tooltipped"
                    data-position="top"
                    data-tooltip="Редактировать тест"
                    >event_note</i
                  ></router-link
                >
              </div>
            </div>
          </li>
        </ul>
      </form>
    </div>
  </div>
  <div v-if="this.edit" class="editor" @click="modalClick">
    <edit-course-group
      class="editGroups"
      @onCloseGroupModal="onCloseGroupModal"
    />
  </div>
  <add-theme-modal v-if="isAddingTheme" :editMode="true" @onSave="onCloseAddThemeModal" />
</template>

<script>
import editCourseGroup from "@/components/courseGroupEdit";
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";
import AddThemeModal from '../components/addThemeModal.vue';
export default {
  components: {
    editCourseGroup,
    AddThemeModal
  },
  setup() {

    const course = {
      courseID: 1,
      courseName: "Основы программирования на языке C++",
      courseDescription: "Это курс по c++",
      courseThemes: [
        {
          name: "Тема 1",
          themeID: 1,
          difficuilty: 1,
        },
        {
          name: "Тема 1",
          themeID: 2,
          difficuilty: 2,
        },
        {
          name: "Тема 1",
          themeID: 3,
          difficuilty: 3,
        },
        {
          name: "Тема 1",
          themeID: 4,
          difficuilty: 4,
        },
        {
          name: "Тема 1",
          themeID: 5,
          difficuilty: 5,
        },
        {
          name: "Тема 2",
          themeID: 6,
          difficuilty: 1,
        },
        {
          name: "Тема 2",
          themeID: 7,
          difficuilty: 2,
        },
        {
          name: "Тема 2",
          themeID: 8,
          difficuilty: 3,
        },
        {
          name: "Тема 2",
          themeID: 9,
          difficuilty: 4,
        },
        {
          name: "Тема 2",
          themeID: 10,
          difficuilty: 6,
        },
      ],
    };

    const edit = ref(false);

    const isAddingTheme = ref(true);

    const getDifficuiltyName = (level) => {
      if (level === 1) return "новичок";
      if (level === 2) return "стажер";
      if (level === 3) return "мастер";
      if (level === 4) return "профессионал";
      if (level === 5) return "эксперт";
    };

    const saveChanges = () => {};

    const onCloseGroupModal = () => {
      edit.value = false;
    };

    const onCloseAddThemeModal = () => {
        isAddingTheme.value = false;
    }

    onMounted(() => {
      var elems = document.querySelectorAll(".material-tooltip");
      elems.forEach((el) => {
        el.parentElement.removeChild(el);
      });
      M.AutoInit();
    });

    return {
      course,
      edit,
      getDifficuiltyName,
      saveChanges,
      onCloseGroupModal,
      isAddingTheme,
      onCloseAddThemeModal
    };
  },
};
</script>

<style lang="scss" >
.courseCard {
  background-color: lighten(#2f79ee, 40%);
}
.input-field .prefix.active {
  color: #2f79ee;
}
.headText {
  position: relative;
  z-index: 1;
  width: fit-content;
  background-color: #fff;
  padding: 15px;
  margin-top: 15px;
  margin-bottom: 0;
  border-radius: 20px 20px 0 0;
}
@mixin icons-stack {
  position: absolute;
  top: 5px;
  color: lighten(#2f79ee, 20%);
  transition: color 0.2s ease;

  &:hover {
    color: darken(#2f79ee, 5%) !important;
  }
}

.edit-icon {
  @include icons-stack;
  right: 5px;
}
.stats-icon {
  @include icons-stack;
  right: 35px;
}
.test-icon {
  @include icons-stack;
  right: 65px;
}
textarea:focus {
  border-bottom: 1px solid #2f79ee !important;
  box-shadow: 0 1px 0 0 #2f79ee !important;
}
.edit {
  position: relative;
  z-index: 2;
  margin-top: 0;
}
.editor {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  overflow: hidden;
}
</style>