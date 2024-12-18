namespace PRODUCTS {
  type GetProductsResponse = Product[];
  type GetProductsRequest = number;

  type PostProductsResponse = ICreateProductResponse;
  type PostProductsRequest = {
    id: number;
    data: ICreateProduct;
  };

  type GetProductByIdResponse = Product;
  type GetProductByIdRequest = number;

  type GetProductCategoryResponse = [];
  type GetProductCategoryRequest = void;

  type GetProductCategoryResponseByCategory = Product[];
  type GetProductCategoryRequestByCategory = string;

  type DeleteProductResponse = string;
  type DeleteProductRequest = number;

}
