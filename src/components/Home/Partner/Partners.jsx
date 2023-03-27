import { Box } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
import { ParentBox, Title } from "../Tokonomics/TokenomicStyles";

const Partners = () => {
  return (
    <>
      <ParentBox>
        <Box
          sx={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <Title> PARTNERS</Title>

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

        {/* <Marquee pauseOnHover={true} gradient={false} speed={50}> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            "& > div": {
              m: { lg: 7, md: 7, sm: 3, xs: 3 },
            },
          }}
        >
          <Box sx={{ mr: "10px" }}>
            <a
              href='https://www.pinksale.finance'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='assets/Images/m1.png'
                alt='m1'
                style={{
                  marginRight: "10px",
                  height: "150px",
                  marginTop: "10px",
                }}
              />
            </a>
          </Box>
          <Box sx={{ mr: "10px" }}>
            <a
              href='https://www.dexview.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='assets/Images/m2.png'
                alt='m2'
                style={{
                  marginRight: "10px",
                  height: "150px",
                  marginTop: "10px",
                }}
              />
            </a>
          </Box>
          <Box sx={{ mr: "10px" }}>
            <a
              href='https://www.coinscope.co/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='assets/Images/m3.png'
                alt='m3'
                style={{
                  marginRight: "10px",
                  height: "150px",
                  marginTop: "10px",
                }}
              />
            </a>
          </Box>
        </Box>
        {/* </Marquee> */}
      </ParentBox>
    </>
  );
};

export default Partners;
