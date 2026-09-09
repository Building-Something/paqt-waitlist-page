import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Problem from './components/Problem';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import WhyJoin from './components/WhyJoin';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink-950 font-sans text-slate-200">
      {/* Global atmosphere */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(100%_50%_at_50%_-10%,rgba(42,92,231,0.08),transparent)]" />
      <div className="noise pointer-events-none fixed inset-0 z-[2] opacity-[0.22]" />

      <CustomCursor />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <TrustStrip />
          <Problem />
          <Features />
          <HowItWorks />
          <WhyJoin />
          <WaitlistForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;