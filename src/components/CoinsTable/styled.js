import { makeStyles } from '@mui/styles'

export const tableStyles = makeStyles({
  '& .MuiTableCell-root': {
    color: 'inherit',
  },
  row: {
    cursor: 'pointer',
    fontFamily: 'Montserrat',
    position: 'relative',
  },
  actionCell: {
    position: 'absolute',
    display: 'flex',
    right: 0,
    top: 0,
    alignItems: 'center',
    height: '100%',
    padding: 0,
    borderBottom: 'none !important',
  },
  actionIcon: {
    display: 'flex',
    width: '60px',
    height: '60px',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#131111',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: '#2b2828',
    },
  },
  pagination: {
    '& .MuiPaginationItem-root': {
      color: 'gold',
    },
  },
})
