<script setup lang="ts">
    import router from '@/router';

    let drawer = $ref(false);
    let items = $ref([
        {
            title: 'Home',
            value: '/',
            props: {
            prependIcon: 'mdi-home',
            to: '/',
            },
        },
        {
            title: 'Counter',
            value: '/counter',
            props: {
            prependIcon: 'mdi-counter',
            to: '/counter',
            },
        },
    ]);

    const pathName = computed(() => router.currentRoute.value.path)
</script>

<template>
    <v-app-bar
        color="primary"
        prominent
    >
        <v-app-bar-nav-icon
            class="hidden-lg-and-up"
            @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-app-bar-title
            class="flex-grow-0 flex-shrink-1 flex-basis-auto mr-4"
        >
            MangoB Boilerplate
        </v-app-bar-title>
        <p class="hidden-md-and-down mr-4">|</p>
        <v-btn
            v-for="(item, i) in items"
            :key="i"
            :to="item.props.to"
            :class="item.value !== pathName && 'text-medium-emphasis'"
            class="hidden-md-and-down"
        >
            {{item.title}}
        </v-btn>
        <v-spacer></v-spacer>
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
                :active="item.value === pathName"
                :key="i"
                :value="item.value"
                :to="item.props.to"
                active-color="primary"
            >
                <template v-slot:prepend>
                    <v-icon :icon="item.props.prependIcon"></v-icon>
                </template>
                <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
    </v-navigation-drawer>
</template>

<style scoped>
    .flex-basis-auto {
        flex-basis: auto;
    }
</style>