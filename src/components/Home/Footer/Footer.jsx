import { Telegram, Twitter } from "@mui/icons-material";
import { Box, Link, styled } from "@mui/material";
import React from "react";
import { FooterParent, IconBox, BottomBox, BottomText } from "./FooterStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <FooterParent>
        <Box sx={{ textAlign: "center" }}>
          <img
            src='assets/logo/nexusLogo.png'
            alt='logo'
            style={{ width: "96px", height: "73px", marginBottom: "10px" }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              href='https://twitter.com/nxsgalaxy'
              target='_blank'
              style={{ textDecoration: "none", color: "#072432" }}
            >
              <IconBox sx={{ margin: "0px 5px" }}>
                <Twitter sx={{ padding: "5px 5px 1px 5px" }} />
              </IconBox>
            </Link>

            <Link
              href='https://t.me/nxsgalaxy'
              target='_blank'
              style={{ textDecoration: "none", color: "#072432" }}
            >
              <IconBox sx={{ margin: "0px 5px" }}>
                <Telegram sx={{ padding: "5px 5px 1px 5px" }} />
              </IconBox>
            </Link>
            <Link
              href='https://discord.com/invite/2fgdJ5wATu'
              target='_blank'
              style={{ textDecoration: "none", color: "#072432" }}
            >
              <IconBox
                sx={{ margin: "0px 5px", height: "34px", width: "34px" }}
              >
                <FontAwesomeIcon
                  className='icon'
                  style={{ padding: "7px 5px 1px 5px", height: "20px" }}
                  icon={faDiscord}
                />
              </IconBox>
            </Link>
            <Link
              href='https://www.facebook.com/NXSgalaxy?mibextid=ZbWKwL'
              target='_blank'
              style={{ textDecoration: "none", color: "#072432" }}
            >
              <IconBox
                sx={{ margin: "0px 5px", height: "34px", width: "34px" }}
              >
                <FontAwesomeIcon
                  className='icon'
                  style={{ padding: "7px 5px 1px 5px", height: "20px" }}
                  icon={faFacebook}
                />
              </IconBox>
            </Link>
            <Link
              href='https://www.instagram.com/nexus_galaxyofficial/?igshid=YmMyMTA2M2Y%3D'
              target='_blank'
              style={{ textDecoration: "none", color: "#072432" }}
            >
              <IconBox
                sx={{ margin: "0px 5px", height: "34px", width: "34px" }}
              >
                <FontAwesomeIcon
                  className='icon'
                  style={{ padding: "7px 5px 1px 5px", height: "20px" }}
                  icon={faInstagram}
                />
              </IconBox>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            border: "1px solid #8E8D8D",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        ></Box>
        <BottomBox>
          <BottomText>Nexus Galaxy © 2022 | All Rights Reserved</BottomText>
        </BottomBox>
      </FooterParent>
    </>
  );
}

export default Footer;
