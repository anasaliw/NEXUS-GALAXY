import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import "./HeroStyles.css";
import {
  Btn,
  ParentBox,
  LeftContainer,
  RightContainer,
  Para,
  Title,
  Image,
  ColoredTitle,
  GradientImage,
  ColoredTitle2,
} from "./HeroSectionStyles";
import AOS from "aos";
import "aos/dist/aos.css";

function NexusGalaxy({
  title,
  upperTitle,
  coloredTitle,
  paragraph,
  images,
  name,
}) {
  const responsive = useMediaQuery("(min-width:1000px)");
  const responsive2 = useMediaQuery("(min-width:850px)");
  useEffect(() => {
    AOS.init({ duration: 1000 });

    console.log("effect");
  }, [name]);

  //   const responsive = useMediaQuery("(min-width:800px)");
  return (
    <ParentBox>
      <LeftContainer>
        <Box>
          <Title component='span'>{upperTitle}</Title>
          <Title component='span'>{title}</Title> &nbsp; &nbsp;
          {/* <br /> */}
          {responsive2 ? (
            <ColoredTitle component='span'>{coloredTitle}</ColoredTitle>
          ) : (
            <ColoredTitle2>{coloredTitle}</ColoredTitle2>
          )}
        </Box>
        <br />
        <GradientImage src='assets/Images/divider.svg' alt='divider' />
        <br />
        <br />
        <Para>{paragraph}</Para>
        <br />
        <br />
        <Btn>Pre Sale Coming Soon</Btn>
      </LeftContainer>

      <RightContainer>
        {responsive ? (
          <Box className='parentBox'>
            <Box
              sx={{
                height: "40px",
                width: "60px",
                borderRadius: "30px",
                backgroundColor: "#A753BD",
                marginRight: "10px",
              }}
            ></Box>
            <Box
              sx={{
                height: "40px",
                width: "150px",
                borderRadius: "30px",
                backgroundColor: "#A753BD",
              }}
            ></Box>
          </Box>
        ) : (
          ""
        )}

        <Box
          sx={{
            height: "auto",
            width: { lg: "500px" },
            display: "flex",
            alignItems: "center",
          }}
        >
          <img className='mainImage' src={images} alt='heroImg' />
          {/* <img src={images} alt='heroImg' /> */}
        </Box>
      </RightContainer>
    </ParentBox>
  );
}

export default NexusGalaxy;
