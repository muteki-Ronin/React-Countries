// CORE
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// ACTIONS
import { loadCountries } from "./countries-slice";
// SELECTORS
import { selectControls } from "../controls/controls-selectors";
import {
  selectVisibleCountries,
  selectAllCountriesInfo,
} from "./countries-selectors";

export const useCountries = () => {
  const dispatch = useDispatch();

  const { search, region } = useSelector(selectControls);
  const countries = useSelector((state) =>
    selectVisibleCountries(state, { search, region })
  );
  const { status, error, qty } = useSelector(selectAllCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, status, error];
};
