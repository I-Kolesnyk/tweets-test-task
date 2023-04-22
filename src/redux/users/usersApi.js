import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://641a3260f398d7d95d52a073.mockapi.io";
// const paginatedUrl = URL.searchParams.append('limit', 3)

// const url = new URL('"https://641a3260f398d7d95d52a073.mockapi.io');

// url.searchParams.append('page', 1);
// url.searchParams.append('limit', 5);

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  tegTypes: ["Users"],

  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: (page) => `/users?page=${page}&limit=3`,
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

export const {
  useFetchUsersQuery,
  useUpdateUserMutation,
  useDeleteContactMutation,
} = usersApi;