import axios from "axios";
import { defineStore } from "pinia";

export const useCartStore = defineStore ("cart",{
    state(){
        return{
           cartItems: [],
         
        }
    },
    actions: {
        initCart(){
            this.cartItems.forEach(function(item){
                item.qantityCart=0;
            }
            )
        },
        checkout(cart){
                        axios.post("http://localhost:8080/api/other/create",cart).then(response =>{
                            this.cartItems=response.data;
                        })
                      },
        addToCart(item,option){
            const index = this.cartItems.findIndex(items => items.id == item.id);
            if(item.qantityCart==null){
                item.qantityCart=1;
                item.totalCart=1;
            }
            if(index!=-1 && option ==true){
                this.cartItems[index].qantityCart++;
                this.cartItems[index].totalCart= this.cartItems[index].price* this.cartItems[index].qantityCart;
            } else if(index !=-1 && option ==false){
                this.cartItems[index].qantityCart--;
                this.cartItems[index].totalCart/this.cartItems[index].price*this.cartItems[index].qantityCart;
            }else this.cartItems.push(item);
        },
       
           
        totalShoping(){
            const result = this.cartItems.reduce(( total, item)=> {
                       return total + item.qantityCart;
                    },0)
                    return result;
                },
     
        totalCart(){
            const result = this.cartItems.reduce(( total, item)=> {
                    return total +item.price * item.qantityCart;
                },0)
                return result;
            },
       
        removeItems(item){
            const index = this.cartItems.indexOf(item)
             if (index >= 0) {
                this.cartItems.splice(index, 1)
     }
        },
        userAdd(user){
            this.cartItems.push(user);
        },
        otherCart(cart){
            axios.post("http://localhost:8080/api/other/create",cart).then(response =>{
                this.cartItems=response.data;
            })
        },
      
    }
});