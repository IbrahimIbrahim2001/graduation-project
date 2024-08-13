import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import Loader from "../components/UI/Loader";

import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

import { useThemeContext } from "../context/ThemeModeProvider";
import { useFetchSellerNotification } from "../hooks/useFetchSellerNotification";
import { Fragment } from "react";

export default function SellerNotificationPage() {
  const { darkMode } = useThemeContext();
  const { data, isLoading } = useFetchSellerNotification();
  console.log(data);

  if (isLoading) return <Loader />;
  return (
    <>
      <Toolbar />
      <Box
        sx={{
          paddingY: 2,
          paddingX: { xs: 2, sm: 5, md: 10, lg: 25 },
        }}
      >
        <List disablePadding>
          {data?.map((ele) => (
            <Fragment key={ele.id}>
              {ele.customer_first ? (
                <>
                  <ListItemButton
                    sx={{
                      boxShadow: darkMode
                        ? "0 0 2px 0 #fff"
                        : "0 0px 2px 0 rgba(31, 38, 135, 0.37)",
                      my: 1,
                      borderRadius: "12px",
                    }}
                    disableTouchRipple
                  >
                    <ListItem disablePadding>
                      <ListItemAvatar>
                        <Avatar sx={{ backgroundColor: "#38cc38" }}>
                          <DoneOutlinedIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText>
                        <Typography>
                          customer name: {ele.customer_first}{" "}
                          {ele.customer_second}
                        </Typography>
                        <Typography>customer address: {ele.address}</Typography>
                        <Typography>customer phone: {ele.phone}</Typography>
                        <Typography>product Name: {ele.product}</Typography>
                        <Typography>order quantity: {ele.count}</Typography>
                      </ListItemText>
                    </ListItem>
                  </ListItemButton>
                </>
              ) : (
                <ListItemButton
                  sx={{
                    boxShadow: darkMode
                      ? "0 0 2px 0 #fff"
                      : "0 0px 2px 0 rgba(31, 38, 135, 0.37)",
                    my: 1,
                    borderRadius: "12px",
                  }}
                  disableTouchRipple
                >
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <Avatar sx={{ backgroundColor: "#38cc38" }}>
                        <DoneOutlinedIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      <Typography>
                        your product{" "}
                        <Typography
                          variant="span"
                          color="primary"
                          fontWeight="bold"
                        >
                          {ele.product}
                        </Typography>{" "}
                        quantity is less than 5, please consider to refill
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </ListItemButton>
              )}
            </Fragment>
          ))}
          {/* */}
        </List>
      </Box>
    </>
  );
}
