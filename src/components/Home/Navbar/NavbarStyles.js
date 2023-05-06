import { styled, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

export const NavBox = styled(Box)`
  margin-left: auto;
  margin-right: 60px;
  display: flex;
  & > a {
    text-decoration: none;
    font-family: "Rajdhani", Sans-serif;
    font-size: 1.125rem;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
    padding: 15px 30px;
  }
  & > a.active {
    text-decoration: none;
    font-family: "Rajdhani", Sans-serif;
    font-size: 1.125rem;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
    padding: 15px 30px;
    border: 1px solid green;
  }
  & > a :hover {
    font-weight: 600;
    border-bottom: 2px solid purple;
    border: 1px solid red;
  }
  @media (max-width: 1000px) {
    margin-right: 20px;
  }
  @media (max-width: 800px) {
    margin-right: 50px;
  }
  @media (max-width: 500px) {
    margin-right: 10px;
  }
`;
