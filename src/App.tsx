import Header from './components/Header';
import Hero from './components/Hero';
import WhyJoin from './components/WhyJoin';
import HowItWorks from './components/HowItWorks';
import Testimonial from './components/Testimonial';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      {/* <WhyJoin /> */}
      <HowItWorks />
      {/* <Testimonial /> */}
      <WaitlistForm />
      <Footer />
    </div>
  );
}

export default App;