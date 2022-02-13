import React, { useState } from 'react'
import Pagination from '@mui/lab/Pagination'
import {
  Container,
  LinearProgress,
  Typography,
  TextField,
  TableContainer,
} from '@mui/material'
import { CryptoState } from 'context/CryptoContext'
import CoinsTable from 'components/CoinsTable'
import { tableStyles } from './styled'
import AddCoin from './AddCoin'

export default function CoinsListing() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const { coins, loading } = CryptoState()
  const classes = tableStyles()

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    )
  }

  return (
    <Container style={{ textAlign: 'center' }}>
      <Typography variant='h4' style={{ padding: 16 }}>
        Listing Crypto
      </Typography>
      <TextField
        label='Search crypto'
        variant='outlined'
        style={{ marginBottom: 20, width: '100%' }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableContainer>
        {loading ? (
          <LinearProgress style={{ backgroundColor: 'gold' }} />
        ) : (
          <CoinsTable
            dataSource={handleSearch().slice(
              (page - 1) * 10,
              (page - 1) * 10 + 10
            )}
            actions={(symbol) => <AddCoin symbol={symbol} />}
          />
        )}
      </TableContainer>

      {/* Comes from @material-ui/lab */}
      <Pagination
        count={parseInt((handleSearch()?.length / 10).toFixed(0))}
        style={{
          padding: 20,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
        classes={{ ul: classes.pagination }}
        onChange={(_, value) => {
          setPage(value)
          window.scroll(0, 450)
        }}
      />
    </Container>
  )
}
