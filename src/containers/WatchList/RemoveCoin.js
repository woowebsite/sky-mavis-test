import RemoveIcon from '@mui/icons-material/Remove'
import { CryptoState } from 'context/CryptoContext'

const RemoveCoin = ({ symbol }) => {
  const { removeToWatchList } = CryptoState()

  const onClick = () => {
    removeToWatchList(symbol)
  }
  return <RemoveIcon onClick={onClick} />
}

export default RemoveCoin
