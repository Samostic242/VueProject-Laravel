<template>
 <v-app>
   <v-navigation-drawer class="hidden"
          v-model="drawer"
          left
          width="100%"
          color="black"
          app
          >
          <v-list>
          <v-list-item> Home <v-spacer></v-spacer> <span><v-btn @click='drawer=false'> &times;</v-btn></span></v-list-item>

          <v-list-item> About US</v-list-item>
          <v-list-item> Contact US</v-list-item>

        </v-list>

        </v-navigation-drawer>
        
    <v-app-bar
    flat
     fixed :class="appear" >
      <v-toolbar  color="transparent" flat>
        <v-toolbar-title>
          <v-img src='/v-logo.png' height='40' width='40'></v-img>
          <v-app-bar-nav-icon class="hidden-sm-and-up" @click='drawer=!drawer' ></v-app-bar-nav-icon>
          <!-- <v-spacer class=" hidden-sm-and-up"></v-spacer>33 -->
        </v-toolbar-title>
        <!-- <v-app-bar-nav-icon class="hidden-sm-and-up"></v-app-bar-nav-icon> -->
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only" flat>
        <v-btn color='transparent' class="mx-4" elevation="0" ><v-icon>mdi-home</v-icon>Home</v-btn>
        <v-btn color='transparent' class="mx-4" elevation="0" ><v-icon>mdi-account-circle</v-icon>Register</v-btn>
     <NuxtLink to="/todo"> <v-btn color='transparent' class="mx-4" elevation="0" ><v-icon>mdi-cart</v-icon>To do </v-btn> </NuxtLink>   
        <v-btn color='transparent' class="mx-4" elevation="0" ><v-icon>mdi-power-settings-new</v-icon>Log Out</v-btn>
        <v-btn color='transparent' class="mx-4" elevation="0" ><v-icon>mdi-cart</v-icon>Cart</v-btn>

        </v-toolbar-items>
      </v-toolbar>
    </v-app-bar>
<v-main>
    <v-container>
      <Nuxt/>
    </v-container>
</v-main>
  
      
 </v-app>
      

</template>
<style>
.v-application{
  background-color: #010052 !important;
}
.v-toolbar{
  background-color: #010052 !important;
}
.v-toolbar-items{
  background-color: #66666b !important;
  font-family: 'Montserrat', sans-serif;

}
</style>
<script>
export default {
  data() {
    return{
      drawer: false,
      appear:''
    }
    
  },
  mounted(){
    window.onscroll = ()=>{
      this.changenavcolor();
    }
  },
  methods: {
     changenavcolor(){
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
          this.appear = 'yellow';
        }else{
          this.appear = 'transparent';
        }
    }
  }
  
  }
</script>
