// CORE
import { useDispatch } from "react-redux";
// ACTIONS
import { clearControls } from "./controls-slice";

export const useCleanup = () => {
  const dispatch = useDispatch();

  const cleanUp = () => {
    dispatch(clearControls());
  };

  return cleanUp;
};
