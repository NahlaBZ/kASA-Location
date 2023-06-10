import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";



const Home = () => {
  return (
    <div>
      <Banner title="Chez vous, partout et ailleurs" class="backhome" />
      <Cards />
    </div>
  );
};

export default Home;