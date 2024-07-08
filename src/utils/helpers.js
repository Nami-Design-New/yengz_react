export function getTheLastSeenTime(time) {
  if (time) {
    const now = new Date().getTime();
    const then = new Date(time).getTime();
    const diff = now - then;

  
  }
}
