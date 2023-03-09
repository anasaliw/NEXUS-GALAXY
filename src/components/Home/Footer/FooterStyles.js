import { Box, styled, Typography } from "@mui/material";

export const FooterParent = styled(Box)`
  padding: 100px 0px 10px 0px;
  min-height: 38vh;
  background-image: url("assets/Images/footer-bg.webp");
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 450px) {
    padding: 100px 0px 10px 0px;
  }
`;
export const IconBox = styled(Box)`
  border: 1px solid #a753bd;
  border-radius: 5px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #a753bd;
    color: white;
  }
`;
export const BottomText = styled(Typography)`
  color: #e3e3e3;
  font-family: "Roboto", Sans-serif;
  font-weight: 400;
`;
export const BottomBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
}));
