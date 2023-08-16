<template>
  <div>
    <br />
    <br />
    <br />
    <div>
      ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    </div>
    <h2>[CardSection.vue]</h2>
    <div>
      <h3>v-card</h3>
      <div>
        The v-card component is a stylish way to wrap different types of
        content; such as tables, images, or user actions.
        <br />
        The recommended placement of elements inside of v-card is:
        <br />
        Place v-card-title, v-card-subtitle or other title text on top <br />
        Place v-card-text and other forms of media below the card header <br />
        Place v-card-actions after card content
      </div>

      <div>
        <h4>card example method 1 : With props</h4>
        <br />
        <v-card
          width="400"
          title="This is a title"
          subtitle="This is a subtitle"
          text="This is content"
        ></v-card>

        <br />
        <br />
        <br />
        <h4>card example method 2 : With markup</h4>
        <br />
        <v-card width="400" variant="outlined">
          <v-card-item>
            <v-card-title class="text-overline mb-1"
              >This is a title</v-card-title
            >

            <v-card-subtitle>This is a subtitle</v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <div>
              <div>class="text-overline mb-1" is given to v-card-title</div>
              <div>
                <b>text-overline</b> : This is a Vuetify-specific class that
                applies a text decoration style called "overline" to the text.
                The overline style typically places a horizontal line above the
                text.
              </div>
              <div>
                <b>mb-1</b> : This is another Vuetify-specific class that adds
                margin to the bottom (mb stands for "margin-bottom").
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>