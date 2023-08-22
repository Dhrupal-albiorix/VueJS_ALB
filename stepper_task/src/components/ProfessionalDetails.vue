<template>
  <div>
   <stepper-design />
</div>
  <div class="text-center text-capitalize text-h6 mt-3 font-weight-light">
    Professional Details
  </div>

  <v-sheet>
    <v-form ref="form">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              class="custom-input"
              v-model="userdata.profession.designation"
              :rules="Rules"
              label="Designation *"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="userdata.profession.department"
              :rules="Rules"
              label="Department *"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-sheet class="d-flex flex-row align-center justify-center">
              <v-text class="text-center text-capitalize mr-12 ml-3"
                >Experience:
              </v-text>
              <v-select
                :items="items"
                v-model="userdata.profession.years"
                class="mr-12"
                label="Years"
                :rules="Rules"
              ></v-select>
              <v-select
                :items="months"
                v-model="userdata.profession.months"
                label="Months"
                :rules="Rules"
              ></v-select>
            </v-sheet>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              class="custom-input"
              v-model="userdata.profession.location"
              :rules="Rules"
              label="current location *"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-select
              v-model="userdata.profession.selected_skill"
              :items="all_skills"
              :rules="select2"
              label="Skills *"
              multiple
              persistent-hint
            ></v-select>
          </v-col>

          <v-col cols="12" md="6">
            <v-file-input
              label="Upload Resume"
              v-model="userdata.profession.resume"
              elevation="22"
              variant="solo-filled"
              class="custom-file-input"
              @change="handleResumeUpload"
            ></v-file-input>
            <a
              v-if="userdata.profession.resumeLink"
              :href="userdata.profession.resumeLink"
              target="_blank"
            >
              <v-icon class="mr-2">mdi-file-pdf-box</v-icon>
              View Resume
            </a>
          </v-col>
        </v-row>

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

          <v-col
            cols="12"
            md="6"
            class="d-flex flex-row align-center justify-end"
          >
            <v-btn
              depressed
              class="bg-deep-purple"
              @click="userdata.back('/BankDetails')"
            >
              <span>Back</span>
            </v-btn>
            <v-btn
              depressed
              class="bg-deep-purple"
              @click="userdata.validate(form, '/EducationDetails')"
            >
              <span>Next</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { useAppStore } from "../store/app.js";
import StepperDesign from "../components/StepperDesign.vue";
const userdata = useAppStore();
import { ref, reactive } from "vue";
const form = ref(null);
let items = reactive([]);
let months = reactive([]);
let all_skills = reactive(["Angular", "React", "Vue"]);
items = [
  "0 Years",
  "1 Years",
  "2 Years",
  "3 Years",
  "4 Years",
  "5 Years",
  "6 Years",
  "7 Years",
];
months = [
  "0 month",
  "1 month",
  "2 month",
  "3 month",
  "4 month",
  "5 month",
  "6 month",
  "7 month",
  "8 month",
  "9 month",
  "10 month",
  "11 month",
  "12 month",
];
const Rules = [
  (value) => {
    if (value) return true;
     return "This attribute is required";
  },
];
const select2 = [(v) => v.length > 0 || "required"];

const handleResumeUpload = (event) => {
  const resumeFile = event.target.files[0];
  if (resumeFile) {
    const reader = new FileReader();
    reader.onload = (event) => {
      userdata.profession.resumeData = event.target.result; // Store the resume data
      userdata.profession.resumeLink = URL.createObjectURL(resumeFile); // Generate a link for viewing
    };
    reader.readAsDataURL(resumeFile);
  }
};

userdata.edit_user_in_local();
</script>


<style>
.custom-file-input {
  max-width: 200px; /* Adjust this value to your desired width */
  width: 100%;
}
.v-input__prepend {
  display: none !important;
}
.v-messages {
  color: rgb(243, 6, 6) !important;
}
.v-field--error:not(.v-field--disabled) .v-label.v-field-label {
  color: rgb(243, 6, 6) !important;
}
.v-field--focused .v-label.v-field-label,
.v-field--error .v-label.v-field-label,
.v-field--focused {
  color: rgb(38, 6, 243) !important;
}
.v-field--focused .v-field__input {
  color: black;
}
</style>
