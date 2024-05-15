import { useContext } from 'react'
import GlobalContext from './context'

const useGlobal = () => {
  const items = useContext(GlobalContext);  
  return items;
}

export default useGlobal