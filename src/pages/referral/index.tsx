import Contact from "../../components/_section/Referral/Contact";
import Detail from "../../components/_section/Referral/Detail";
import Hero from "../../components/_section/Referral/Hero";
import Navbar from "../../components/_section/Navbar";

export default function Referral() {
  return (
    <>
      <Navbar />

      <div className="px-20">
        <Hero />

        <Contact />

        <Detail />
      </div>
    </>
  );
}
