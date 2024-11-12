import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<
      PRODUCTS.GetProductsResponse,
      PRODUCTS.GetProductsRequest
    >({
      query: (quantity) => ({
        url: `/products?limit=${quantity}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    createProduct: build.mutation<
      PRODUCTS.PostProductsResponse,
      PRODUCTS.PostProductsRequest
    >({
      query: (body) => ({
        url: `/products`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: build.mutation<
      PRODUCTS.PostProductsResponse,
      PRODUCTS.PostProductsRequest
    >({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    getProductById: build.query<
      PRODUCTS.GetProductByIdResponse,
      PRODUCTS.GetProductByIdRequest
    >({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    DeleteProduct: build.mutation<
      PRODUCTS.DeleteProductResponse,
      PRODUCTS.DeleteProductRequest
    >({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useGetProductByIdQuery,
  useDeleteProductMutation,
} = api;
