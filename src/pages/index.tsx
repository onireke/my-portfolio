import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Abdulfatah from "./Abdulfatah";
import About from "./About";

const Home: NextPage = () => {
  return (
    <div>
      <Abdulfatah />
      <About />
    </div>
  );
};

export default Home;
