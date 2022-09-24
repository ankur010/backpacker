import axios from 'axios';

import { urlConstants } from 'common/utils/constants';

export const getData = async () => {
  const res = await axios.get(urlConstants.imagesData);
  const { data } = res;
  return data;
};
