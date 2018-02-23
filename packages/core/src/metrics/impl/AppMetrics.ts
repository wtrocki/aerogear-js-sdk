import Foundation

/**
 * Collect application metrics:
 *
 *  - appId - application bundle id
 *  - appVersion - version of the applicatoon
 *  - sdkVersion - AeroGear Services SDK version
 */
export class AppMetrics implements Metrics {
  public identifier: string = 'app';
  public collect(): MetricsData {
    return new MetricsData([
      "appId": 1,
      "appVersion": 1,
      "sdkVersion": 1
  ]);
}
