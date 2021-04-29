export function getParsedLocationSearch() {
    const search = window.location.search;
    //TODO: should not there
    const parsedSeach = { acId: '', awId: '' };
    const searchTokens = search.slice(1).split('&') || [];
    searchTokens.forEach(function(searchToken) {
      const clo = searchToken.split('=');
      if (clo.length >= 2) {
        parsedSeach[clo[0]] = clo[1];
      }
    });
    return parsedSeach;
}