<template>

  
     <section class="shop-cart spad">
         
        <div class="container">
            
                         <div class="row">
                             <div class="col-12 ml-5 col-md-6 product"><h4>Product</h4></div>
                           <div class="col mr-5  price"><h4>Price</h4></div>
                         <div class="mr-5 col quantity"><h4>QuantiTy</h4></div>
                         <div class="col total "><h4>Total</h4></div>
                            </div>
            <div class="row"  v-for="cartItem in this.cartStore.cartItems"
                                        :key="cartItem.id"
                                      
                                        >
                <div class="col-lg-12">
                    <div class="shop__cart__table">
                        <table>
                           
                            <tbody>
                                <tr>
                                    <td class="cart__product__item">
                                        <img  :src="cartItem.img" alt="">
                                        <div class="cart__product__item__title">
                                            <h6>{{cartItem.name}}</h6>
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="cart__price">$ {{cartItem.price}}</td>
                                    <td class="cart__quantity">
                                        <div class="pro-qty">
                                               <li class="list-inline-item"  @click="this.addItem(cartItem,false)" ><span class="btn btn-dark" id="btn-minus">-</span></li>
                                            <li class="list-inline-item" >{{cartItem.qantityCart}}</li>
                                           
                                            <li class="list-inline-item" @click="this.addItem(cartItem,true)" ><span class="btn btn-dark" id="btn-plus">+</span></li>
                                            
                                        </div>
                                    </td>
                                   <td class="total">$ {{cartItem.totalCart}}</td>
                                    <td class="cart__close  "><span class="icon_close" @click="this.removeItem(cartItem)">X</span></td>
                                   
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="removeall    " >
                    <div class="removeall " >
                        <button type="button" class="btn btn-danger" @click="this.removeaAlllCart()" >RemoveALL</button>
                    </div>
                
            </div>
            <div class="row">
                
                <div class="col-lg-4 offset-lg-2">
                    <div class="cart__total__procced">
                        <h6>Cart total</h6>
                        <ul>
                            <li>Subtotal <span>{{this.cartStore.totalShoping()}}</span></li>
                            <li>Total <span>${{this.cartStore.totalCart()}}</span></li>
                        </ul>
                          <div class=" col-md-6 col-sm-6">
                    <div >
                          <router-link :to="{ name: 'User' }" >  <button type="button" class="btn btn-success" >Checkout</button></router-link>
                    </div>
                </div> 
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapStores } from "pinia";
import {useCartStore} from "@/stores/cart";
export default {
   computed:{
        ...mapStores(useCartStore),
   },
    methods: {
       addCartShoping(items) {
          this.cartStore.adjustItem(items)
        },
        deleteCartShoping(items){
        this.cartStore.deleteItems(items)
        },
        removeaAlllCart(){
                if (window.confirm('Are you sure you want to clear the cart?')) {
                   this.cartStore.cartItems = []
                }
        },
         removeItem(items){
           this.cartStore.removeItems(items) 
        },
       
       
      addItem(items,option) {
          this.cartStore.addToCart(items,option);

        },
        search(){
            const searchButton = document.getElementById('search-button');
           const searchInput = document.getElementById('search-input');
            searchButton.addEventListener('click', () => {
             const inputValue = searchInput.value;
            alert(inputValue);
});
        }
   },

 
}
</script>

<style scoped>
@import "@/assets/cart.css";
</style>
