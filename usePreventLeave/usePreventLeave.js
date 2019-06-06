export const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () =>
    window.addEventListener("beforeunload", listener, true);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener, true);
  return { enablePrevent, disablePrevent };
};
