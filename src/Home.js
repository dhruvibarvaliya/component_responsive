import Banner from "./Banner";
import Header from "./Header";
import List from "./List";
import Place from "./Place";
import Property from "./Property";
import Search from "./Search";
import Contactarea from "./Contactarea";
import Agent from "./Agent";
import Slider from "./Slider";
import Footer from "./Footer";

function Home() {
    return (
      <div>
        <Header/>
        <Banner/>
        <Search/>
        <Property/>
        <Place/>
        <List/>
        <Contactarea/>
        <Agent/>
        <Slider/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;