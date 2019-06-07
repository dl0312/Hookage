export const useFullScreen = callback => {
  const element = useRef();
  const runCallback = isFull => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFullScreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.requestFullscreen();
      }
      runCallback(true);
    }
  };
  const exitFullScreen = () => {
    document.exitFullscreen();
    runCallback(false);
  };
  return { element, triggerFullScreen, exitFullScreen };
};
