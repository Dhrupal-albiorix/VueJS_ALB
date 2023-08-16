<template>
  <div>
    <div class="row">
      <div>
        <div class="wrapper-progressBar">
          <ul class="progressBar">
            <li :class="active == '/AddEmp' ? 'active' : ''">
              Personal Details
            </li>
            <li :class="active == '/BankDetails' ? 'active' : ''">
              Bank Details
            </li>
            <li :class="active == '/ProfessionalDetails' ? 'active' : ''">
              Professional Details
            </li>
            <li :class="active == '/EducationDetails' ? 'active' : ''">
              Education Details
            </li>
            <li :class="active == '/CurrentOrganization' ? 'active' : ''">
              Experience Details
            </li>
            <li>Current Organization Details</li>
          </ul>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";
console.log("route");
console.log(router.currentRoute.value.fullPath);
const active = ref("");
active.value = router.currentRoute.value.fullPath;

// if (active.value == "/AddEmp") {
//   location.reload();
// }
</script>

<style scoped>
.wrapper-progressBar {
  width: 100%;
}

.progressBar li {
  list-style-type: none;
  float: left;
  width: 16%;
  position: relative;
  text-align: center;
}

.progressBar li:before {
  content: " ";
  line-height: 30px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  display: block;
  text-align: center;
  margin: 0 auto 10px;
  background-color: white;
}

.progressBar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #ddd;
  top: 15px;
  left: -50%;
  z-index: -1;
}

.progressBar li:first-child:after {
  content: none;
}

.progressBar li.active {
  color: #9c27b0;
}

.progressBar li.active:before {
  border-color: #9c27b0;
  background-color: #9c27b0;
}

.progressBar li.active:after {
  background-color: #9c27b0;
}
</style>