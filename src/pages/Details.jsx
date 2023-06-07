// CORE
import { useNavigate, useParams } from "react-router-dom";
// COMPONENTS
import { Button } from "../components/Button";
import { CountryDetails } from "../feature/details/CountryDetails";
// ICONS
import { IoArrowBack } from "react-icons/io5";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      <CountryDetails name={name} navigate={navigate} />
    </div>
  );
};
