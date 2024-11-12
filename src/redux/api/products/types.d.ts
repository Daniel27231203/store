namespace PRODUCTS {
  type GetProductsResponse = Product[];
  type GetProductsRequest = number;

  type PostProductsResponse = ICreateProductResponse;
  type PostProductsRequest = ICreateProduct;
}
