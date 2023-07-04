import {readFile} from 'fs/promises';
import type {InputParams} from './get-inputs';

const JSCRAMBLER_CLIENT_ID = 7;

export default async function buildParamsFromInputs(params: InputParams) {
  let finalParams: any;
  if (params.jscramblerConfigPath !== undefined) {
    // Explicit parameters take precedence over config-specified parameters
    // Note: require(...) wouldn't work here -- ncc doesn't allow dynamically loading modules
    const configFile = await readFile(params.jscramblerConfigPath, 'utf-8');
    const configObject = JSON.parse(configFile);
    finalParams = {...configObject, ...params};
  } else {
    finalParams = params;
  }

  const {sourceMapsOutputPath, symbolTableOutputPath, sourceMaps, sourceMapsSourceContent} = params;

  if (sourceMaps) {
    finalParams.sourceMaps = {
      sourceContent: sourceMapsSourceContent
    };
  }

  delete finalParams.jscramblerConfigPath;
  delete finalParams.sourceMapsOutputPath;
  delete finalParams.symbolTableOutputPath;

  finalParams.clientId = JSCRAMBLER_CLIENT_ID;

  return {finalParams, sourceMapsOutputPath, symbolTableOutputPath};
}
