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
      providesTags: ["me"],
    }),
  }),
});

export const { useGetProductsQuery } = api;
