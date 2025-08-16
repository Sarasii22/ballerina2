import React from 'react';

function Pricing() {
  return (
    <div>
      <h1>Pricing Plans</h1>
      <div className="pricing-plans">
        <div className="plan">
          <h3>Free Demo</h3>
          <p>Basic access with limited scans.</p>
          <p>$0/month</p>
        </div>
        <div className="plan">
          <h3>Enterprise Tier</h3>
          <p>Unlimited scans, real-time alerts, custom integrations.</p>
          <p>Contact for pricing</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;