import type { NextPage } from "next";
import HomeDown from "../componenets/HomeComp/HomeDown";
import MenuPage from "../componenets/MenuPage";
const Home: NextPage = () => {
  return (
    <>
      <MenuPage title="Home" Comp={HomeDown} />
    </>
  );
};

export default Home;
