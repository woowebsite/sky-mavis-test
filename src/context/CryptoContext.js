import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { CoinList } from 'config/api'

const Crypto = createContext()

const CryptoContext = ({ children }) => {
  const [coins, setCoins] = useState([])
  const [watchList, setWatchList] = useState(['btc', 'eth'])
  const [loading, setLoading] = useState(false)

  const fetchCoins = async () => {
    setLoading(true)
    const { data } = await axios.get(CoinList('USD'))

    setCoins(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchCoins()
  }, [])

  const addToWatchList = (symbol) => {
    setWatchList([...watchList, symbol])
  }
  const removeToWatchList = (symbol) => {
    setWatchList((prev) => {
      return prev.filter((x) => x !== symbol)
    })
  }

  return (
    <Crypto.Provider
      value={{
        coins,
        watchList,
        setWatchList,
        addToWatchList,
        removeToWatchList,
        loading,
      }}
    >
      {children}
    </Crypto.Provider>
  )
}

export default CryptoContext

export const CryptoState = () => {
  return useContext(Crypto)
}
