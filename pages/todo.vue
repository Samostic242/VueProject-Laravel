<template>
  <v-app>
      <v-container>
          <v-list>
            <v-list-item v-for="item in items" :key="item.id">
            {{item.id}}
            {{item.title}}
            {{item.completed}}


            </v-list-item>
          </v-list>
      </v-container>
  </v-app>
</template>

<script>
export default {
    data(){
        return{
            items:[]
        }
    },
    mounted(){
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => this.items= json )
    }

}
</script>

<style>

</style>