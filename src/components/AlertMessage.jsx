import { Alert, AlertTitle, Stack, Box } from "@mui/material"

// Error, warning, info, success
export function AlertMessage({ type = "error", children }) {
  // const error = errorMessage?.data?.message || errorMessage?.error

  return (
    <Box m={3}>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity={type} variant="filled">
          <AlertTitle>{type}</AlertTitle>
          {/* {error.toString()} */} {children}
        </Alert>
      </Stack>
    </Box>
  )
}
