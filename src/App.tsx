/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ProblemSection from "./components/ProblemSection";
import CourseGrid from "./components/CourseGrid";
import HowItWorks from "./components/HowItWorks";
import Comparison from "./components/Comparison";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div className="noise-overlay" />

      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <ProblemSection />
        <CourseGrid />
        <HowItWorks />
        <Comparison />
        <Pricing />
        <Testimonials />
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
}
