<template>
  <div>
    <stepper-design />
  </div>
  <div>
    <div class="text-center text-capitalize text-h6 mt-3 font-weight-light">
      Education Details
    </div>
    <div class="d-flex justify-end align-center flex-wrap width">
      <v-alert dismissible type="warning" v-show="!go_to_next">
        please add atlist one record
      </v-alert>
    </div>

    <v-card-actions class="d-flex justify-end align-center flex-wrap">
      <v-btn
        size="large"
        depressed
        class="bg-red"
        @click="add_edu"
        :disabled="inValid"
      >
        <v-icon class="mr-2">mdi-plus</v-icon>
        <span class="text-capitalize">add Education</span>
      </v-btn>
    </v-card-actions>

    <v-divider></v-divider>

    <v-table fixed-header>
      <thead>
        <tr>
          <th class="text-center">Education Name</th>
          <th class="text-center">University Name</th>
          <th class="text-center">Result</th>
          <th class="text-center">Year Of Passing</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>

      <tbody v-if="userdata.education_arr.length > 0">
        <tr v-for="(edu, index) in userdata.education_arr" :key="index">
          <td class="text-center">
            <v-text-field
              ref="edu_name"
              class="custom-input"
              v-model="edu.edu_name"
              :readonly="edu.added_data"
              :rules="Rules"
              label="Education Name *"
              required
            ></v-text-field>
          </td>
          <td class="text-center">
            <v-text-field
              class="custom-input"
              v-model="edu.uni_name"
              :readonly="edu.added_data"
              :rules="Rules"
              label="University Name *"
              required
            ></v-text-field>
          </td>
          <td class="text-center">
            <v-text-field
              class="custom-input"
              v-model="edu.edu_result"
              :readonly="edu.added_data"
              :rules="Rules"
              label="Result *"
              required
            ></v-text-field>
          </td>
          <td class="text-center">
            <v-text-field
              class="custom-input"
              v-model="edu.pass_year"
              type="number"
              :readonly="edu.added_data"
              :rules="Rules"
              label="Year Of Passing *"
              required
            ></v-text-field>
          </td>
          <td class="text-center" v-if="(inValid, edu.added_data == false)">
            <v-icon class="mr-2" @click="edu_submit(index)"
              >mdi-checkbox-marked</v-icon
            >
            <v-icon class="mr-2" @click="edu_cancle(index)">mdi-alpha-x</v-icon>
            <v-icon class="mr-2" @click="delete_edu(index)">mdi-delete</v-icon>
          </td>

          <td class="text-center" v-else>
            <v-icon class="mr-2" @click="edu_edit(index)">mdi-pencil</v-icon>
            <v-icon class="mr-2" @click="delete_edu(index)">mdi-delete</v-icon>
          </td>
        </tr>
      </tbody>

      <tbody v-else>
        <tr>
          <td colspan="5" class="text-center text-capitalize text-h6 mt-3">
            No records
          </td>
        </tr>
      </tbody>
    </v-table>

    <v-divider></v-divider>

    <v-row>
      <v-col
        cols="12"
        md="6"
        class="d-flex flex-row align-center justify-start"
      >
        <v-btn depressed @click="userdata.go_to_List()">
          <span>Back To List</span>
        </v-btn>
      </v-col>

      <v-col cols="12" md="6" class="d-flex flex-row align-center justify-end">
        <v-btn
          depressed
          class="bg-deep-purple"
          @click="userdata.back('/ProfessionalDetails')"
        >
          <span>Back</span>
        </v-btn>
        <v-btn
          depressed
          class="bg-deep-purple"
          @click="go_to_ExperienceDetails()"
        >
          <span>Next</span>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useAppStore } from "../store/app.js";
import StepperDesign from "../components/StepperDesign.vue";
const userdata = useAppStore();
import { ref } from "vue";
import router from "@/router";
let inValid = ref(false);
const addEdu = ref(0);
const edu_name = ref("");
const go_to_next = ref(true);
const _id = ref(0);
function add_edu() {
  addEdu.value++;
  userdata.education_arr.push({
    id: "",
    edu_name: "",
    uni_name: "",
    edu_result: "",
    pass_year: "",
    added_data: false,
  });
  inValid.value = true;
}
userdata.edit_user_in_local();
const Rules = [
  (value) => {
    if (value) return true;
    return "This attribute is required";
  },
];

function edu_submit(index) {
  const edu = userdata.education_arr[index];
  if (
    edu.edu_name !== "" &&
    edu.uni_name !== "" &&
    edu.edu_result !== "" &&
    edu.pass_year !== ""
  ) {
    inValid.value = false;
    _id.value++;
    edu.id = _id.value;
    edu.added_data = true;
    userdata.education_arr.splice(index, 1, { ...edu });
    go_to_next.value = true;
  } else {
    edu.added_data = false;
    inValid.value = true;
  }
}

function edu_cancle(index) {
  userdata.education_arr.splice(index, 1, {
    id: "",
    edu_name: "",
    uni_name: "",
    edu_result: "",
    pass_year: "",
    added_data: false,
  });
}

function delete_edu(index) {
  userdata.education_arr.splice(index, 1);
  inValid.value = false;
}

function edu_edit(index) {
  inValid.value = true;
  userdata.education_arr[index].added_data = false;
}

function go_to_ExperienceDetails() {
  if (userdata.education_arr.length > 0) {
    if (
      inValid.value == false &&
      userdata.education_arr[0].added_data == true
    ) {
      router.push("/ExperienceDetails");
    } else {
      go_to_next.value = false;
    }
  } else {
    go_to_next.value = false;
  }
}
</script>

<style scope>
.width {
  width: 30%;
}
</style>    