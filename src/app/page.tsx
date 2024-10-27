import Header from "./components/header/Header";
import Footer from "./components/Footer/footer";
import Hero from "./components/hero/hero";



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