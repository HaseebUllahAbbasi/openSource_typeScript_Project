import React from 'react';
import './App.css';
import {
  Clients, Stats, CTA, Footer, Testimonials, CardDeal, Business, Billing, Navbar, Hero
} from './components';

import styles from './styles';

function App() {
  return (
    <div className="App">
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />

          <Footer />
        </div>

      </div>
    </div>
  );
}

export default App;
