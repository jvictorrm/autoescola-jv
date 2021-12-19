import BreadCrumb from ".";

export default {
  title: "Components/Atoms/BreadCrumb",
  component: BreadCrumb,
};

const items = [{ label: "Início", link: "/" }, { label: "Sobre" }];

export const usage = () => <BreadCrumb items={items} />;
