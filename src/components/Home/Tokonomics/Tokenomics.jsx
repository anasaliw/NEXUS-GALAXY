import { Box } from "@mui/material";
import React from "react";
import {
  CardSubTitle,
  CardTitle,
  HeadTitle,
  ParentBox,
  Title,
  ListBox,
  ImageBox,
  Image,
  MainContentBox,
  CardMainBox,
  CardChildBox,
} from "./TokenomicStyles";

const leftList = [
  { bgColor: "#00FF00", title: "Total Supply", subTitle: "1,000,000,000" },
  { bgColor: "#FF974B", title: "Pre Sale", subTitle: "1%" },
  { bgColor: "#05D39F  ", title: "Advisors and Ambassadors", subTitle: "5%" },
  { bgColor: "#E6115C  ", title: "Marketing", subTitle: "10%" },
  { bgColor: "#FFF369  ", title: "Development", subTitle: "10%" },
];
const rightList = [
  { bgColor: "#FF7981  ", title: "Private Sale", subTitle: "0.5%" },
  { bgColor: "#BC570E  ", title: "Liquidity", subTitle: "48.5%%" },
  {
    bgColor: "#4BFF91  ",
    title: "Partnership and Community Giveaway",
    subTitle: "5%",
  },
  { bgColor: "#BB05D3  ", title: "Team", subTitle: "10%" },
  { bgColor: "#05D39F", title: "Charity", subTitle: "10%" },
];

function Tokenomics() {
  return (
    <ParentBox id='tokenomics'>
      <Box sx={{ textAlign: "center" }}>
        <HeadTitle>Statistics</HeadTitle>
        <Title>Tokenomics</Title>
        <img
          style={{
            margin: "0px auto",
            height: "28px",
            width: "200px",
            marginTop: "20px",
          }}
          src='assets/Images/headImg.png'
          alt='headImage'
        />
      </Box>
      {/* //!Left Section */}
      <MainContentBox>
        <CardMainBox>
          {/* //!LeftCard */}
          <CardChildBox>
            {leftList.map((data, index) => (
              <ListBox key={index}>
                {/* // !color Box */}
                <Box
                  sx={{
                    height: "15px",
                    width: "15px",
                    backgroundColor: data.bgColor,
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                ></Box>

                <Box>
                  <CardTitle>{data.title}</CardTitle>
                  <CardSubTitle>{data.subTitle}</CardSubTitle>
                </Box>
              </ListBox>
            ))}
          </CardChildBox>

          {/* //!Right Card */}
          <CardChildBox>
            {rightList.map((data, index) => (
              <ListBox>
                {/* // !color Box */}
                <Box
                  sx={{
                    height: "15px",
                    width: "15px",
                    backgroundColor: data.bgColor,
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                ></Box>

                <Box>
                  <CardTitle>{data.title}</CardTitle>
                  <CardSubTitle>{data.subTitle}</CardSubTitle>
                </Box>
              </ListBox>
            ))}
          </CardChildBox>
        </CardMainBox>
        {/* //!Image */}
        <ImageBox>
          <Image src='assets/Images/graph.png' alt='graphImg' />
        </ImageBox>
        {/* //!Right Image Ends here */}
      </MainContentBox>
    </ParentBox>
  );
}

export default Tokenomics;
