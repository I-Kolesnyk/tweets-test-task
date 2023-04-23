import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://641a3260f398d7d95d52a073.mockapi.io";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  tegTypes: ["Users"],

  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: () => `/users`,
      providesTags: ["Users"],
    }),

    updateUser: builder.mutation({
      query: (updateUser) => ({
        url: `/users/${updateUser.id}`,
        method: "PUT",
        body: updateUser,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useFetchUsersQuery, useUpdateUserMutation } = usersApi;
