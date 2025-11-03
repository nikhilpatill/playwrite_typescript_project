import { Reporter, TestCase, TestResult, FullConfig, Suite, FullResult } from '@playwright/test/reporter';
import fs from 'fs';
import path from 'path';

class CustomJsonReporter implements Reporter {
  private results: any[] = [];
  private startTime: Date | number | null = null;
  private endTime: Date | number | null = null;
  

  onBegin(config: FullConfig, suite: Suite): void {
    this.startTime = Date.now();
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    
    this.results.push({
      title: test.title,
       fulltitle: test.titlePath().join(' > '),
      status: result.status,
      duration: result.duration,
        error: result.error ?{
        message: result.error.message,
        stack: result.error.stack
      } : undefined,
      tag : test.annotations.filter(a => a.type === 'tag').map(a => a.description),
        
    });
  }

  async onEnd(result: FullResult) {
    this.endTime = new Date();
    const output= {
      startTime: this.startTime,
      endTime: this.endTime,
      results: this.results
    };

    const outputPath = path.join(process.cwd(), 'config', 'custom-test-report.json ');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
    console.log(`Custom JSON report generated at: ${outputPath}`);
  }
}

export default CustomJsonReporter;

  