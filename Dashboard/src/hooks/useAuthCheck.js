import React from 'react'
import { useDispatch } from 'react-redux'
import { setTheme } from '../features/global/globalSlice'

const useAuthCheck = () => {
  const dispatch = useDispatch()
  const [authCheck, setAuthCheck] = React.useState(false)

  React.useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      dispatch(setTheme('dark'))
    } else {
      dispatch(setTheme('light'))
    }

    // let localAuth = localStorage.getItem('auth')
    // if (localAuth) {
    //   let { accessToken, user } = JSON.parse(localAuth)
    //   if (accessToken && user) {
    //     dispatch(
    //       userLoggedIn({
    //         accessToken,
    //         user,
    //       })
    //     )
    //   }
    // }

    setAuthCheck(true)
  }, [dispatch])
  return authCheck
}

export default useAuthCheck
