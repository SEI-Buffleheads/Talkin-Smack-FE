import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  
  const log_out = () => {
    localStorage.removeItem('user')
    dispatch({type: 'LOGOUT'})
  }

  return {log_out}
}