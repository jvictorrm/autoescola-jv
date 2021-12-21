import styled from "styled-components";
import { breakAt, BreakpointSizes } from "styles/Breakpoints";

export const CalloutRoot = styled.div`
  display: flex;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-left: 3px solid ${(props) => props.theme.colors.primary.main};
  border-radius: 4px;
  padding: 16px;
`;

export const CalloutBodyRoot = styled.div`
  flex: 1;

  h5,
  p {
    margin: 0 0 8px;
  }
`;

export const CalloutMediaRoot = styled.div`
  width: 30%;
  display: none;

  ${breakAt(BreakpointSizes.md)} {
    display: flex;
  }

  svg {
    color: ${(props) => props.theme.colors.primary.main};
    height: 100%;
    width: 100%;
    max-height: 200px;
  }
`;

export const CalloutActionsRoot = styled.div`
  padding-top: 8px;
`;
