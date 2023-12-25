import { useState } from "react"
import { Box, Grid } from "@mui/material"
import { useGetCryptoApiQuery } from "../services/cryptoApi.js"
import { AlertMessage, Header, Loader, CryptoCard, Search } from "../components"

export default function CryptoCurrencies({ simplified }) {
  const count = simplified ? 12 : 100
  const {
    data: cryptosList,
    error,
    isFetching,
  } = useGetCryptoApiQuery(count)

  const [search, setSearch] = useState("")

  const styles = { height: "inherit" }

  const cryptos = cryptosList?.data?.coins || []

  const visibleItems = cryptos.filter((coin) => {
    if (search && !coin.name.toLowerCase().includes(search.toLowerCase())) {
      return false
    }
    return true
  })

  return (
    <Box sx={!simplified ? { margin: 3, ...styles } : { ...styles }}>
      {!simplified && (
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header
            title="CRYPTO CURRENCIES"
            subtitle="Top 100 cryptocurrencies"
          />
        </Box>
      )}
      {error && <AlertMessage type="error" errors={error} />}
      {isFetching ? (
        <Loader />
      ) : (
        visibleItems && (
          <>
            {!simplified && (
              <Search search={search} onSearchChange={setSearch} />
            )}
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 4, md: 8, lg: 12, xl: 16 }}
              >
                {visibleItems.map((currency, i) => (
                  <CryptoCard key={i} currency={currency} />
                ))}
              </Grid>
            </Box>
          </>
        )
      )}
    </Box>
  )
}
