import Header from './components/Header';
import Hero from './components/Hero';
import DemoVideo from './components/DemoVideo';
import HowItWorks from './components/HowItWorks';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <DemoVideo />
      <HowItWorks />
      <WaitlistForm />
      <Footer />
    </div>
  );
}

export default App;