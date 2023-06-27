<template>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">Add Project</v-btn>
        </template>
        <v-form ref="form">
            <v-card>
                <v-card-title>Add New Project</v-card-title>
                <v-divider></v-divider>
                <v-card-text class="pt-5 pb-0">
                    <v-text-field label="Title" v-model="title" outlined color="indigo" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="info" rows="3" outlined color="indigo" :rules="inputRules"></v-textarea>
                    <v-menu v-model="dateMenu" :close-on-content-click="false">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="dueDate" label="Due date" readonly outlined v-bind="attrs"
                                v-on="on" :rules="[v => !!v || 'Please select the due date']" color="indigo"></v-text-field>
                        </template>
                        <v-date-picker v-model="dueDate" @input="dateMenu = false" color="indigo"></v-date-picker>
                    </v-menu>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-action class="d-flex justify-end pa-3">
                    <v-btn class="mr-3" color="indigo" text @click="dialog = false">Cancel</v-btn>
                    <v-btn class="indigo white--text" @click="validate">Add Project</v-btn>
                </v-card-action>
            </v-card>
        </v-form>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            dateMenu: false,
            title: '',
            info: '',
            dueDate: null,
            inputRules: [
                v => v.length > 0 || 'Please provide the input'
            ]
        }
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.$emit('addedProject', this.title);
                this.dialog = false;
            }
        }
    }
}
</script>