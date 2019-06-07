export const useScroll = () => {
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    setPos({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
  return pos;
};
