import React from "react";

export default function BasicTroubleshooting() {
  return (
    <div className="page-container">
      <h1>Basic IT Troubleshooting</h1>

      <section>
        <h2>Common User Issues</h2>
        <ul>
          <li>Slow computer performance</li>
          <li>Wi-Fi connection drops or weak signal</li>
          <li>Printer not responding</li>
          <li>Application crashes or freezes</li>
        </ul>
      </section>

      <section>
        <h2>My Troubleshooting Approach</h2>
        <ul>
          <li>Identify symptoms and reproduce the issue</li>
          <li>Check system logs and error messages</li>
          <li>Verify network connectivity and hardware status</li>
          <li>Apply step-by-step isolation testing</li>
        </ul>
      </section>

      <section>
        <h2>Tools I Use</h2>
        <ul>
          <li>Linux CLI tools</li>
          <li>Process and memory monitoring</li>
          <li>Network diagnostics (ping, traceroute)</li>
          <li>System update and patch verification</li>
        </ul>
      </section>
    </div>
  );
}
