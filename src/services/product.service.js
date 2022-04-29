import createApiClient from "./api.service";

class productService {
    constructor(baseUrl = "/api/product") {
        this.api = createApiClient(baseUrl);
    }
   
    async createProduct(data) {
        return (await this.api.post("/post", data)).data;
    }
    async getallProduct() {
        return (await this.api.get("/")).data;
    }
}

export default new productService();