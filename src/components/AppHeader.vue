<template>
 <div>
   <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
        <div class="container text-light">
            <div class="w-100 d-flex justify-content-between">
                <div>
                    <i class="fa fa-envelope mx-2"></i>
                    <a class="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">hlshop@gmail.com</a>
                    <i class="fa fa-phone mx-2"></i>
                    <a class="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">0981234567</a>
                </div>
                <div>
                    <a class="text-light" href="#" target="_blank" rel="sponsored"><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                    <a class="text-light" href="#" target="_blank"><i class="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                    <a class="text-light" href="#/" target="_blank"><i class="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                    <a class="text-light" href="#" target="_blank"><i class="fab fa-linkedin fa-sm fa-fw"></i></a>
                </div>
            </div>
        </div>
    </nav>
        <!-- Header -->
    <nav class="navbar navbar-expand-lg navbar-primary shadow  ">
        <div class="container d-flex justify-content-between align-items-center">
        <router-link :to="{ name: 'Home' }"  >
            <img style="max-width:150px;" src="../assets/logo1_preview_rev_1.png"></router-link>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                <div class="flex-fill">
                    <ul class="mr-auto navbar-nav ">
                         <li class="nav-item"> 
                             <router-link :to="{ name: 'Home' }" class="nav-link">
                             Home  
                            </router-link>
                             
                        </li>
                        <li class="nav-item"> 
                             <router-link :to="{ name: 'Home' }" class="nav-link">
                             Shop  
                            </router-link>
                             
                        </li>
                       <li class="nav-item">
                             <router-link :to="{ name: 'Product' }" class="nav-link">
                             Products
                            </router-link>
                             
                        </li>
                        <li class="nav-item">
                             <router-link :to="{ name: 'About' }" class="nav-link">
                                 
                            </router-link>
                             
                        </li>
                     
                        <li class="nav-item"> 
                             <router-link :to="{ name: 'Home' }" class="nav-link">
                             Page  
                            </router-link>
                             
                        </li>
                    </ul>
                </div>
                <div class="navbar align-self-center d-flex">
                    <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                        <div class="input-group">
                            <div class="input-group-text">
                            
                            </div>
                        </div>
                    </div>
                        
                       
                       
                     <router-link :to="{ name: 'Shop' }"  > 
                        <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                           <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark icon" >{{this.cartStore.totalShoping()}}</span>
                        </router-link>
                   
                    
                </div>
            </div>

        </div>
    </nav>
   
 </div>

</template>

<script>
import { mapStores } from "pinia";
import {useCartStore} from "@/stores/cart";

export default {
  
   computed:{
        ...mapStores(useCartStore),
   },

  
}
</script>

