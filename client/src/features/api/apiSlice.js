import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:5000/api' }),
  endpoints: (builder) => ({

    registerUser: builder.mutation({
    }),

  }),
});

export const {
  useRegisterUserMutation,
} = apiSlice;