export const useClick = _handleOnClick => {
  if (typeof _handleOnClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", _handleOnClick);
    } else {
      element.current.removeEventListener("click", _handleOnClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", _handleOnClick);
      }
    };
  }, []);
  return element;
};
