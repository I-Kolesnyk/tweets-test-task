import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://641a3260f398d7d95d52a073.mockapi.io",
  }),
  tagTypes: ["Users"],

  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: () => `/users`,
      providesTags: ["Users"],
    }),
    updateUser: builder.mutation({
      query: (id, updateUser) => ({
        url: `/user/${id}`,
        method: "PUT",
        body: updateUser,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useFetchUsersQuery, useUpdateUserMutation } = usersApi;
