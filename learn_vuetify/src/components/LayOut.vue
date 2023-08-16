<template>
  <div>
    <div>
      <br />
      <br />
      <br />
      <div>
        ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
      </div>

      <div>
        <h2>[LayOut.vue]</h2>
        <div>
          <h3>LayOut - flex - grid - card</h3>
        </div>
      </div>
      <div>
        <b>
          <a href="https://dilshankelsen.com/learn-vuetify-grid-system/"
            >Must read b4 starting this section</a
          >
        </b>
      </div>
    </div>
    <v-container>
      <v-layout row wrap>
        <v-row>
          <v-flex xs12 sm6 xs4>
            <v-card density="compact" class="bg-black" hover v-ripple>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Card 1</h3>
                  <span>card-1 sub-title</span>
                </div>
              </v-card-title>
              <v-card-text>
                <div>
                  <v-card-text>
                    <div>
                      <b>v-layout row wrap</b>This prop specifies that the
                      content should be arranged horizontally (in a row). If not
                      specified, the default behavior is vertical (column
                      layout).
                      <br />
                      wrap: This prop specifies that the content should wrap to
                      the next line if it exceeds the available width.
                    </div>
                    <div>
                      v-col is a content holder that must be a direct child of
                      v-row. This is the 2.x replacement for v-flex in 1.x.
                    </div>
                  </v-card-text>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 xs4>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Card 2</h3>
                  <span>Subtitle for Card 2</span>
                </div>
              </v-card-title>
              <v-card-text>
                <div>Content of Card 2.</div>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 xs4>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Card 3</h3>
                  <span>Subtitle for Card 3</span>
                </div>
              </v-card-title>
              <v-card-text>
                <div>Content of Card 3.</div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-row>
      </v-layout>
    </v-container>
  </div>
</template>
