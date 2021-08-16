<template>
  <div class="white justify-content-center maindiv mt-16 px-10">
   <div><h1 class="htext text-center">Create a secure account </h1><br>
   <h4 class="dtext text-center">Welcome to the future of Savings & investement</h4>
   </div>
    <v-img src="https://dashboard.piggyvest.com/static/media/piggyvest-logo.0b78a8fa.svg" height="50px"></v-img>
     <v-text-field
      label="Name"
      :rules="rules"
      hide-details="auto"
      class="indigo px-4 mt-6" 
    ></v-text-field>
     <v-text-field
      label="Email"
      :rules="rules"
      hide-details="auto"
       class="indigo px-4 mt-6"
    
    ></v-text-field>
     <v-text-field
      label="Mobile"
      :rules="rules"
      hide-details="auto"
       class="indigo px-4 mt-6"

    ></v-text-field>
    
     <v-text-field
      label="Mobile"
      :rules="rules"
      hide-details="auto"
       class="indigo px-4 mt-6"

    ></v-text-field>
    <v-btn class="subtn px-4 mt-6">Submit</v-btn>
    <!-- <v-text-field label="Another input"></v-text-field> -->
  </div>
</template>
<style>
.maindiv{
    border-radius: 50px 50px 50px 50px;
    width: 50%;
    height: 900px;
    justify-content: center;
    align-self: center;
    margin-left: 20%;
}

.htext{
    color: #010052 !important;
    padding-top: 80px;
}
.dtext{
    color: black !important;
    padding-bottom: 20px;

}
.subtn{
    background-color: #010052 !important;
    width: 100%;
    height: 300px;
}
</style>
<script>
  export default {
    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],

    }),
  }
</script>