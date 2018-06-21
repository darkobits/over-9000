const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 9001;
const RND = Math.random();

export default Math.floor(RND * (MAX - MIN)) + MIN;
