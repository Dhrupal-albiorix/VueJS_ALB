<template>
  <div>
   <stepper-design />
</div>
  <div class="text-center text-capitalize text-h5 mt-3">Bank Details</div>

  <v-sheet>
    <v-form ref="form">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              class="custom-input"
              v-model="userdata.bank.bank_name"
              :rules="bank_nameRules"
              label="Bank Name *"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="userdata.bank.bank_acc_name"
              :rules="bank_acc_nameRules"
              label="Account Name *"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              class="custom-input"
              type="number"
              v-model="userdata.bank.bank_acc_no"
              :rules="bank_acc_noRules"
              label="Bank Account Number *"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="userdata.bank.bank_ifsc"
              :rules="bank_ifscRules"
              label="IFSC Code  *"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Aadhaar Card Number *"
              :rules="bank_acc_noRules"
              v-model="userdata.bank.aadhaar"
              type="number"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              label="PAN Card Number *"
              :rules="bank_nameRules"
              v-model="userdata.bank.pan"
            ></v-text-field>
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
              @click="userdata.back('/AddEmp')"
            >
              <span>Back</span>
            </v-btn>
            <v-btn
              depressed
              class="bg-deep-purple"
              @click="userdata.validate(form, '/ProfessionalDetails')"
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
const userdata = useAppStore();
import StepperDesign from "../components/StepperDesign.vue";
import { ref } from "vue";
const form = ref(null);
userdata.edit_user_in_local();
// const bank_nameRules = [
//   (value) => {
//     if (value) return true;
//     return "required";
//   },
// ];

// const bank_acc_nameRules = [
//   (value) => {
//     if (value) return true;
//     return "required";
//   },
// ];
// const bank_ifscRules = [
//   (value) => {
//     if (value) return true;
//     return "requred.";
//   },
//   (value) => {
//     const phoneRegex = /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/g;
//     if (phoneRegex.test(value)) return true;
//     return "Not valid.";
//   },
// ];
// const bank_acc_noRules = [
//   (value) => {
//     if (value) return true;
//     return "required";
//   },
//   (value) => {
//     const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
//     if (phoneRegex.test(value)) return true;
//     return "Not valid";
//   },
// ];
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
