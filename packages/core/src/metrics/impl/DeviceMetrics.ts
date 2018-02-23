 import {Metrics} from '../Metrics';
 import {MetricsData} from '../MetricsPublisher';
/**
 * Collect device metrics:
 *
 *  - platform - ios
 *  - platformVersion - version of the ios platform
 *  - device - device name
 */
 export class DeviceMetrics implements Metrics {
  public identifier: string = 'device';
  public collect(): MetricsData {
    return new MetricsData([
      'platform': 'js',
      'platformVersion': 1,
      'device': 'TODO - cordova wrapper'
  ]);
}
