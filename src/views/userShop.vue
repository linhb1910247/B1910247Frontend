<template>
      <div  class="page">
     
        <User />
      <!-- {{shoppingCart}} -->
    </div>
    
</template>

<script>
import User from "@/components/userForm.vue";


import { useCartStore } from '@/stores/cart'


export default {
    components: {
       User,
    },
  //  setup(){
  //       const shoppingCart = useCartStore()
  //       return { shoppingCart }
  //   },
};
</script>