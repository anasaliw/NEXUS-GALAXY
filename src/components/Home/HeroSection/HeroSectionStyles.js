import { Button, styled, Typography, Box, keyframes } from "@mui/material";

export const ColoredTitle = styled("span")`
  font-size: 70px;
  color: #af56c5;
  font-family: Rajdhani;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -3px;
  height: 89px;
  overflow-y: hidden !important;
  position: absolute;
  @media (max-width: 900px) {
    font-size: 40px;
  }
`;
export const ColoredTitle2 = styled(Typography)`
  font-size: 70px;
  color: #af56c5;
  font-family: Rajdhani;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -3px;
  height: 89px;
  overflow-y: hidden !important;
  /* position: absolute; */
  @media (max-width: 900px) {
    font-size: 40px;
  }
`;
export const Title = styled("span")`
  font-size: 70px;
  color: #fafafa;
  font-family: "Rajdhani";
  font-weight: 700;
  line-height: 120%;
  @media (max-width: 900px) {
    font-size: 40px;
    letter-spacing: 0px;
  }
`;
export const Para = styled(Typography)`
  font-size: 18px;
  color: #ffffff;
  font-family: "Ubuntu";
  font-weight: 300;
  line-height: 160%;
  background-color: transparent;
  @media (max-width: 900px) {
    font-size: 16px;
    letter-spacing: 0px;
  }
`;
export const Btn = styled(Button)`
  text-transform: none;
  height: 45px;
  width: 250px;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  font-family: "Roboto";
  font-weight: 400;
  background-color: #af56c5;
  border-radius: 20px;
  @media (max-width: 700px) {
    margin: 0 auto;
  }
`;
export const ParentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down(700)]: {
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export const LeftContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.down(700)]: {
    textAlign: "center",
    marginTop: "30px",
  },
}));
export const RightContainer = styled(Box)(({ theme }) => ({
  width: "70%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "relative",

  [theme.breakpoints.down(700)]: {
    width: "100%",
    textAlign: "center",
  },
}));
export const Image = styled("img")(({ theme }) => ({
  width: "400px",
  height: "400px",
  borderRadius: "100%",
  marginLeft: "30px",
  border: "30px solid #A753BD",
  backgroundColor: "#A753BD",
  transition: "1s",
  animationName: "pic",
  animationDuration: "1s",

  [theme.breakpoints.down(950)]: {
    width: "300px",
    height: "300px",
    marginLeft: "0px",
  },
  [theme.breakpoints.down(450)]: {
    width: "250px",
    height: "250px",
  },
}));

export const GradientImage = styled("img")(({ theme }) => ({
  width: "50px",
  height: "10px",

  [theme.breakpoints.down(700)]: {
    margin: "0px auto",
  },
}));
