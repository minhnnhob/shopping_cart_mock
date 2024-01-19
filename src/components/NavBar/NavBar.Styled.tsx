import styled from "styled-components";
import { NavLink } from "react-router-dom";

const mobileBreakpoint = "576px";
const desktopBreakpoint = "1150px";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;

  @media (min-width: ${desktopBreakpoint}) {
    margin-left: 5.6rem;
    margin-right: 5.6rem;
  }

  @media (max-width: ${mobileBreakpoint}) {
  }
`;

export const NavLinksContainer = styled.div`
  @media (min-width: ${desktopBreakpoint}) {
    display: flex;
    width: 20%;
    justify-content: space-between;
    margin-left: 5.6rem;
  }

  @media (max-width: ${mobileBreakpoint}) {
    display: none;
  }
`;

export const NavLinkStyled = styled(NavLink)<{ isActive: boolean }>`
  font-size: 1.2rem;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  text-decoration: none;
  color: ${(props) => (props.isActive ? "black" : "gray")};

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 1rem;
  }
`;

export const Logo = styled.div`
  font-weight: 800;
  font-size: 1.5rem;
  color: #3b82f6;

  @media (max-width: ${desktopBreakpoint}) {
    margin-top: 0.5rem;
  }

  @media (max-width: ${mobileBreakpoint}) {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`;

export const CartIconContainer = styled.div`
  margin-right: 2rem;
  position: relative;

  @media (max-width: ${desktopBreakpoint}) {
    margin-right: 1rem;
  }

  @media (max-width: ${mobileBreakpoint}) {
    margin-right: 0;
    margin-top: 1rem;
  }
`;

export const CartIcon = styled.i`
  color: #3b82f6;
  font-size: 2rem;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 1.5rem;
  }
`;

export const CartItemCount = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${mobileBreakpoint}) {
    width: 18px;
    height: 18px;
    font-size: 0.8rem;
  }
`;
