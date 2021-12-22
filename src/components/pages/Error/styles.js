import styled from "styled-components";

export const ErrorTitle = styled.h1`
  margin-top: 0;
`;

export const ImageContainer = styled.div`
  text-align: right;

  svg {
    width: 100%;
    max-width: 400px;
    height: auto;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

export const ErrorDescription = styled.p`
  margin: 32px 0;
  font-size: 1.2rem;
`;
