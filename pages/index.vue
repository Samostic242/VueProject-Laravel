<template>
  <v-app>
    <v-container>
      <v-row class="my-10">
        <v-col cols="6">
          <div :class="`text text-bold ${responsive()? 'resizetext py-4': ''}` ">
            MTN introduces new data plan with a high speed internet mifi
          </div>
        </v-col>
        <v-col cols="6">
          <v-img src="/ads.jpg" class="elevation-10"></v-img>
        </v-col>
      </v-row>
     <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Cart Details</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Close
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-subheader>Cart items</v-subheader>
          
        <v-list
          three-line
          subheader
        >
         
         <v-row>
            <v-col class="white" cols="2"  v-for='cartItem in cartItems' :key="cartItem.id">
          <v-card class="primary">

            <v-img :src="cartItem.icon"></v-img>
              
                <v-card-title>
                {{cartItem.name}}
                  </v-card-title>
                  <v-card-subtitle>
                    {{cartItem.price}}
                  </v-card-subtitle>
                 
              
            
          </v-card>
            </v-col>
           </v-row>
       
        </v-list>
        </v-list>

      </v-card>
    </v-dialog>
  </v-row>
      <!-- <v-text class="red--text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
        assumenda quia et, possimus animi rerum blanditiis, fugit eaque labore
        ratione illum nisi expedita sed hic quidem itaque. Vel, dolores
        recusandae error explicabo autem voluptate similique dolorem quasi iste
        delectus eius quidem numquam atque officiis officia, fugiat accusamus
        hic tenetur fugit adipisci repellat culpa beatae? Totam, alias. Modi
        molestiae nulla, vero ullam qui dolorum at quae aspernatur voluptatum
        perspiciatis, temporibus distinctio ipsam nihil hic! Quos cupiditate,
        eaque cum architecto quasi obcaecati. Dolores repudiandae, minus labore
        libero saepe praesentium quae repellendus eum porro facere veritatis
        neque aperiam, deleniti error officia nihil magnam aspernatur hic
        necessitatibus sunt temporibus molestias nisi perferendis. Fugiat
        commodi consequatur dignissimos quas tempore nemo sint, laborum quia,
        saepe nobis architecto et eius corrupti? Dolorem deleniti quidem labore
        voluptas iure nihil eligendi voluptate cum nemo, animi consectetur
        nobis, eaque molestias impedit tenetur? Unde consequuntur officiis
        eligendi et a, cupiditate, incidunt atque blanditiis iste vitae laborum
        dignissimos? Repudiandae, delectus laborum aut eveniet consequuntur fuga
        exercitationem, doloremque voluptates natus, ratione quisquam! Dolore
        autem nulla illo doloremque, a fugit sunt tempore, quidem sapiente magni
        ad. Sit eveniet ut quo cum inventore! Voluptatibus commodi ea mollitia
        tempora voluptatum asperiores quo delectus quasi ipsam molestias
        laudantium libero pariatur, autem magnam? Magni eum hic, fugit sequi
        magnam nam provident eveniet molestias veritatis quia inventore dolor
        nihil atque eaque voluptatem incidunt ipsa eos nesciunt perferendis
        nobis facilis quae ab molestiae labore? In id repudiandae debitis atque
        voluptatem rem nemo quod consectetur accusantium eos facilis deserunt
        fugiat aliquid earum suscipit reprehenderit porro dolore qui doloremque,
        dolor iure. Quisquam ea possimus officiis ducimus ratione sit sed
        quaerat repudiandae nulla similique! Fugiat mollitia quibusdam
        cupiditate voluptatem magnam natus. Adipisci iste quo non vitae,
        ducimus, dolorem nemo alias accusantium suscipit soluta rem molestias
        quos quidem et magnam accusamus quasi quia quis voluptatem nihil sequi.
        Perferendis adipisci doloremque ullam tempore commodi maiores natus
        sunt, inventore incidunt sed impedit quisquam? Dolorem sunt molestiae
        architecto voluptatum optio error cupiditate temporibus adipisci
        quisquam cumque vitae aperiam ullam, suscipit consequatur magnam quia
        accusantium tempore provident odit ipsum nam dicta quo! Quisquam quam
        eligendi fugiat eum ullam. Veniam vel possimus repellat iste blanditiis
        tempora, cum impedit at doloremque modi magnam explicabo? Molestiae
        labore expedita dolorem similique iste vel ex eveniet modi voluptates
        eaque impedit exercitationem fuga, illo ipsam facere perspiciatis
        deleniti! Beatae delectus optio, assumenda magnam dignissimos quas
        ratione tenetur nemo dicta fugit accusamus debitis corporis ex a unde
        expedita voluptatum odit. Minus excepturi, esse vitae repellat dolorum,
        aut consequatur quod aperiam exercitationem laudantium at corrupti quae
        odit aliquam dignissimos eius earum enim quas, adipisci deleniti
        deserunt dolores reiciendis. Sequi voluptas deserunt voluptates vitae,
        sint quibusdam blanditiis, id cumque neque ut voluptate et impedit
        perferendis praesentium debitis dignissimos. Nihil odit dolores ut non
        porro cum quas! Debitis magni aspernatur, adipisci quidem veritatis
        neque nobis expedita. Minima earum quo accusamus provident temporibus
        beatae, consequatur quisquam consectetur suscipit laudantium voluptas
        adipisci commodi ex, et at culpa. Inventore repellat, dolor repellendus
        ut vitae aliquam rem. Molestiae ab itaque accusantium impedit libero
        fuga, consectetur vero ad amet adipisci perferendis magni earum quos
        veritatis, nemo neque fugiat, qui sed. Sapiente ad blanditiis illo
        eligendi, ullam voluptatum minus porro similique soluta non quos labore
        consectetur a quo fugiat. Recusandae mollitia molestias unde,
        praesentium cum, ex inventore dolor cupiditate aliquid ipsam doloremque
        deleniti tenetur minima! Quasi nulla accusamus recusandae quam vitae
        magnam omnis possimus? Harum labore omnis quia modi obcaecati quis in
        cupiditate at libero est earum odio similique repellat aspernatur vitae
        dolorem, distinctio corporis dolor quae tempore. Saepe reiciendis minus
        exercitationem eius totam accusamus tempore at accusantium, qui sapiente
        facilis deserunt fuga maxime magnam enim veniam. Sint ut, ea tempora
        consequuntur mollitia nesciunt ab libero eligendi, ipsam aliquam sit
        explicabo totam. Facilis dolores amet expedita corporis harum distinctio
        sed. Adipisci quasi tenetur, enim quos neque at expedita omnis
        voluptates eum architecto quaerat mollitia, vel eligendi earum et
        reprehenderit odio rem perspiciatis debitis. Minima, quisquam fugiat.
        Soluta pariatur delectus labore consequuntur veniam repellendus, tempore
        nesciunt aliquam cum tempora est dolorum atque commodi quae eos rerum
        nobis necessitatibus perspiciatis, perferendis laudantium! Laborum
        ducimus aliquid praesentium a quibusdam quasi obcaecati vitae odio,
        laboriosam illum molestias recusandae? Ea voluptatibus ipsam error
        dolorum quisquam quam qui ex ipsa amet, corporis beatae quia asperiores
        dignissimos, in esse id deleniti repudiandae quae impedit minima,
        tempore tenetur. Quos, tempora ab. Voluptates adipisci atque cum et
        corrupti ullam consequatur accusantium repellendus libero possimus eum
        pariatur, nobis necessitatibus neque nemo praesentium odit repudiandae
        delectus repellat. Incidunt labore atque aliquam provident sunt cum ad
        reprehenderit voluptatum? Dicta repellat voluptates eum repellendus
        officia at, ad et voluptatibus expedita qui magnam beatae officiis ut
        molestiae corporis sed amet voluptatem! Modi quod vel totam harum, esse
        non quae aperiam numquam blanditiis? Esse explicabo minus cumque
        mollitia rerum natus ratione eum cupiditate incidunt! Deleniti
        dignissimos reprehenderit esse, illo fuga, sequi consectetur omnis ipsum
        delectus velit officia, quis fugiat porro rem? Laudantium tenetur
        perferendis beatae sit qui amet excepturi officia sapiente ipsa non
        dolorum consequatur voluptatum illo rem inventore tempore repudiandae
        autem corrupti at neque, sint facere facilis? Nemo aut, consectetur
        dolore quas tempore reiciendis totam facilis non ex distinctio ipsam.
        Fugit, assumenda deleniti! Tempora, expedita incidunt exercitationem
        illo labore perspiciatis nostrum sequi excepturi ipsam reprehenderit
        libero officia rerum. Optio, aperiam eos maiores ea labore repellendus
        nihil laboriosam et assumenda fugiat sequi ratione asperiores
        distinctio, ullam quia qui consequatur ad cumque officiis. Obcaecati
        voluptate vel consectetur, sint similique quaerat alias facere quae
        delectus architecto soluta incidunt repellendus numquam impedit ex
        quibusdam provident quas ipsum, dolor atque quisquam cumque placeat?
        Dolorem inventore quod iste repellendus? Molestiae quis dolor beatae
        neque, laudantium consectetur, soluta, dignissimos est libero aperiam
        expedita omnis. Dignissimos in tempora ullam a vitae officiis magnam
        corrupti doloribus veniam voluptatum inventore, dolore est nihil tempore
        voluptatem officia sed corporis, quam architecto consectetur
        reprehenderit! Facere esse architecto tenetur sapiente tempore, culpa
        debitis impedit eveniet nisi expedita temporibus maiores harum
        recusandae. Ducimus mollitia fugiat harum vitae officiis consequuntur
        eligendi aliquam temporibus omnis quae, dicta doloremque earum ipsam
        illum. Iste, aut aliquid.
      </v-text> -->

      <v-row class="pt-4" >
    <v-col cols="3" v-for="affiliate in affiliates" :key='affiliate.id'>
      <v-card color="primary">
        <v-card-text>
          <v-row>

            <v-col cols="4">
          <v-img :src='affiliate.icon' height="50" width="50" class="ml-4" ></v-img>
          </v-col>
          <v-col cols="8" class="mt-4">
          {{affiliate.name}}
          </v-col>
              </v-row>
        </v-card-text>
      </v-card>
    </v-col>

      </v-row>
     <v-row>
        <v-col cols="12">
          <v-sheet color="white">
            <v-card-title class="black--text">Top selling items</v-card-title>
         
     
        <v-row>
            <v-col class="white" cols="2"  v-for='product in lproduct' :key="product.id">
          <v-card class="primary">

            <v-img :src="product.icon"></v-img>
              
                <v-card-title>
                {{product.name}}
                  </v-card-title>
                  <v-card-subtitle>
                    {{product.price}}
                  </v-card-subtitle>
                  <v-card-action>
                    <v-btn @click='addToCart(product)' class="primary"> <v-icon>mdi-cart</v-icon>Add to cart </v-btn>
                  </v-card-action>
              
            
          </v-card>
            </v-col>
           </v-row>
               </v-sheet>
            </v-col>
       </v-row>
    <div class="text-center ma-2">
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
    </v-container>
  </v-app>
