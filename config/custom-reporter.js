import fs from "fs";
import path from "path";

export default class CustomHtmlReporter {
  constructor() {
    this.results = [];
  }

  onBegin(config, suite) {
    console.log(`Starting the run with ${suite.allTests().length} tests`);
    this.startTime = new Date();
  }

  onTestEnd(test, result) {
    this.results.push({
      title: test.title,
      status: result.status,
      duration: result.duration,
      error: result.error ? result.error.message : null,
    });
  }

  onEnd(result) {
    const endTime = new Date();
    const duration = (endTime - this.startTime) / 1000;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Playwright Custom Test Report</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; background-color: #f9f9f9; }
    h1 { color: #333; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
    th { background-color: #444; color: #fff; }
    tr:nth-child(even) { background-color: #f2f2f2; }
    .passed { color: green; font-weight: bold; }
    .failed { color: red; font-weight: bold; }
    .skipped { color: orange; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Playwright Custom Test Report</h1>
  <p><strong>Total Tests:</strong> ${this.results.length}</p>
  <p><strong>Passed:</strong> ${this.results.filter(r => r.status === "passed").length}</p>
  <p><strong>Failed:</strong> ${this.results.filter(r => r.status === "failed").length}</p>
  <p><strong>Skipped:</strong> ${this.results.filter(r => r.status === "skipped").length}</p>
  <p><strong>Total Duration:</strong> ${duration}s</p>

  <table>
    <tr>
      <th>Test Name</th>
      <th>Status</th>
      <th>Duration (ms)</th>
      <th>Error (if any)</th>
    </tr>
    ${this.results.map(r => `
      <tr>
        <td>${r.title}</td>
        <td class="${r.status}">${r.status.toUpperCase()}</td>
        <td>${r.duration}</td>
        <td>${r.error || ""}</td>
      </tr>
    `).join("")}
  </table>
</body>
</html>
`;

    const reportPath = path.join(process.cwd(), "custom-report.html");
    fs.writeFileSync(reportPath, htmlContent);
    console.log(`✅ Custom HTML report generated: ${reportPath}`);
  }
}
