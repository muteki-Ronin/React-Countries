// CORE
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// COMPONENTS
import { Button } from "../components/Button";
import { Info } from "../components/Info";
// SELECTORS
import { selectDetails } from "../store/details/details-selectors";
// ACTIONS
import {
  loadCountryByName,
  clearCountry,
} from "../store/details/details-actions";
// ICONS
import { IoArrowBack } from "react-icons/io5";

export const Details = () => {
  const dispatch = useDispatch();
  const { currentCountry, error, status } = useSelector(selectDetails);
  const { name } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearCountry());
    };
  }, [name, dispatch]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === "loading" && <h2>Loading...</h2>}
      {error === <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
