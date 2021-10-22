import styled from "styled-components";
import { breakAt, BreakpointSizes } from "styles/Breakpoints";

const getPrimaryColor = ({ theme }) => theme.colors.primary.main;

export const Root = styled.div`
  text-align: center;

  & > h5 {
    background-color: gray;
    margin: 16px 0;
    min-height: 3.12rem;

    ${breakAt(BreakpointSizes.lg)} {
      min-height: 3.9rem;
    }
  }

  & > p {
    margin: 0;
  }
`;

export const IconRoot = styled.div`
  display: inline-block;
  width: 116px;
  height: 116px;
  padding: 8px;
  border-radius: 50%;

  &:hover {
    border: 1px solid ${getPrimaryColor};

    > * {
      color: #fff;
      background-color: ${getPrimaryColor};
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e9e9e9;
  border-radius: 50%50%;
  font-size: 2rem;
  width: 100%;
  height: 100%;
  color: ${getPrimaryColor};
`;
