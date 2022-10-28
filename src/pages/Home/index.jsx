import React from "react";
import HeroArea from "../../components/Home/HeroArea";
import HowItWorkSection from "../../components/Home/HowItWork";
import EncourageCitizen from "../../components/Home/EncourageCitizen";
import NoCodeNftSection from "../../components/Home/NoCodeNftSection";
import PopularCollections from "../../components/Home/popularCollectionSection";
import FAQs from "../../components/Home/FAQSection";
import HomeModal from "../../components/Home/HomeModal";
import HomeHeader from "../../components/Home/HomeHeader";
import HomeFooter from "../../components/Home/HomeFooter";
const Home = () => {
  return (
    <React.Fragment>
      <HomeHeader />
      <HomeModal />
      <div className="container">
        <HeroArea />
        <NoCodeNftSection />
        <HowItWorkSection />
        <PopularCollections />
        <EncourageCitizen />
        <FAQs />
      </div>
      <HomeFooter />
    </React.Fragment>
  );
};

export default Home;
