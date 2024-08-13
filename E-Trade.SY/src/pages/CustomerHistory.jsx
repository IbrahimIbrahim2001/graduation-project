import { Box, List, Toolbar } from "@mui/material";

import Loader from "../components/UI/Loader";

import CustomerOrderComponent from "../components/customerHistory/CustomerOrderComponent";
import { useThemeContext } from "../context/ThemeModeProvider";
import { useFetchCustomerHistory } from "../hooks/useFetchCustomerHistory";

export default function CustomerHistory() {
  const { darkMode } = useThemeContext();
  const { data, isLoading, isRefetching } = useFetchCustomerHistory();

  const reviewedProductIds = new Set(
    data && data.length > 0
      ? data.filter((item) => item.isRating === 2).map((item) => item.productId)
      : []
  );

  if (isLoading || isRefetching) return <Loader />;

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
          {data.length > 0
            ? data?.map((ele) => (
                <CustomerOrderComponent
                  key={ele.productId}
                  ele={ele}
                  darkMode={darkMode}
                  reviewedProductIds={reviewedProductIds}
                />
              ))
            : "no orders yet"}
        </List>
      </Box>
    </>
  );
}
