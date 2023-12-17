import { Alert, AlertTitle, Stack, Box } from "@mui/material"

// Error, warning, info, success
export default function AlertMessage({ type = "error", errors }) {
  return (
    <Box m={3}>
      <Stack sx={{ width: "100%" }} spacing={2}>
        {typeof errors === "string" && (
          <Alert severity={type} variant="filled">
            <AlertTitle>{type}</AlertTitle>
            {errors}
          </Alert>
        )}
        {typeof errors === "object" && (
          <Alert severity={type} variant="filled">
            <AlertTitle>{type}</AlertTitle>
            {errors ? errors?.data?.message ?? errors?.error : "undefined"}
          </Alert>
        )}
        {typeof errors === "array" &&
          errors.map((error, i) => (
            <Alert key={i} severity={type} variant="filled">
              <AlertTitle>{type}</AlertTitle>
              {error ? error?.data?.message ?? error?.error : "undefined"}
            </Alert>
          ))}
      </Stack>
    </Box>
  )
}
