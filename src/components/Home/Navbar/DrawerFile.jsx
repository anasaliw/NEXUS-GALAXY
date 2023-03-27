import { Close } from "@mui/icons-material";
import {
  Drawer,
  Box,
  Typography,
  styled,
  Link,
  List,
  Divider,
} from "@mui/material";
import React from "react";

const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Rajdhani",
  fontStyle: "normal",
  fontWeight: "700",
  letterSpacing: "3px",
  fontSize: "20px",
  marginTop: "10px",
  marginLeft: "20px",
  lineHeight: "140%",
  textDecoration: "none",
  color: "#ffffff",
  cursor: "pointer",
  "&:hover": {
    color: "#A753BD",
  },
}));

function DrawerFile({ open, toggleDrawer }) {
  return (
    <Drawer
      anchor='top'
      open={open}
      onClose={toggleDrawer}
      PaperProps={{
        sx: {
          background: "transparent",
          height: "auto",
          backdropFilter: "blur(30px)",
        },
      }}
    >
      <Box
        sx={{
          marginTop: "10px",
          marginBottom: "10px",
          marginLeft: "auto",
          marginRight: "20px",
          color: "white",
          cursor: "pointer",
          borderRadius: "100%",
          textAlign: "center",
          padding: "5px 7px 1px 7px",
          transition: ".5s",

          "&:hover": {
            backgroundColor: "#A753BD",
          },
        }}
      >
        <Close onClick={toggleDrawer} />
      </Box>
      <Divider style={{ backgroundColor: "gray", marginBottom: "0px" }} />
      <List>
        <Link
          href='#hero'
          onClick={toggleDrawer}
          style={{ textDecoration: "none" }}
        >
          <Text style={{ padding: "0px 12px" }}>HOME</Text>
          <Divider style={{ backgroundColor: "gray" }} />
        </Link>
        <Link
          href='#tokenomics'
          style={{ textDecoration: "none" }}
          onClick={toggleDrawer}
        >
          <Text style={{ padding: "0px 12px" }}>TOKENOMICS</Text>
          <Divider style={{ backgroundColor: "gray" }} />
        </Link>

        {/* <Link href='#' target='_blank' style={{ textDecoration: "none" }}>
          <Text style={{ padding: "0px 12px" }}>Token</Text>
        </Link> */}
      </List>
    </Drawer>
  );
}

export default DrawerFile;
