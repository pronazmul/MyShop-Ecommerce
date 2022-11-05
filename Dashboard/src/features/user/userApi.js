import { apiSlice } from '../api/apiSlice'

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({}),
    getUser: builder.query({}),
    addUser: builder.mutation({}),
    updateUser: builder.mutation({}),
    deleteUser: builder.mutation({}),
  }),
})

export const {
  useGetUserQuery,
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi
