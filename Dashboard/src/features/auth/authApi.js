import { apiSlice } from '../api/apiSlice'
import { userLoggedIn } from './authSlice'

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/users/auth',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          dispatch(
            userLoggedIn({
              user: result.data?.data,
              roles: result.data?.data?.roles || [],
            })
          )
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    loggedInInfo: builder.query({
      query: () => ({
        url: '/users/auth',
        method: 'GET',
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          dispatch(
            userLoggedIn({
              user: result.data?.data,
              roles: result.data?.data?.roles || [],
            })
          )
        } catch (error) {
          console.log({ error })
        }
      },
    }),
  }),
})

export const { useLoginMutation, useLoggedInInfoQuery } = authApi
