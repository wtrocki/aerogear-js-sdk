import find from "lodash.find";
import console from "loglevel";
import { AeroGearConfiguration, ServiceConfiguration } from "./config";
import { MetricsService } from "./metrics";

/**
 * AeroGear services core class.
 * Defines internal api and helpers to be used by all top level SDK's
 */
export class AgsCore {

  public configurations?: ServiceConfiguration[];
  public metrics?: MetricsService;

  // Promise that is resolved when application is configured
  private configPromise: Promise<void>;
  // Helper function called when instance is configured
  private configured: any;

  public constructor() {
    this.configPromise = new Promise(resolve => {
      this.configured = resolve;
    });
  }

  /**
   * Allows to register config listener
   *
   * @param caller function that should be called when configuration is available
   */
  public onConfigAvailable(caller: () => void) {
    this.configPromise.then(caller);
  }

  /**
   * Initialize all AeroGear services SDK's
   *
   * @see @aerogear/app for top level user iterface
   *
   * @param config configuration that should be injected to all available SDK's
   */
  public init(config: AeroGearConfiguration): void {
    if (!config || !config.services || config.services.length === 0) {
      return console.error("Invalid configuration format for AeroGear SDK");
    }
    this.configurations = config.services;
    // Initialize internal SDK's
    this.metrics = new MetricsService();
    // Notify SDK's
    this.configured();
  }

  /**
   * Get a service configuration object, provided an existing type is given
   * @param type - The type of the service
   */
  public getConfigByType(type: string): ServiceConfiguration[] | undefined {
    if (this.configurations) {
      return this.configurations.filter(service => service.type.toLowerCase() === type.toLowerCase());
    }
    console.error("Configuration not initialized.");
  }

  /**
   * Get a service configuration object, provided an existing id is given
   * @param id - unique id of the service
   */
  public getConfigById(id: string): ServiceConfiguration | undefined {
    if (this.configurations) {
      return find(this.configurations, service => service.id.toLowerCase() === id.toLowerCase());
    }
    console.error("Configuration not initialized.");
  }

}

export let coreInstance = new AgsCore();
