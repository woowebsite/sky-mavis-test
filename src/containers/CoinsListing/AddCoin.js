import AddIcon from '@mui/icons-material/Add'
import { CryptoState } from 'context/CryptoContext'

const AddCoin = ({ symbol }) => {
  const { addToWatchList } = CryptoState()

  const onClick = () => {
    addToWatchList(symbol);
  }
  return <AddIcon onClick={onClick} />
}

export default AddCoin
