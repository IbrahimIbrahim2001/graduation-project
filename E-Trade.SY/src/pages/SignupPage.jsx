//images
import signup from "../assets/signup.png";

import { Box, Grid, Hidden, useMediaQuery } from "@mui/material";

//component
import { SignupContent } from "../components/Signup/SignupContent";

export const SignupPage = () => {
  const matchesXs = useMediaQuery("(min-width:500px)");
  const matchesSM = useMediaQuery("(min-width:600px) and (max-width:700px)");
  return (
    <Grid
      container
      justifyContent={"space-around"}
      alignitems={"center"}
      minHeight={"100vh"}
    >
      <Grid
        item
        xs={matchesXs ? 9 : 11}
        sm={matchesSM ? 8 : 7}
        md={4}
        lg={3}
        sx={{ alignSelf: "flex-start", paddingTop: { xs: 2, md: 5 } }}
      >
        <SignupContent />
      </Grid>
      <Hidden mdDown>
        {/* image component */}
        <Grid
          item
          md={7}
          lg={8}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={signup}
            sx={{ backgroundImage: "cover", borderRadius: "12px" }}
            width={"100%"}
            height={"90vh"}
          />
        </Grid>
      </Hidden>
    </Grid>
  );
};
