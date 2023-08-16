
<template>
  <v-sheet
    width="300"
    class="pa-4 text-center mx-auto mt-12 mb-12"
    elevation="12"
    rounded="lg"
  >
    <v-btn color="primary" dark @click="userdata.openform">
      <v-icon left>mdi-plus</v-icon> Add New User
    </v-btn>

    <v-dialog v-model="userdata.getform">
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
  </v-sheet>

  <div class="pa-4 mt-12 mb-12 d-flex flex-row align-center justify-center">
    <input
      type="text"
      v-model="userdata.searchText"
      placeholder="Search"
      @keyup="userdata.search"
      class="search-input"
    />
  </div>

  <v-sheet
    class="pa-4 mt-12 mb-12 d-flex flex-row align-center justify-center"
    rounded="lg"
  >
    <v-table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Email</th>
          <th>selected option</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in userdata.users_arr" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.Name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.select }}</td>
          <td class="d-flex flex-row align-center flex-wrap xs12 sm6 xs4">
            <v-btn
              depressed
              @click="userdata.edit(item, index)"
            >
              <v-icon>mdi-pencil</v-icon>
              <span>edit</span>
            </v-btn>

            <v-btn depressed @click="userdata.delete(index)">
              <v-icon>mdi-delete</v-icon>
              <span>delete</span>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-sheet>
</template>


<script setup>
import { useAppStore } from "../store/app.js";
import { ref } from "vue";
const form = ref(null);
const userdata = useAppStore();
</script>