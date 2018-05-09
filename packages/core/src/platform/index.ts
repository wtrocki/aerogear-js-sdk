import { isMobileCordova } from "./PlatformUtils";
import console from "loglevel";
import {AeroGearConfiguration} from "../config";
/**
 *
 * @param configName name of the configuration file
 */
export function configReader(configName: string): AeroGearConfiguration | undefined {
  if (isMobileCordova) {
    // FIXME place actual location reader.
    // Currently project root.
    return require("../../" + configName);
  } else {
    console.error("Missing configuration for AeroGear Services SDK");
  }
}
