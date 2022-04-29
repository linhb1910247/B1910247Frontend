<template>
    <Form
       @submit="this.adduser(user)"
        :validation-schema="userFormSchema"
    >
        <div class="form-group col-md-6 mb-3">
            <label for="username">Name</label>
            <Field
                name="username"
                type="text"
                class="form-control"
                v-model="user.username"
            />
            <ErrorMessage name="username" class="error-feedback" />
        </div>
        <div class="form-group col-md-6 mb-3">
            <label for="email">E-mail</label>
            <Field
                name="email"
                type="email"
                class="form-control"
                v-model="user.email"
            />
            <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="form-group col-md-6 mb-3">
            <label for="address">Address</label>
            <Field
                name="address"
                type="text"
                class="form-control"
                v-model="user.address"
            />
            <ErrorMessage name="price" class="error-feedback" />
        </div>
         <div class="form-group col-md-6 mb-3">
            <label for="phone">Điện thoại</label>
            <Field
                name="phone"
                type="text"
                class="form-control"
                v-model="user.phone"
            />
            <ErrorMessage name="phone" class="error-feedback" />
        </div>
      <div class="form-check m-3">
             <input class="form-check-input" type="checkbox">
            <p class="m-3">   Đồng ý mua hàng với các điều khoảng của shop</p>            
            </div>
        <div class="form-group col-md-6 mb-3">
            <button class="btn btn-primary m-3" @click="this.checkout(user)">Lưu</button>
        </div>
    </Form>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import { mapStores } from "pinia";
import {useCartStore} from "@/stores/cart";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
       const userFormSchema = yup.object().shape({
			username: yup
				.string()
				.required("Tên phải có giá trị.")
				.min(2, "Tên phải ít nhất 2 ký tự.")
				.max(50, "Tên có nhiều nhất 50 ký tự."),
			email: yup
				.string()
				.email("E-mail không đúng.")
				.max(50, "E-mail tối đa 50 ký tự."),
			address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
			phone: yup
				.string()
				.matches(
					/((09|03|07|08|05)+(\d{8})\b)/g,
					"Số điện thoại không hợp lệ."
				),
		});
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            //  để liên kết với các input trên form
           user: {
               username: '',
               email:'',
               address: '',
               phone: '',
           },
            userFormSchema,
        };
    },
    computed: {
         ...mapStores(useCartStore),
    },
    methods: {
            adduser(name){
             this.cartStore.userAdd(name)
        }, 
        checkout(user){
            const orther ={
                     username : user.username,
                     phone : user.phone,
                     email: user.email,
                     address: user.address,
                     products:
                        
                          this.cartStore.cartItems,
                    
            }
             this.cartStore.otherCart(orther);
             
        },
         
    },
    
  
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>
