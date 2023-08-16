<template>
  <div>
    <br />
    <br />
    <br />
    <div>
      ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    </div>
    <h2>[CustomActionCard.vue]</h2>
    <div>
      <h3>v-card with action</h3>
      <div>
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover
          ></v-img>

          <v-card-title> title of card </v-card-title>

          <v-card-subtitle> subtitle of card </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text"> explanation </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                <div>
                  <b>card class="mx-auto"</b>
                  margin-x: auto". The "mx" part refers to the horizontal axis
                  (left and right margins), and "auto" is a value for the margin
                  property. Setting the left and right margins to "auto" will
                  horizontally center the element within its container.
                </div>

                <div>
                  <b>v-spacer</b>
                  v-spacer is a component used for creating flexible space
                  within the layout of a Vue.js application. It's a convenient
                  way to add empty space or gaps between other components to
                  achieve proper spacing and alignment. The v-spacer component
                  takes no content or attributes; it is used solely for creating
                  space.
                </div>

                <div>
                  <b>v-card-actions></b>
                  v-card-actions> is a component used to display actions or
                  buttons at the bottom of a v-card> component. It is typically
                  used to place buttons, icons, or other interactive elements
                  that are related to the content within the card.
                </div>

                <div>
                  <b>v-expand-transition></b>
                  v-expand-transition> is a built-in transition component that
                  provides a smooth animation effect when elements are being
                  expanded or collapsed. It is designed to work with elements
                  that change their height, such as collapsible panels or
                  accordions. When you use v-expand-transition> around an
                  element, Vuetify will automatically apply a CSS transition to
                  smoothly expand or collapse the element when its visibility or
                  height changes.
                </div>

                <div>
                  <b>v-divider></b>
                  v-divider> is used to display a horizontal line or divider
                  between content. It is typically used to visually separate
                  different sections or elements within a layout. It is purely
                  for creating a visual division or line in the UI. You can
                  customize its appearance using props like color, height, and
                  inset, but it doesn't have any effect on the layout or spacing
                  of other components. It's a simple way to add visual
                  separation to your content.
                </div>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>