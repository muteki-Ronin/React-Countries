// CORE
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// ACTIONS
import { loadCountryByName } from "./details-slice";
import { clearDetails } from "./details-slice";
// SELECTORS
import { selectDetails } from "./details-selectors";

export const useDetails = (name) => {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  return details;
};
