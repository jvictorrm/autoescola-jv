import GridContainer from ".";

export default {
  title: "Components/Atoms/GridContainer",
  component: GridContainer,
};

const Box = () => (
  <div style={{ height: 200, backgroundColor: "indigo" }}></div>
);

export const usage = () => (
  <GridContainer sm={2} md={3} lg={4} xl={5}>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
  </GridContainer>
);
