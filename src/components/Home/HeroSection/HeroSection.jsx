import { Box, IconButton, styled } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NexusGalaxy from "./NexusGalaxy";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HeaderBox = styled(Box)`
  min-height: 80vh;
  padding: 150px 60px 50px 60px;
  background-image: url("assets/Images/bg.webp");
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 800px) {
    padding: "150px 20px 50px 20px";
  }
  @media (max-width: 450px) {
    padding: 150px 5px 50px 5px;
  }
`;

function HeroSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const DataList = [
    {
      title: "About",
      coloredTitle: "Nexus Galaxy",
      paragraph:
        "Nexus Galaxy is an Eco-System consist of Deflationary Token,Multi-Chain NFT Marketplace, Freelancing Platform, Cross-Chain Messaging protocol (Pool-based bridge), Metaverse, P2E Games, and much more……",
      img: "assets/Images/nexus-galaxy.jpg",
    },
    {
      upperTitle: "Multi-Chain ",
      title: "NFT",
      coloredTitle: "Marketplace",
      paragraph:
        "Nexus Galaxy has a Multi-Chain NFT Marketplace like on BSC, ETH, MATIC and etc..... with a 0% transection fee on all chains with more benefits.......",
      img: "assets/Images/nexus-mobile.png",
    },
    {
      title: "Freelancing",
      coloredTitle: "Platform",
      paragraph:
        "An amazing platform for the professionals to sell and buy their services in a more secure environment with a low service charges",
      img: "assets/Images/nft-marketplace.png",
    },
    {
      title: "Pool Based",
      coloredTitle: "Bridge",
      paragraph:
        "A cross-chain messaging protocol (Pool-based bridge) lower gas fees & fast transactions.",
      img: "assets/Images/eth-to-eth.png",
    },
    {
      title: "P2E",
      coloredTitle: "Games",
      paragraph: "Fantastic place to plat games and earn in native tokens.",
      img: "assets/Images/nexusgame.png",
    },
  ];
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          top: { lg: "30px", md: "-30px", sm: "-0px", xs: "10px" },
        }}
      >
        <IconButton
          onClick={() => previous()}
          sx={{
            backgroundColor: "#A753BD",
            marginRight: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px 5px 8px 11px",
          }}
        >
          <ArrowBackIosIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton onClick={() => next()} sx={{ backgroundColor: "#A753BD" }}>
          <ArrowForwardIosIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
    );
  };

  return (
    <HeaderBox id='hero'>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        customTransition='all 1s'
        transitionDuration={2500}
        containerClass='carousel-container'
        removeArrowOnDeviceType={["", ""]}
        // renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        arrows={false}
        renderButtonGroupOutside={true}
      >
        {DataList.map((data, index) => (
          <NexusGalaxy
            key={index}
            title={data.title}
            coloredTitle={data.coloredTitle}
            upperTitle={data?.upperTitle}
            paragraph={data.paragraph}
            images={data.img}
          />
        ))}
      </Carousel>
    </HeaderBox>
  );
}

export default HeroSection;
