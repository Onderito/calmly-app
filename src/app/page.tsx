import Faq from "./landing/faq";
import HeroSection from "./landing/hero-section";
import PersonalMoment from "./landing/personal-moment";
import Pricing from "./landing/pricing";
import WhyCalmly from "./landing/why-calmly";

export default function Home() {
  return (
    <>
      <section className="container mx-auto px-2 py-16 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
        <HeroSection />
      </section>
      <section className="container mx-auto px-2 py-16 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
        <PersonalMoment />
      </section>
      <section className="container mx-auto px-2 py-8 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
        <WhyCalmly />
      </section>
      <section className="container mx-auto px-2 py-8 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
        <Pricing />
      </section>
      <section className="container mx-auto px-2 py-8 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
        <Faq />
      </section>
    </>
  );
}
