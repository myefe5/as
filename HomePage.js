// components/HomePage.js
import React from 'react';

function HomePage() {
  return (
    <div>
      <section className="hero">
        <h1>Efe Yatırım</h1>
        <p>Your gateway to commission-free trading in Turkey.</p>
      </section>

      <section className="features">
        <h2>Why Choose Efe Yatırım?</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>0 Commission Trading</h3>
            <p>Trade stocks, ETFs, and more without any commission fees.</p>
          </div>
          <div className="feature">
            <h3>24/5 Trading</h3>
            <p>Access the markets nearly around the clock.</p>
          </div>
          {/* Add other features as needed */}
        </div>
      </section>

      <section className="comparison">
        <h2>Compare Us</h2>
        <table>
          <thead>
            <tr>
              <th>Platform</th>
              <th>Commission</th>
              <th>Trading Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Efe Yatırım</td>
              <td>0 TL</td>
              <td>24/5</td>
            </tr>
            <tr>
              <td>Other Firm 1</td>
              <td>Variable</td>
              <td>Limited</td>
            </tr>
            <tr>
              <td>Other Firm 2</td>
              <td>Fixed Fee</td>
              <td>Limited</td>
            </tr>
            {/* Add more comparisons */}
          </tbody>
        </table>
      </section>

      {/* Add featured assets, news snippets, etc. */}
    </div>
  );
}

export default HomePage;
