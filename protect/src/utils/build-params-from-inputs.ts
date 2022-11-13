import {readFile} from 'fs/promises';
import type {InputParams} from './get-inputs';

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
    console.log({sourceMaps, sourceMapsSourceContent});
    finalParams.sourceMaps = {
      sourceContent: sourceMapsSourceContent
    };
  }

  delete finalParams.jscramblerConfigPath;
  delete finalParams.sourceMapsOutputPath;
  delete finalParams.symbolTableOutputPath;
  return {finalParams, sourceMapsOutputPath, symbolTableOutputPath};
}
