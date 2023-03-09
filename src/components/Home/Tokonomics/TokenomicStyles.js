import { Typography, styled, Box } from "@mui/material";

export const ParentBox = styled(Box)(({ theme }) => ({
  padding: "100px 60px 50px 60px",
  [theme.breakpoints.down(1000)]: {
    padding: "100px 20px 50px 20px",
  },
}));
export const ListBox = styled(Box)(({ theme }) => ({
  minHeight: "60px",
  marginTop: "25px",
  backgroundColor: "#041420",
  display: "flex",
  alignItems: "center",
  padding: "15px 30px 15px 5px",
  [theme.breakpoints.down(1150)]: {
    minHeight: "75px",
  },
  [theme.breakpoints.down(1050)]: {
    minHeight: "85px",
  },
  [theme.breakpoints.down(800)]: {
    minHeight: "95px",
  },
  [theme.breakpoints.down(700)]: {
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    "& > div": {
      marginBottom: "10px",
      "& > p": {
        marginBottom: "10px",
      },
    },
  },
}));
export const MainContentBox = styled(Box)(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.down(700)]: {
    flexDirection: "column",
  },
}));
export const CardChildBox = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "15px 15px 0px 15px",

  [theme.breakpoints.down(700)]: {
    margin: "0px",
  },
}));
export const ImageBox = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: "40px",
  backgroundColor: "#0A1F2F",

  [theme.breakpoints.down(1050)]: {
    width: "70%",
  },
  [theme.breakpoints.down(700)]: {
    textAlign: "center",
    width: "100%",
  },
}));
export const CardMainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  marginRight: "20px",
  marginTop: "16px",

  [theme.breakpoints.down(700)]: {
    flexDirection: "column",
  },
}));
export const Image = styled("img")(({ theme }) => ({
  width: "521px",
  height: "468px",

  [theme.breakpoints.down(1050)]: {
    width: "421px",
    height: "368px",
  },
  [theme.breakpoints.down(850)]: {
    width: "321px",
    height: "268px",
  },
}));

export const HeadTitle = styled(Typography)`
  color: #cc5dd1;
  font-family: "Rajdhani", Sans-serif;
  font-size: 25px;
  font-weight: 500;
`;
export const Title = styled(Typography)`
  color: #ffffff;
  font-family: "Rajdhani", Sans-serif;
  font-size: 44px;
  font-weight: 700;
`;
export const CardTitle = styled(Typography)`
  font-family: "Rajdhani", Sans-serif;
  font-size: 18px;
  color: #d1d1d1;
  font-weight: 500;
  line-height: 18px;
`;
export const CardSubTitle = styled(Typography)`
  color: #ffffff;
  font-family: "Rajdhani", Sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`;
