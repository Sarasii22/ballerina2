import React, { useState } from 'react';

function Demo() {
  const [file, setFile] = useState(null);
  const [scanResults, setScanResults] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleScan = () => {
    if (!file) return;

    // Mock AI scan: In real app, send to backend/Ballerina API
    const mockResults = [
      { rule: 'Updated KYC requirements for Singapore', status: 'Gap Detected', process: 'Onboarding' },
      { rule: 'AML monitoring frequency increased', status: 'Compliant', process: 'Transactions' },
    ];
    setScanResults(mockResults);

    const mockAlerts = ['Alert: New KYC rule requires immediate update to onboarding workflow.'];
    setAlerts(mockAlerts);
  };

  const handleGenerateReport = () => {
    // Mock report generation: Create a simple text file download
    const reportContent = 'Audit Report\n\nDetected Rules:\n' + scanResults.map(r => `${r.rule} - ${r.status}`).join('\n');
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'audit-report.txt'; // Use .pdf if you add jsPDF
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="demo-container">
      <h1>Live Demo</h1>
      <div className="upload-section">
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button onClick={handleScan} className="cta-button">Scan Regulation</button>
      </div>
      {alerts.length > 0 && (
        <div>
          <h2>Alerts</h2>
          {alerts.map((alert, index) => (
            <div key={index} className="alert">{alert}</div>
          ))}
        </div>
      )}
      {scanResults.length > 0 && (
        <div className="results-section">
          <h2>Detected Rules & Compliance Status</h2>
          <table>
            <thead>
              <tr>
                <th>Rule</th>
                <th>Status</th>
                <th>Process</th>
              </tr>
            </thead>
            <tbody>
              {scanResults.map((result, index) => (
                <tr key={index}>
                  <td>{result.rule}</td>
                  <td className={result.status === 'Compliant' ? 'status-green' : 'status-red'}>{result.status}</td>
                  <td>{result.process}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleGenerateReport} className="cta-button" style={{ marginTop: '20px' }}>Generate Audit Report</button>
        </div>
      )}
    </div>
  );
}

export default Demo;