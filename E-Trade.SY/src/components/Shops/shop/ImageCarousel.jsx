//mui
import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Carousel from "react-material-ui-carousel";

//utils
import { BASEURL } from "../../../utils/axios-utils";

export default function ImageCarousel({ images }) {
  return (
    <Box
      sx={{
        borderRadius: "12px",
        width: "100%",
        height: "100%",
        marginBottom: 4,
      }}
    >
      <Carousel animation="slide" duration={2000} interval={4000} height={400}>
        {images?.map((image, i) => (
          <Box key={i} mx={2}>
            <CardMedia
              image={`${BASEURL}/images/products/${image}`}
              sx={{
                height: 400,
                width: "100%",
                borderRadius: "12px",
              }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
