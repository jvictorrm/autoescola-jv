import styled from "styled-components";
import { breakAt, BreakpointSizes } from "styles/Breakpoints";

export const Root = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointSizes.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointSizes.lg)} {
    max-width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;
