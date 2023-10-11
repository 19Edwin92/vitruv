import { useLocation, useNavigate } from "react-router-dom"

export const useRouter = () => {
  const {pathname} = useLocation()  
  const navigate = useNavigate()
  const onNavigate = (path:string) => () => {
    navigate(path)
  }
  return {
    pathname, onNavigate
  }
}