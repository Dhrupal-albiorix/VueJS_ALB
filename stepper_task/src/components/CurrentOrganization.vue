<template>
  <div>
    <stepper-design />
  </div>
  <div class="text-center text-capitalize text-h6 mt-3 font-weight-light">
    Current Organization Details
  </div>
  <div>
    <v-sheet>
      <v-form ref="form">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="userdata.current_org.join_date"
                :rules="dateRules"
                type="date"
                label="joining date *"
                required
                class="date"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="userdata.current_org.next_date"
                :rules="dateRules"
                type="date"
                label="Next Appraisal Date  *"
                required
                class="date"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="userdata.current_org.current_ctc"
                :rules="mobileRules"
                label="Current CTC  *"
                type="number"
                required
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
                @click="userdata.back('/ExperienceDetails')"
              >
                <span>Back</span>
              </v-btn>
              <v-btn
                v-if="!userdata.for_update"
                depressed
                class="bg-deep-purple"
                @click="userdata.submitAll(form, '/')"
              >
                <span>submit</span>
              </v-btn>
              <v-btn
                v-else
                depressed
                class="bg-deep-purple"
                @click="userdata.updateAll()"
              >
                <span>submit updates</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-sheet>
  </div>
</template>

<script setup>
import { useAppStore } from "../store/app.js";
import StepperDesign from "../components/StepperDesign.vue";
const userdata = useAppStore();
import { ref } from "vue";
const form = ref(null);
userdata.edit_user_in_local();
const dateRules = [
  (value) => {
    if (value) return true;
    return "This attribute is required";
  },
];

const mobileRules = [
  (value) => {
    if (value) return true;

    return "This attribute is required";
  },
];
</script>

<style>
</style>