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
          localStorage.setItem(
            'auth',
            JSON.stringify({
              user: result.data.user,
            })
          )
          dispatch(
            userLoggedIn({
              user: result.data.user,
            })
          )
        } catch (error) {
          console.log({ error })
        }
      },
    }),
  }),
})

export const { useLoginMutation } = authApi
