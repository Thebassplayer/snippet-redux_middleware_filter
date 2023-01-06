// This snippet will evaluate if we are in dev or production, so it only pass the middleware if we are in dev

const middleware = 'yes';

const middleWares = [
  process.env.NODE_ENV === 'development' && middleware,
].filter(Boolean);

console.log(middleWares);
