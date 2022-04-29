<script>
import { mapStores } from "pinia";
import {useCartStore} from "@/stores/cart";
export default {
    props: {
        products: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    computed: {
        selectedIndex() {
            return this.activeIndex;
        },
       
     ...mapStores(useCartStore),
    },
    
    methods: {
        select(index) {
            this.$emit("update:activeIndex", index);
        },
        
         addItem(items,option) {
          this.cartStore.addToCart(items,option);

        },
    //     sortBy(arr, key) {
    //       return arr.sort(function(a, b) {
    //         if (a[key] < b[key]) return -1
    //        if (a[key] > b[key]) return 1
    //      return 0
    //   })
    // },
    },
};
</script>


<template>

<div class="container-fluid body1"
           >
           
	 <div id="myCarousel" class="carousel slide border" data-ride="carousel">
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="../../img/slider_1.jpg" alt="Panther">
               </div>
            </div>
         </div>
     
  	
    
 <div class=" row ">
   
    <div class="card" 
    
        v-for="(product, index) in products"
            :key="product.id"
            :class="{ active: index === selectedIndex }"
     >

        <div class="d-flex justify-content-between align-items-center" >
            <div class="mt-2">
                <h5 class="text-uppercase">{{product.name}}</h5>
                <div class="mt-5">
                    <h1 class="main-heading mt-0">${{product.price}}</h1>
                    <div class="d-flex flex-row user-ratings">
                        <div class="ratings"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                      
                        
                    </div>
                    <h5>Size: {{product.size}}</h5>
                </div>
            </div>
            <div class="image"> <img :src="product.img" width="150"> </div>
        </div>
        
        <p> {{product.description}} </p> <button @click="this.addItem(product,true)" class="btn btn-primary">Add to cart</button>
    </div>
</div>
</div>
</template>




<style lang="css ">
.body1{
  background-color: rgb(250, 246, 246)
}
.card {
    width: 300px;
    height: 350px;
    padding: 30px;
    margin: 30px 35px ;
}

.image {
    position: absolute;
    right: 12px;
    top: 5px;
}

.main-heading {
    font-size: 35px;
    color: red !important
}

.ratings i {
    color: orange
}

.user-ratings h6 {
    margin-top: 2px
}

.colors {
    display: flex;
    margin-top: 2px
}

.colors span {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    margin-right: 6px
}



.btn-danger {
    height: 48px;
    font-size: 18px;
}
</style>

   

