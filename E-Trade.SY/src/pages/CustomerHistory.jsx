import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Rating,
  Toolbar,
} from "@mui/material";

import { useState } from "react";
import { useThemeContext } from "../context/ThemeModeProvider";
import { useRateProduct } from "../hooks/useRateProduct";

export default function CustomerHistory() {
  const { darkMode } = useThemeContext();
  const [value, setValue] = useState(0);

  const { mutate } = useRateProduct();
  return (
    <>
      <Toolbar />
      <Box
        sx={{
          paddingY: 2,
          paddingX: { xs: 2, sm: 5, md: 10, lg: 25 },
          minHeight: "87vh",
        }}
      >
        <List disablePadding>
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
            <ListItem
              disablePadding
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "space-between" },
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "start", sm: "center" },
              }}
            >
              <ListItemText primary={`product: iphone:`} />
              <ListItemText>
                <Rating
                  name="half-rating"
                  defaultValue={0}
                  precision={0.5}
                  value={parseFloat(value)}
                  onChange={(e) => setValue(e.target.value)}
                />
              </ListItemText>
              <Button
                type="submit"
                variant="outlined"
                color="warning"
                onClick={() => mutate({ productId: 11, rate: value })}
              >
                submit rating
              </Button>
            </ListItem>
          </ListItemButton>
        </List>
      </Box>
    </>
  );
}
