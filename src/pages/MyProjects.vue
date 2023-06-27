<template>
    <div>
        <h1 class="grey--text">Projects</h1>
        <v-container>
            <v-expansion-panels>
                <v-expansion-panel v-for="project in myProjects" :key="project.id">
                    <v-expansion-panel-header>{{  project.title }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <h3 class="grey--text">Due by {{ project.due }}</h3>
                        <p>{{ project.content }}</p>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            myProjects: [
                { id: 1, title: 'IMDB', due: '15th June 2023', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam molestiae sint enim, sed doloribus magnam nemo eveniet debitis ipsa aspernatur eligendi doloremque earum repellendus numquam culpa obcaecati nihil fugit? Alias?'},
                { id: 2, title: 'Front-End', due: '10th June 2023', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam molestiae sint enim, sed doloribus magnam nemo eveniet debitis ipsa aspernatur eligendi doloremque earum repellendus numquam culpa obcaecati nihil fugit? Alias?'},
                { id: 3, title: 'Back-End', due: '20th May 2023', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam molestiae sint enim, sed doloribus magnam nemo eveniet debitis ipsa aspernatur eligendi doloremque earum repellendus numquam culpa obcaecati nihil fugit? Alias?'},
            ]
        }
    }
}
</script>