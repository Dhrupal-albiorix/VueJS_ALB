<template>
  <div>
    <div>hello word</div>
    <div>
      <div>
        <h2>[HelloWorld.vue]</h2>
        <h3>v-app-bar component</h3>
        <div class="bg-red text-black">
          The v-app-bar component is pivotal to any graphical user interface
          (GUI), as it generally is the primary source of site navigation. The
          app-bar component works great in conjunction with a
          v-navigation-drawer for providing site navigation in your application.
          <br />
          here vuetify classe ---- class="bg-red text-black"
        </div>
        <div>////////////////////////////////////////</div>
        <div>
          <h3>Display</h3>
          <div>
            <div class="d-block pa-2 bg-deep-purple">
              d-block class = "d-block pa-2 bg-deep-purple"
            </div>
            <div class="d-block pa-2 bg-black">
              d-block class = "d-block pa-2 bg-black"
            </div>
          </div>
        </div>
        <div>//////////////////////////////////////</div>
        <div>
          <h3>heading</h3>
          <div class="text-subtitle-2">subtitle class = "text-subtitle-2"</div>
        </div>
      </div>
    </div>
    <div>///////////////////////////////////////////////////////////</div>
    <div>
      <h3>Text</h3>
      <div>
        <div class="text-left">
          <b>class="text-left"</b>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <br />
        <div class="text-center">
          <b>class="text-center"</b>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <br />
        <div class="text-justify">
          <b>class="text-justify"</b>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div>
      ///////////////////////////////////////////////////////////////////
    </div>
    <div>
      <h3>buttons</h3>
      <div>
        <v-btn density="compact" class="bg-black"
          >density="compact" Compact Button</v-btn
        >
        <br />
        <br />
        <v-btn density="comfortable" class="bg-brown-lighten-5"
          >density="comfortable" omfortable Button</v-btn
        >
        <br />
        <br />

        variant
        <br />
        'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain' 'elevated'
        <br />
        Applies a distinct style to the component
        <br /><br />
        <v-btn density="default" class="bg-pink-lighten-5"
          >density="default" - Default Button</v-btn
        >
        <br />
        <br />
        <v-btn
          :loading="loading"
          class="flex-grow-1"
          height="48"
          variant="tonal"
          @click="load"
        >
          button with loader -- script is also required
        </v-btn>

        <br />
        <br />
        <v-btn flat>flat</v-btn>
        <br />
        <br />
        <v-btn outlined>outlined</v-btn>
        <br />
        <br />
        <v-btn elevated>elevated</v-btn>
        <br />
        <br />
        <v-btn depressed>depressed</v-btn>
        <br />
        <br />
        <v-btn depressed>
          <v-icon>mdi-email</v-icon>
          <span>email botton with icon</span>
        </v-btn>
        <br />
        <br />
        <v-btn
          depressed
          elevation="21"
          fab
          outlined
          raised
          rounded
          class="bg-pink-lighten-5"
        >
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </div>
    </div>
    <div>/////////////////////////////////////////////////</div>
    <div>
      <h3>Breakpoints & Visibility</h3>
      <div>
        <div>btn hides if screen size is less or equal to medium</div>
        <v-btn class="hidden-md-and-down" elevation="21"
          >display property of this button depends on screen size</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
