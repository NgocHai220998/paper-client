import { getItem, KEY_TYPES } from "./localStoreTools";

export const isLogined = () => {
  const data: any = getItem(KEY_TYPES.AUTHEN);

  return data?.auth_token ? true : false;
};
