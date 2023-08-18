import Hero from "../components/_section/Home/Hero";
import HowItWorks from "../components/_section/Home/HowItWorks";
import Navbar from "../components/_section/Navbar";
import ReferralInfo from "../components/_section/Home/ReferralInfo";
import Share from "../components/_section/Home/Share";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="px-20">
        <Hero />

        <Share />

        <ReferralInfo />

        <HowItWorks />
      </div>
    </>
  );
}
