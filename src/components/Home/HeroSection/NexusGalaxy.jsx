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
} from "./HeroSectionStyles";
import AOS from "aos";
import "aos/dist/aos.css";

function NexusGalaxy({ title, upperTitle, coloredTitle, paragraph, images }) {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  //   const responsive = useMediaQuery("(min-width:800px)");
  return (
    <ParentBox>
      <LeftContainer data-aos='fade-down'>
        <Box>
          <Title component='span'>{upperTitle}</Title>
          <Title component='span'>{title}</Title> &nbsp; &nbsp;
          <ColoredTitle component='span'>{coloredTitle}</ColoredTitle>
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
        <Box sx={{ height: "auto", width: "500px" }}>
          <img className='mainImage' src={images} alt='heroImg' />
        </Box>
      </RightContainer>
    </ParentBox>
  );
}

export default NexusGalaxy;
