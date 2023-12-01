import { Box } from "@mui/material"
import { Header } from "../components/Header.jsx"

export function CryptoDetails() {
  return (
    <Box m={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="CRYPTO DETAILS"
          subtitle="Informations related to a single currency"
        />
      </Box>
    </Box>
  )
}
