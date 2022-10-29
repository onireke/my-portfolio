import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Abdulfatah from "./Abdulfatah";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Abdulfatah />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
