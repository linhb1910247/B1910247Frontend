<template>
   <div class="container">
       <div class="row ">
       <div class="d-flex col">
                    <div class="card">
                      <img src="../../img/product_3.png">
                    </div>
                
      <div class="col mr-5 ml-5">
            <Form class=""
        @submit-once="$emit('submit:product',product)+createProduct(product)"
        :validation-schema="productFormSchema"
    >
         <div class="form-group">
            <label for="id">Id</label>
            <Field
                name="id"
                type="text"
                class="form-control "
                v-model="product.id"
            />
            <ErrorMessage name="id" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="name">Tên</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="product.name"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="de">Description</label>
            <Field
                name="description"
                type="description"
                class="form-control"
                v-model="product.description"
            />
            <ErrorMessage name="description" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="img">Hình ảnh</label>
            <Field
                name="img"
                type="img"
                class="form-control"
                v-model="product.img"
            />
            <ErrorMessage name="img" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="size">Size</label>
            <Field
                name="size"
                type="size"
                class="form-control"
                v-model="product.size"
            />
            <ErrorMessage name="size" class="error-feedback" />
        </div>
 
        <div class="form-group">
            <label for="price">Price</label>
            <Field
                name="price"
                type="text"
                class="form-control"
                v-model="product.price"
            />
            <ErrorMessage name="price" class="error-feedback" />
        </div>
        
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
           
        </div>
        <p v-if="messege">{{messege}}</p>
    </Form>
        </div>
      </div>
    
   </div>
   </div>

</template>

 
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import productService from "@/services/product.service";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:product",],
  
    data() {
        const productFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            
            description: yup.string().max(100, "Địa chỉ tối đa 500 ký tự."),
           img: yup
                .string()
                .required("img phải có giá trị."),
            price: yup
                .string()
                .required("Price phải có giá trị."),
            size: yup
                .string()
                .required("Size  phải có giá trị."),
            id: yup
                .string()
                .required("Id ảnh phải có giá trị."),
            
                
        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            //  để liên kết với các input trên form
            messege: '',

    
           product: {
               name: '',
               description:'',
               img: '',
               price: '',
               size: '',
               id:'',
                
            

           },
            productFormSchema,
        };
    },
    methods: {
       async createProduct(product){
           await productService.createProduct(product);
           this.messege="Thêm sản phẩm thành công!!"
       }
       
    }
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>