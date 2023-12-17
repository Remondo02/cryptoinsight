import { Link } from "react-router-dom"
import {
  Box,
  Grid,
  Typography,
  Avatar,
  useTheme,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  List,
} from "@mui/material"
import { tokens } from "../theme.js"
import { getIcon } from "../utils/statsData.jsx"

function BaseListItem({ data, colors }) {
  return (
    <List disablePadding sx={{ backgroundColor: colors.primary[400] }}>
      {data.map((obj, i) => {
        const hasUrl = obj.hasOwnProperty("url")
        return hasUrl ? (
          <ListItem key={i} disablePadding divider={true}>
            <ListItemButton
              component={Link}
              to={obj.url}
              target="_blank"
              rel="noreferrer"
            >
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: colors.greenAccent[500] }}>
                  {getIcon(obj.type)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ display: "flex", justifyContent: "space-between" }}
                primary={obj.name}
              />
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem key={i} divider={true}>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: colors.greenAccent[500] }}>
                {obj.icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={{ display: "flex", justifyContent: "space-between" }}
              primary={obj.title}
              secondary={
                <Typography sx={{ color: colors.grey[100] }} fontWeight="bold">
                  {obj.value}
                </Typography>
              }
            />
          </ListItem>
        )
      })}
    </List>
  )
}

export default function SingleList({ title, subtitle, stats, links }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Grid item sm={12} md={6} lg={4}>
      <Box marginBottom={2}>
        <Typography
          sx={{ fontWeight: "bold" }}
          variant="h4"
          color={colors.greenAccent[500]}
          mb={1}
        >
          {title}
        </Typography>
        <Typography variant="h5" color={colors.grey[100]}>
          {subtitle}
        </Typography>
      </Box>
      {stats && <BaseListItem data={stats} colors={colors} />}
      {links && <BaseListItem data={links} colors={colors} />}
    </Grid>
  )
}
