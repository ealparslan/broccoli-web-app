<template>
  <v-app>
    
    <v-toolbar>
      
    </v-toolbar>

    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>

            <v-text-field
              name="email"
              label="Label Text"
              value="Input text"
              class="input-group--focused"
            ></v-text-field>

            <v-btn light>Load Dieters</v-btn>
            {{requestResponse}}
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </main>

    <v-footer :fixed="fixed">
      <span>&copy; Broccoli - 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import {api} from './apiFactory'
  import {Dietician} from './dietician.js'

  export default {
    data () {
      return {
        clipped: true,
        drawer: false,
        fixed: true,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        miniVariant: true,
        right: true,
        rightDrawer: false,
        requestResponse: "Broccoli"
      }
    },

    created() {

      this.loadViewData();
      
    },

    methods: {
        async loadViewData() {
          const d = new Dietician(1);
          this.requestResponse = await d.getAggreementsWithDieters();
        }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
