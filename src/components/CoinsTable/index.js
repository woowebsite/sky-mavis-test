import React, { useState } from 'react'
import { TableCell, TableBody, TableRow, TableHead, Table } from '@mui/material'
import { numberWithCommas } from 'utils/formatUtil'
import { tableStyles } from './styled'

export default function CoinsTable({ dataSource, actions }) {
  const classes = tableStyles()
  const [showActionId, setShowActionId] = useState(-1)

  return (
    <Table aria-label='simple table'>
      <TableHead style={{ backgroundColor: '#EEBC1D' }}>
        <TableRow>
          {['Symbol', 'Price', 'Change% 24h', 'Volumn'].map((head) => (
            <TableCell
              style={{
                color: 'black',
                fontWeight: '700',
              }}
              key={head}
              align={head === 'Symbol' ? 'left' : 'right'}
            >
              {head}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {dataSource.map((row) => {
          const profit = row.price_change_percentage_24h > 0
          return (
            <TableRow
              className={classes.row}
              key={row.name}
              onMouseEnter={() => {
                setShowActionId(row.id) // set id here
              }}
              onMouseLeave={() => setShowActionId(-1)}
            >
              <TableCell component='th' scope='row'>
                <div
                  style={{
                    display: 'flex',
                    gap: 15,
                  }}
                >
                  <img
                    src={row?.image}
                    alt={row.name}
                    height='50'
                    style={{ marginBottom: 10 }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span
                      style={{
                        textTransform: 'uppercase',
                        fontSize: 22,
                      }}
                    >
                      {row.symbol}
                    </span>
                    <span style={{ color: 'darkgrey' }}>{row.name}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell align='right'>
                $ {numberWithCommas(row.current_price.toFixed(2))}
              </TableCell>
              <TableCell
                align='right'
                style={{
                  color: profit > 0 ? 'rgb(14, 203, 129)' : 'red',
                  fontWeight: 500,
                }}
              >
                {profit && '+'}
                {row.price_change_percentage_24h.toFixed(2)}%
              </TableCell>
              <TableCell align='right'>
                $ {numberWithCommas(row.market_cap.toString().slice(0, -6))}M
              </TableCell>
              {actions && (
                <TableCell align='center' className={classes.actionCell}>
                  {row.id === showActionId ? (
                    <span className={classes.actionIcon}>
                      {actions(row.symbol)}
                    </span>
                  ) : (
                    ''
                  )}
                </TableCell>
              )}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
