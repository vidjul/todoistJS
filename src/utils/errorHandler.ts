import Axios = require('axios');

export default (err: Axios.AxiosError) => {
  const {
    error_tag,
    error_code,
    http_code,
    error_extra,
    error,
  } = err.response!.data;
  throw new Error(
    `Error ${error_code}: ${error_tag} (HTTP ${http_code}): ${error} (${JSON.stringify(
      error_extra,
    )})`,
  );
};
