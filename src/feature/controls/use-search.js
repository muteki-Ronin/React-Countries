// CORE
import { useDispatch, useSelector } from "react-redux";
// ACTIONS
import { setSearch } from "./controls-slice";
// SELECTORS
import { selectSearch } from "./controls-selectors";

export const useSearch = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return [search, handleSearch];
};
