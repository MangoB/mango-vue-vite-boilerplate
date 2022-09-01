<script setup lang="ts">
import router from '@/router'

const drawer = $ref(false)
const items = $ref([
  {
    'title': 'Home',
    'value': '/',
    'data-test': 'btn-nav-home',
    'props': {
      prependIcon: 'mdi-home',
      to: '/',
    },
  },
  {
    'title': 'Counter',
    'value': '/counter',
    'data-test': 'btn-nav-counter',
    'props': {
      prependIcon: 'mdi-counter',
      to: '/counter',
    },
  },
])

const pathName = computed(() => router.currentRoute.value.path)
</script>

<template>
  <v-app-bar
    color="primary"
    prominent
  >
    <v-app-bar-nav-icon
      data-test="btn-drawer"
      class="hidden-lg-and-up"
      @click="drawer = !drawer"
    />
    <v-app-bar-title
      class="flex-grow-0 flex-shrink-1 flex-basis-auto mr-4"
    >
      MangoB Boilerplate
    </v-app-bar-title>
    <p class="hidden-md-and-down mx-4">
      |
    </p>
    <v-btn
      v-for="(item, i) in items"
      :key="i"
      :data-test="item['data-test']"
      :to="item.props.to"
      :class="item.value !== pathName && 'text-medium-emphasis'"
      class="hidden-md-and-down"
    >
      {{ item.title }}
    </v-btn>
    <v-spacer />
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    class="hidden-lg-and-up"
    absolute
    temporary
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :data-test="item['data-test']"
        :active="item.value === pathName"
        :value="item.value"
        :to="item.props.to"
        active-color="primary"
      >
        <template #prepend>
          <v-icon :icon="item.props.prependIcon" />
        </template>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <v-divider />
  </v-navigation-drawer>
</template>

<style scoped>
  .flex-basis-auto {
    flex-basis: auto;
  }
</style>
