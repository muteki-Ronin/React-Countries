// CORE
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// ACTIONS
import { loadNeighborsByBorder } from "./details-slice";
// SELECTORS
import { selectNeighbors } from "./details-selectors";

export const useNeighbors = (borders = []) => {
  const dispatch = useDispatch();
  const neighbors = useSelector(selectNeighbors);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [borders, dispatch]);

  return neighbors;
};
