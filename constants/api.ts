import {
  END_POINT_DEVELOPMENT,
  NODE_ENV,
  PRODUCTION,
  END_POINT_PRODUCTION,
} from "./config";

let endpointAPI: string = END_POINT_DEVELOPMENT;

if (NODE_ENV === PRODUCTION) {
  endpointAPI = END_POINT_PRODUCTION;
}

export const API = {
  END_POINT: endpointAPI,
};
