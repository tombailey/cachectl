const maxAge = (cacheability, seconds) => {
  return { 'Cache-Control': `${cacheability}, max-age=${seconds}` };
}

// see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#cacheability
module.exports = {
  public: () => {
    return {
      maxAge: (seconds) => maxAge('public', seconds),
    };
  },
  private: () => {
    return {
      maxAge: (seconds) => maxAge('private', seconds),
    };
  },
  noCache: () => {
    return { 'Cache-Control': 'no-cache' };
  },
  noStore: () => {
    return {
      maxAge: (seconds) => maxAge('no-store', seconds),
    };
  },
};
