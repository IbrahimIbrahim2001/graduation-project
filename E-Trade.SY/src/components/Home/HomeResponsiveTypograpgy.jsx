import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const HomeResponsiveTypography = ({ text, spanText, etc }) => {
  const matchesXS = useMediaQuery("(max-width:600px)");
  const matchesSM = useMediaQuery("(min-width:600px) and (max-width:960px)");
  const matchesMD = useMediaQuery("(min-width:960px) and (max-width:1280px)");
  const matchesLG = useMediaQuery("(min-width:1280px)");

  let responsiveVariant; // default image
  if (matchesXS) {
    responsiveVariant = "h5"; // image for extra small devices
  } else if (matchesSM) {
    responsiveVariant = "h5"; // image for small devices
  } else if (matchesMD) {
    responsiveVariant = "h4"; // image for medium devices
  } else if (matchesLG) {
    responsiveVariant = "h3"; // image for large devices
  }
  return (
    <div style={{ whiteSpace: "pre-wrap" }}>
      <Typography
        variant={responsiveVariant}
        width={{ xs: 200, sm: "auto" }}
        height={{ xs: 150, sm: "auto" }}
      >
        {text}{" "}
        <Typography variant="span" color="#2200FF" backgroundColor={"yellow"}>
          {spanText}
        </Typography>{" "}
        {etc}
      </Typography>
    </div>
  );
};

export default HomeResponsiveTypography;