</template>
<style>
.v-application {
  background-color: #010052 !important;
}
.text {
  font-size: 60px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
}
.resizetext{
  font-size: 20px;
}
</style>
<script>
export default {
  data: () => ({
    dialog: false,
    affiliates:[
      {id:1, name:'Jumia Global', icon:'/1.png'},
      {id:2, name:'Official Stores', icon:'/2.png'},
      {id:3, name:'Jumia food', icon:'/3.png'},
      {id:4, name:'Borrow Cash', icon:'/4.png'}

    ],
        products:[
      {id:1, name:'Power bank', icon:'/11.jpg', price:50, ps:"latest"},
      {id:2, name:'Samsung', icon:'/12.jpg', price:70, ps:"latest"},
      {id:3, name:'Airpod', icon:'/13.jpg', price:90, ps:"notlatest"},
      {id:4, name:'Infinix Charger', icon:'/14.jpg',price:60, ps:"latest"},
      {id:5, name:'Iphone 12+', icon:'/15.jpg', price:20, ps:"latest"},
      {id:6, name:'Apple Laptop', icon:'/16.jpg', price:30, ps:"notlatest"}


    ],
    snackbar: false,
    text: 'No item added in the cart',
    cartItems:[],
    lproduct:[]
  }),

  methods: {
    addToCart(product){
      this.snackbar = true,
      this.text = product.name + ' added to cart'
      this.cartItems = product
    },
    responsive(){
      if(this.$vuetify.breakpoint.smAndDown){
        return true;
      }else{
        return false;
      }

    }
  },
  mounted(){
    let mlp = this.products.filter(i=>i.ps!='latest')
    this.lproduct = mlp
  }
}
</script>