import Hero from ".";
import { render } from "test-utils";

test("renders Hero with children", () => {
  const { getByText } = render(
    <Hero>
      <p>Jão</p>
    </Hero>
  );

  // debug(); para depurar a renderizacao do componente ao executar teste

  expect(getByText("Jão")).toBeInTheDocument();
});

test("renders image background", () => {
  const image = "http://test/image.jpg";
  const { getByTestId } = render(<Hero image={image} />);

  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});
