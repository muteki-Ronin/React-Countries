// CORE
import { useDispatch, useSelector } from "react-redux";
// ACTIONS
import { setRegion } from "./controls-slice";
// SELECTORS
import { selectRegion } from "./controls-selectors";

export const useControls = () => {
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);

  const handleSelect = (reg) => {
    dispatch(setRegion(reg?.value || ""));
  };

  return [region, handleSelect];
};
