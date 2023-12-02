import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Divider,
  Avatar,
  Grid,
  useTheme,
} from "@mui/material"
import { Header } from "../components/Header.jsx"
import millify from "millify"
import { Link } from "react-router-dom"
import { useGetCryptoApiQuery } from "../services/cryptoApi.js"
import { useState } from "react"
import { tokens } from "../theme.js"

export function CryptoCurrencies({ simplified }) {
  const count = simplified ? 10 : 100
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const {
    data: cryptosList,
    error,
    isLoading,
    isFetching,
  } = useGetCryptoApiQuery(count)

  console.log(count)

  // const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)

  if (error) {
    return "Error"
  }

  if (isFetching) {
    return "...loading"
  }
  if (isLoading) {
    return "...loading"
  }

  const cryptos = cryptosList.data.coins

  console.log(simplified)

  return (
    <Box sx={!simplified ? {margin: 3} : ""}>
      {!simplified && (
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header
            title="CRYPTO CURRENCIES"
            subtitle="All informations related to currencies"
          />
        </Box>
      )}

      {cryptos && (
        <Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 4, md: 8, lg: 12, xl: 16 }}
            >
              {cryptos.map((currency) => (
                <Grid
                  item
                  xs={4}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                  key={currency.uuid}
                >
                  <Link
                    to={`crypto/${currency.uuid}`}
                    style={{ textDecoration: "none" }}
                  >
                    <CardActionArea>
                      <Card
                        sx={{
                          backgroundColor: colors.primary[400],
                          backgroundImage: "unset",
                          padding: 2,
                        }}
                      >
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          mb={2}
                        >
                          <Typography variant="h5" component="div">
                            {currency.rank}. {currency.name}
                          </Typography>
                          <Avatar
                            alt={`Icon ${currency.name}`}
                            src={currency.iconUrl}
                          />
                        </Box>
                        <Divider />
                        <CardContent>
                          <Typography variant="body1" color="text.secondary">
                            Price: {millify(currency.price)}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            Market Cap: {millify(currency.marketCap)}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            Daily Change: {currency.change}%
                          </Typography>
                        </CardContent>
                      </Card>
                    </CardActionArea>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      )}
    </Box>
  )
}
