import React from 'react'
import {
  Container,
  LinearProgress,
  Typography,
  TableContainer,
} from '@mui/material'
import { CryptoState } from 'context/CryptoContext'
import CoinsTable from 'components/CoinsTable'
import RemoveCoin from './RemoveCoin'

export default function WatchList() {
  const { coins, watchList, loading } = CryptoState()

  const watchListCoins = coins.filter((coin) =>
    watchList.includes(coin.symbol.toLowerCase())
  )

  return (
    <Container style={{ textAlign: 'center' }}>
      <Typography variant='h4' style={{ padding: 16 }}>
        My watch list
      </Typography>
      <TableContainer>
        {loading ? (
          <LinearProgress style={{ backgroundColor: 'gold' }} />
        ) : (
          <CoinsTable
            dataSource={watchListCoins}
            actions={(symbol) => <RemoveCoin symbol={symbol} />}
          />
        )}
      </TableContainer>
    </Container>
  )
}
