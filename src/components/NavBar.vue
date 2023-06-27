<template>
    <nav>
        <v-snackbar v-model="snackbar" color="indigo">
            <div class="d-flex justify-space-between">
                <span>Project {{ title }} is added sucessfully</span>
                <v-icon color="white">mdi-check-circle</v-icon>
            </div>
        </v-snackbar>
        <v-app-bar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title class="text-uppercase grey--text">
                <div class="d-flex">
                    <img src="/favicon.svg" height="30px">
                    <span class="font-weight-light">Todo</span>
                    <span>Ninja</span>
                </div>
            </v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn text>
                <span>Sign out</span>
                <v-icon right>mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app class="indigo">
            <div class="mt-5 d-flex justify-center">
                <v-avatar size="160">
                    <img src="/soji.jpeg">
                </v-avatar>
            </div>
            <div>
                <h2 class="white--text text-center my-3">Dada Khan</h2>
            </div>
            <div class="d-flex justify-center mb-2">
                <pop-up @addedProject="showSnackBar"></pop-up>
            </div>
            <v-list>
                <v-list-item v-for="link in links" :key="link.name" :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import PopUp from './PopUp.vue';

export default {
    emits: ['addedProject'],
    components: {
        PopUp
    },
    data() {
        return {
            snackbar: false,
            drawer: false,
            title: '',
            links: [
                { icon: 'mdi-view-dashboard', name: 'Dashboard', route: '/' },
                { icon: 'mdi-folder', name: 'My Projects', route: '/projects' },
                { icon: 'mdi-account-multiple', name: 'Team', route: '/team' },
            ]
        }
    },
    methods: {
        showSnackBar(title) {
            this.title = title;
            this.snackbar = true;
        }
    }
}
</script>

<style>
.v-app-bar-title__placeholder, .v-app-bar-title__content {
    text-overflow: clip !important;
    overflow: visible !important;
}
</style>