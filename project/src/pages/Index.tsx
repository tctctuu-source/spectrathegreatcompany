import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Milestones from "@/components/Milestones";
import Services from "@/components/Services";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Milestones />
      <Services />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
