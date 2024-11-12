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
  }),
});

export const { useGetProductsQuery, useCreateProductMutation } = api;
