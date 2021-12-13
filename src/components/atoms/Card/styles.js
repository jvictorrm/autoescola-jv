import styled from "styled-components";

export const Root = styled.div`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.border};
  overflow: hidden;
`;

export const Body = styled.div`
  padding: 16px;

  h5 {
    margin-top: 0;
  }
`;

export const Media = styled.div`
  display: flex;
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  height: 270px;
`;

export const MediaDescription = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 8px 16px;
  color: #fff;
  align-self: flex-end;
  flex: 1;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;
