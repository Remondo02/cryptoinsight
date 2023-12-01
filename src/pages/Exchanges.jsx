import { Box } from "@mui/material"
import { Header } from "../components/Header.jsx"

export function Exchanges() {
  return (
    <Box m={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="EXCHANGES" subtitle="Exchanges" />
      </Box>
    </Box>
  )
}
