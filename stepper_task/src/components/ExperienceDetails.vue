<template>
  <div>
   <stepper-design />
</div>
  <div>
    <div class="text-center text-capitalize text-h5 mt-3">
      Experience Details
    </div>

    <v-alert
      variant="outlined"
      type="warning"
      prominent
      border="top"
      v-show="!go_to_next"
    >
      please add atlist one record
    </v-alert>

    <v-card-actions class="d-flex justify-end align-center flex-wrap">
      <v-btn
        size="large"
        depressed
        class="bg-red"
        @click="add_edu"
        :disabled="inValid"
      >
        <v-icon class="mr-2">mdi-plus</v-icon>
        <span class="text-capitalize">add Experience</span>
      </v-btn>
    </v-card-actions>

    <v-divider></v-divider>

    <v-table fixed-header>
      <thead>
        <tr>
          <th class="text-center">Company Name</th>
          <th class="text-center">Position</th>
          <th class="text-center">Total Year</th>
          <th class="text-center">Last CTC</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>

      <tbody v-if="userdata.experience_arr.length > 0">
        <tr v-for="(exe, index) in userdata.experience_arr" :key="index">
          <td class="text-center">
            <v-text-field
              class="custom-input"
              v-model="exe.exe_name"
              :readonly="exe.added_data"
              :rules="Rules"
              label="Company Name *"
              required
            ></v-text-field>
          </td>
          <td class="text-center">
            <v-text-field
              class="custom-input"
              v-model="exe.position"
              :readonly="exe.added_data"
              :rules="Rules"
              label="Position *"
              required
            ></v-text-field>
          </td>
          <td class="text-center">
            <v-text-field
              class="custom-input"
              type="number"
              v-model="exe.exe_year"
              :readonly="exe.added_data"
              :rules="Rules"
              label="Total Year *"
              required
            ></v-text-field>
          </td>
          <td class="text-center">
            <v-text-field
              class="custom-input"
              v-model="exe.exe_ctc"
              type="number"
              :readonly="exe.added_data"
              :rules="Rules"
              label="Last CTC *"
              required
            ></v-text-field>
          </td>
          <td class="text-center" v-if="(inValid, exe.added_data == false)">
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
const go_to_next = ref(true);
const _id = ref(0);
function add_edu() {
  addEdu.value++;
  userdata.experience_arr.push({
    id: "",
    exe_name: "",
    position: "",
    exe_year: "",
    exe_ctc: "",
    added_data: false,
  });
  inValid.value = true;
}

const Rules = [
  (value) => {
    if (value) return true;
    return "required";
  },
];

function edu_submit(index) {
  const exe = userdata.experience_arr[index];
  if (
    exe.exe_name !== "" &&
    exe.position !== "" &&
    exe.exe_year !== "" &&
    exe.exe_ctc !== ""
  ) {
    inValid.value = false;
    _id.value++;
    exe.id = _id.value;
    exe.added_data = true;
    userdata.experience_arr.splice(index, 1, { ...exe });
    go_to_next.value = true;
  } else {
    exe.added_data = false;
    inValid.value = true;
  }
}

userdata.edit_user_in_local();

function edu_cancle(index) {
  userdata.experience_arr.splice(index, 1, {
    id: "",
    exe_name: "",
    position: "",
    exe_year: "",
    exe_ctc: "",
    added_data: false,
  });
}

function delete_edu(index) {
  userdata.experience_arr.splice(index, 1);
  inValid.value = false;
}

function edu_edit(index) {
  inValid.value = true;
  userdata.experience_arr[index].added_data = false;
}

function go_to_ExperienceDetails() {
  if (userdata.experience_arr.length > 0) {
    if (
      inValid.value == false &&
      userdata.experience_arr[0].added_data == true
    ) {
      router.push("/CurrentOrganization");
    } else {
      go_to_next.value = false;
    }
  } else {
    go_to_next.value = false;
  }
}
</script>

<style>
</style>    