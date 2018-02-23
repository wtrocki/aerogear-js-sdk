
/**
 * Represents metrics data that can be sent by metrics interface
 */
export interface MetricsData {
  [indexer: string]: string;
}

/**
 * Interface for classes that can publish or store metrics payload
 */
export interface MetricsPublisher {
  /**
   * Allows to publish metrics to external source
   */
   publish(payload: MetricsData): void;
}
