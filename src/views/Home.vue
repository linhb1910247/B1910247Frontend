<template>

<div class="home">
    <div class="product-cards-container">
      <Search v-model="searchText" />
        <listProduct 
           v-if="filteredProductsCount > 0"
                :products="filteredProducts"
             
        />
        
    </div>
</div>
</template>
<script>
import listProduct from "@/components/ListProduct.vue";
import Productservice from "@/services/product.service.js";
import Search from "@/components/Search.vue";
export default {
    components: {
       listProduct,
        Search,
    },
     data() {
        return {
            products: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        //  Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        // Chuyển các đối tượng Product thành chuỗi để tiện cho tìm kiếm.
       productStrings() {
            return this.products.map((product) => {
                const { name, description, img,price,  size,} = product;
                return [name, description, img,price,  size,].join("");
            });
        },
        // Trả về các Product có chứa thông tin cần tìm kiếm.
        filteredProducts() {
            if (!this.searchText) return this.products;
            return this.products.filter((product, index) =>
                this.productStrings[index].includes(this.searchText)
            );
        },
        activeProducts() {
            if (this.activeIndex < 0) return null;
            return this.products[this.activeIndex];
        },
        filteredProductsCount() {
            return this.filteredProducts.length;
        },
    },
    methods: {
        async retrieveProducts() {
            try {
                this.products = await Productservice.getallProduct();
            } catch (error) {
                console.log(error);
            }
        },

        refreshList() {
            this.retrieveProducts();
            this.activeIndex = -1;
        },
    },
    mounted() {
        this.refreshList();
    },

   
}
</script>

