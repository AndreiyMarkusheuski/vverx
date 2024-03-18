const setToUrlParams = (activeTopType, activeItemType) => {
  let queryParam = { type: activeTopType, equipment: activeItemType };
  let preparedQueryParams = new URLSearchParams(queryParam).toString();
  updateURL(preparedQueryParams);
};

const updateURL = (query) => {
  if (history.pushState) {
    var baseUrl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    var newUrl = `${baseUrl}?${query}`;
    history.pushState(null, null, newUrl);
  } else {
    console.warn("History API не поддерживается");
  }
};

export const getParamFromUrl = (param) => {
  const searchParams = new URLSearchParams(document.location.search);
  const paramFromUrl = searchParams.get(param);

  return paramFromUrl
}

export default setToUrlParams;
