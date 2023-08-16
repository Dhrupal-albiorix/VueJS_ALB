<template>
  <v-dialog>
    <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog
          transition="dialog-top-transition"
          width="auto"
          style="height: 700px"
        >
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props">open form</v-btn>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <v-card-text>
                <v-sheet
                  width="300"
                  class="pa-4 text-center mx-auto mt-12 mb-12"
                  elevation="12"
                  rounded="lg"
                >
                  <v-form ref="form">
                    <v-text-field
                      v-model="userdata.user.Name"
                      :counter="10"
                      :rules="userdata.nameRules"
                      label="Name"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="userdata.user.email"
                      :rules="userdata.emailRules"
                      label="email"
                      required
                    ></v-text-field>

                    <v-select
                      v-model="userdata.user.select"
                      :items="userdata.items"
                      :rules="[(v) => !!v || 'Item is required']"
                      label="Item"
                      required
                    ></v-select>

                    <v-checkbox
                      v-model="userdata.user.checkbox"
                      :rules="[(v) => !!v || 'You must agree to continue!']"
                      label="Do you agree?"
                      required
                    ></v-checkbox>

                    <div class="d-flex flex-column">
                      <v-btn
                        v-if="userdata.isEdit == false"
                        color="success"
                        class="mt-4"
                        block
                        @click="userdata.validate(form)"
                      >
                        submit
                      </v-btn>

                      <div v-else>
                        <v-btn
                          color="success"
                          class="mt-4"
                          block
                          @click="userdata.update(form)"
                        >
                          update
                        </v-btn>
                        <v-btn
                          color="success"
                          class="mt-4"
                          block
                          @click="userdata.cancle()"
                        >
                          cancle
                        </v-btn>
                      </div>

                      <v-btn
                        color="error"
                        class="mt-4"
                        block
                        @click="userdata.reset(form)"
                      >
                        Reset Form
                      </v-btn>
                    </div>
                  </v-form>
                </v-sheet>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn variant="text" @click="isActive.value = false"
                  >Close</v-btn
                >
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </v-dialog>
</template>

<script setup>
import { useAppStore } from "../store/app.js";
import { ref } from "vue";
const form = ref(null);
const userdata = useAppStore();
</script>
