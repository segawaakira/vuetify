<template>
  <div class="about">
    <h1>必要なコンポーネント</h1>

    <v-toolbar
      color="cyan"
      dark
      flat
    >
      <!-- <v-toolbar-title>Your Dashboard</v-toolbar-title> -->

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab
            v-for="item in items"
            :key="item"
          >
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <v-card-text v-text="item.text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>


  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

  </v-card>

      <v-btn
        class="ma-2"
        color="orange darken-2"
        dark
      >
        <v-icon
          dark
          left
        >
          mdi-arrow-left
        </v-icon>Back
      </v-btn>



  <div class="text-center">
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>

    <v-progress-circular
      :width="3"
      color="red"
      indeterminate
    ></v-progress-circular>

    <v-progress-circular
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>

    <v-progress-circular
      :width="3"
      color="green"
      indeterminate
    ></v-progress-circular>

    <v-progress-circular
      :size="50"
      color="amber"
      indeterminate
    ></v-progress-circular>
  </div>
  </div>
</template>


<script lang="ts">
export default {
  name: 'About',

  data: () => ({
    tab: null,
    items: [
      {
        'title': 'web',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        'title': 'shopping',
        'text': 'あああああ'
      },
    ],
    breadcrumbs: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
  })
}
</script>
