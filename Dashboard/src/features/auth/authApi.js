import { apiSlice } from '../api/apiSlice'
import { userLoggedIn, userLoggedOut } from './authSlice'

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
    logout: builder.query({
      query: () => ({
        url: '/users/auth/logout',
        method: 'GET',
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled
          dispatch(userLoggedOut())
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    getActiveSessions: builder.query({
      query: (userId) => ({
        url: `/users/auth/sessions/${userId}`,
        method: 'GET',
      }),
      transformResponse(apiResponse) {
        return apiResponse?.data
      },
    }),
    deactivateSession: builder.mutation({
      query: ({ userId, sessionId }) => ({
        url: `/users/auth/sessions/${sessionId}`,
        method: 'PUT',
      }),
      async onQueryStarted(
        { userId, sessionId },
        { queryFulfilled, dispatch, getState }
      ) {
        try {
          const session = await queryFulfilled
          // Logout Current User If Deactivated Session is Current User
          const { auth } = getState()

          if (auth?.user?.session === session?.data?.data?._id) {
            dispatch(userLoggedOut())
          }

          dispatch(
            apiSlice.util.updateQueryData(
              'getActiveSessions',
              userId,
              (draft) => {
                const index = draft.findIndex((item) => item._id == sessionId)
                draft.splice(index, 1)
              }
            )
          )
        } catch (error) {
          console.log(error)
        }
      },
    }),
  }),
})

export const {
  useLoginMutation,
  useLoggedInInfoQuery,
  useLogoutQuery,
  useGetActiveSessionsQuery,
  useDeactivateSessionMutation,
} = authApi
