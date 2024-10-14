import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "../app/components/Hero";


const  Home = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <Header  />
      <Hero    />
      <Footer  />
     
    </div>
  );
};
export default Home;