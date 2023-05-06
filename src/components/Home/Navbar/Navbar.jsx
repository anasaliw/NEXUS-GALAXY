import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  styled,
  Toolbar,
  useMediaQuery,
  Link,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { NavBox } from "./NavbarStyles";
import DrawerFile from "./DrawerFile";

const Image = styled("img")(({ theme }) => ({
  height: "102px",
  width: "135px",
  paddingLeft: 70,
  [theme.breakpoints.down(800)]: {
    paddingLeft: "50px",
  },
  [theme.breakpoints.down(500)]: {
    paddingLeft: "10px",
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const responsive = useMediaQuery("(min-width:800px)");
  console.log(responsive);
  return (
    <>
      <AppBar elevation={0} sx={{ backgroundColor: "#0A1F2F" }}>
        <Toolbar sx={{ height: "102px" }}>
          <Image src='assets/logo/nexusLogo.png' alt='nexus-logo' />
          {responsive ? (
            <>
              <NavBox>
                <Link href='#hero'>HOME</Link>
                <Link href='#tokenomics'>TOKENOMICS</Link>
                <Link href='https://bridge.nexusgalaxy.io' target='_blank'>
                  BRIDGE
                </Link>
                <Link href='https://testnet.nexusgalaxy.io' target='_blank'>
                  NFT Marketplace
                </Link>
              </NavBox>
            </>
          ) : (
            <NavBox>
              <MenuIcon
                onClick={toggleDrawer}
                sx={{
                  "&:hover": {
                    color: "#A753BD",
                    cursor: "pointer",
                  },
                }}
              />
            </NavBox>
          )}
        </Toolbar>
      </AppBar>
      <DrawerFile open={open} toggleDrawer={toggleDrawer} />
    </>
  );
}

export default Navbar;
