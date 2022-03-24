<template>
  <div class="add-theme">
    <div class="add-theme-wrapper">
      <h3 class="grey-text text-darken-2 headText z-depth-1">
        {{ editMode ? "Редактирование темы" : "Добавление темы" }}
      </h3>
      <div
        class="card horizontal"
        style="transform: translateY(-10px); z-index: 3"
      >
        <div class="theme-edit-wrapper">
          <div class="basic-info">
            <div class="input-field">
              <i class="material-icons prefix">mode_edit</i>
              <textarea
                v-model="course.courseName"
                id="course_name"
                class="materialize-textarea"
              ></textarea>
              <!-- <label for="course_name">Название курса</label> -->
            </div>
            <div class="input-field">
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
            class="waves-effect waves-light btn"
            style="background-color: #2f79ee"
          >
            {{ editMode ? "Поменять файл" : "Прикрепить файл" }}
          </button>
          <button
            class="waves-effect waves-light btn btn-save"
            style="background-color: #2f79ee"
            @click="onSave"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["editMode"],
  emits: ["onSave"],
  setup(props, {emit}) {
    const course = {
      courseID: 1,
      courseName: "Основы программирования на языке C++",
      courseDescription: "Это курс по c++",
    };

    const onSave = () => {
        emit('onSave');
    }

    return {
      course,
      onSave
    };
  },
};
</script>

<style lang="scss" scoped>
.add-theme {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  backdrop-filter: blur(3px);

  display: flex;
  justify-content: center;
  align-items: center;

  .add-theme-wrapper {
    width: 1000px;

    .theme-edit-wrapper {
      width: 100%;

      .basic-info {
        display: flex;
        justify-content: space-around;
        width: 100%;
      }

      .btn {
        margin-left: 50px;
        margin-bottom: 25px;
      }

      .btn-save {
        position: absolute;
        bottom: 0;
        right: 25px;
      }
    }
  }
}

textarea {
  width: 350px !important;
}
</style>