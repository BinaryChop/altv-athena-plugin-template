import * as alt from "alt-server";
import * as Athena from '@AthenaServer/api';
import { INDEX_CONFIG } from "../shared/config";


// Athena.systems.plugins.registerPlugin(PLUGIN_NAME, onLoad);

Athena.systems.plugins.registerPlugin(INDEX_CONFIG.PLUGIN_NAME, () => {

  /* if (!alt.debug) {
        alt.log(`~lr~CORE ==> ${PLUGIN_NAME} can only be loaded in debug mode.`);
        return;
    } */
  alt.log(`~lg~[PLUGIN] ==> ${INDEX_CONFIG.PLUGIN_NAME} V.${INDEX_CONFIG.VERSION} - Athena V.${INDEX_CONFIG.ATHENA_VERSION} successfully loaded.(~w~Authors: ${INDEX_CONFIG.AUTHORS.join(", ")}~lg~)`);

});
