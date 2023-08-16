<template>
  <div>
    <div class="text-center text-capitalize text-h5 mt-3">
      Employee Management System
    </div>

    <v-card-actions class="d-flex justify-end align-center flex-wrap">
      <v-btn size="large" depressed class="bg-deep-purple" @click="addEmp">
        <v-icon class="mr-2">mdi-account-plus </v-icon>
        <span class="text-capitalize">Employee</span>
      </v-btn>
    </v-card-actions>

    <v-card>
      <v-data-table
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="userdata.all_info"
        item-value="name"
        class="elevation-1"
      >
        <template v-slot:item="{ item }">
          <tr>
            <td>
              <img
                v-if="item.selectable[0].img"
                :src="item.selectable[0].img"
                alt="User Image"
                class="img"
              />
            </td>
            <td>name:{{ item.selectable[0].firstname }}</td>
            <td>department:{{ item.selectable[2].department }}</td>
            <td>designation:{{ item.selectable[2].designation }}</td>
            <td>email : {{ item.selectable[0].email }}</td>
            <td>{{ item.selectable[0].mobile }}</td>
            <td>
              <a
                v-if="item.selectable[2].resumeLink"
                :href="item.selectable[2].resumeLink"
                :target="item.selectable[2].resumeLink"
                @click="downloadPdf(item.selectable[2].resumeLink.pdfData)"
              >
                <v-icon class="mr-2">mdi-file-pdf-box</v-icon>
                <v-btn v-if="item.selectable[2].resumeLink" depressed>
                  <v-icon>mdi-download</v-icon>
                  <span>get the file</span>
                </v-btn>
              </a>
            </td>
            <td>
              <v-icon class="mr-2" @click="userdata.edit_user(item.index)"
                >mdi-pencil</v-icon
              >
              <v-icon class="mr-2" @click="userdata.delete_user(item.index)"
                >mdi-delete</v-icon
              >
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script setup>

import router from "@/router";
import { VDataTable } from "vuetify/labs/VDataTable";
import { ref } from "vue";
function addEmp() {
  router.push("/AddEmp");
}

import { useAppStore } from "../store/app.js";
const userdata = useAppStore();

const itemsPerPage = ref(2);

const headers = [
  {
    title: "Profile Picture",
    key: "name",
  },
  { title: "Name", key: "calories" },
  { title: "Department", key: "fat" },
  { title: "Designation", key: "carbs" },
  { title: "Email", key: "protein" },
  { title: "Mobile Number", key: "iron" },
  { title: "Resume", key: "lol" },
  { title: "Action", key: "lol2" },
];

const downloadPdf = (pdfData) => {
  const blob = new Blob([pdfData], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "file.pdf";
  a.click();
  URL.revokeObjectURL(url);
};
</script>

<style>
.img {
  width: 80px;
  height: 80px;
  border: 1px solid black;
  border-radius: 50%;
}
</style>