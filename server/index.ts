import * as alt from "alt-server";
import { PluginSystem } from "@AthenaServer/systems/plugins";
import { INDEX_CONFIG } from "../shared/config";

PluginSystem.registerPlugin(INDEX_CONFIG.PLUGIN_NAME, () => {

  alt.log(`~lg~[PLUGIN] ==> ${INDEX_CONFIG.PLUGIN_NAME} V.${INDEX_CONFIG.VERSION} - Athena V.${INDEX_CONFIG.ATHENA_VERSION} successfully loaded.(~w~Authors: ${INDEX_CONFIG.AUTHORS.join(", ")}~lg~)`);

});
