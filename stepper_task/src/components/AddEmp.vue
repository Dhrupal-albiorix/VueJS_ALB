<template>
  <div>
    <stepper-design />
  </div>

  <div class="text-center text-capitalize text-h6 mb-3 font-weight-light">
    Personal Details
  </div>

  <v-sheet>
    <v-form ref="form">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              class="custom-input"
              v-model="userdata.user.firstname"
              :rules="fristnameRules"
              label="First name *"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="userdata.user.middlename"
              :rules="fristnameRules"
              label="Middle Name *"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="userdata.user.lastname"
              :rules="fristnameRules"
              label="Last name *"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              class="custom-input"
              v-model="userdata.user.email"
              :error-messages="userdata.error"
              :rules="emailRules"
              label="Email *"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="userdata.user.mobile"
              :rules="mobileRules"
              label="Mobile Number *"
              type="number"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="userdata.user.dob"
              type="date"
              label="Date of Birth *"
              required
              class="date"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-file-input
              label="Upload Image"
              variant="solo-filled"
              class="custom-file-input"
              @change="handleImageUpload"
            ></v-file-input>

            <img
              v-if="userdata.user.img"
              :src="userdata.user.img"
              alt="User Image"
              class="img"
            />
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-textarea
              label="Present Address *"
              @keyup="userdata.chaeck_val()"
              variant="underlined"
              :rules="fristnameRules"
              v-model="userdata.user.adress"
            ></v-textarea>
          </v-col>

          <v-col cols="12" md="6">
            <v-textarea
              label="Present Address *"
              variant="underlined"
              :rules="fristnameRules"
              v-model="userdata.user.copy_adress"
            ></v-textarea>
          </v-col>
        </v-row>

        <v-row>
          <v-checkbox
            label="Copy to Permanent Address"
            v-model="userdata.user.box_val"
            @change="userdata.chaeck_val()"
          ></v-checkbox>
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
              @click="userdata.validate(form, '/BankDetails')"
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

import { ref } from "vue";

const form = ref(null);

const handleImageUpload = (event) => {
  const imageFile = event.target.files[0];
  if (imageFile) {
    const reader = new FileReader();
    reader.onload = (event) => {
      userdata.user.img = event.target.result; // Set the image data URL
    };
    reader.readAsDataURL(imageFile);
  }
};

userdata.edit_user_in_local();
const fristnameRules = [
  (value) => {
    if (value) return true;
    return "This attribute is required";
  },
];

const emailRules = [
  (value) => {
    if (value) return true;

    return "This attribute is required";
  },
  (value) => {
    if (/.+@.+\..+/.test(value)) return true;

    return "This attribute is required";
  },
];
const mobileRules = [
  (value) => {
    if (value) return true;

    return "This attribute is required";
  },
  (value) => {
    const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (phoneRegex.test(value)) return true;

    return "This attribute is required";
  },
];
</script>

<style>
.img {
  width: 80px;
  height: 80px;
  border: 1px solid black;
  border-radius: 50%;
}

input[type="date"]:in-range::-webkit-datetime-edit-year-field,
input[type="date"]:in-range::-webkit-datetime-edit-month-field,
input[type="date"]:in-range::-webkit-datetime-edit-day-field,
input[type="date"]:in-range::-webkit-datetime-edit-text {
  color: transparent;
}
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

