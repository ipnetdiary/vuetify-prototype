<template>
  <v-card
    class="mx-auto mt-6"
    width="344"
  >
    <v-system-bar>
      <v-spacer></v-spacer>
      <v-icon>mdi-square</v-icon>
      <v-icon>mdi-circle</v-icon>
      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-toolbar>
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title>Mes</v-toolbar-title>

      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        bottom
        color="deep-purple accent-4"
      ></v-progress-linear>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container style="height: 282px;">
      <v-row
        class="fill-height"
        align="center"
        justify="center"
      >
        <v-scale-transition>
          <div
            v-if="!loading"
            class="text-center"
          >
            <v-btn
              color="primary"
              @click="start()"
            >Start</v-btn>
          </div>
          <h1 v-if="msg == true">Hello World</h1>
        </v-scale-transition>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      msg: false
    }),

    watch: {
      loading (val) {
        if (!val) return

        setTimeout(() => (this.loading = false), 3000)
      },
    },
    methods: {
      start(){
        this.loading = true
        this.msg = true
      },
      stop(){
        //var msg = true
      }
    }
  }
</script>