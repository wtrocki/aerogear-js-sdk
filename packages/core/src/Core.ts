
import find from "lodash.find";
import { AeroGearConfiguration, ServiceConfiguration } from "./config";
import { configReader } from "./platform";

/**
 * AeroGear services core instance
 */
export class AgsCore {

  protected readonly configurations: ServiceConfiguration[];

  /**
   * @param config - top level configuration that will be send from server.
   */
  constructor(name: string = "mobile-config.json") {
    const config = configReader(name);
    this.configurations = config.services || [];
  }

  /**
   * Get a service configuration object, provided an existing type is given
   * @param type - The type of the service
   */
  public getConfigByType(type: string): ServiceConfiguration[] | undefined {
    return this.configurations.filter(service => service.type.toLowerCase() === type.toLowerCase());
  }

  /**
   * Get a service configuration object, provided an existing id is given
   * @param id - unique id of the service
   */
  public getConfigById(id: string): ServiceConfiguration | undefined {
    return find(this.configurations, service => service.id.toLowerCase() === id.toLowerCase());
  }

}

export let core = new AgsCore();
