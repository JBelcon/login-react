import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  return (
    <div>
      <h1>Detalles: {params.id}</h1>
    </div>
  );
};

export { Details };
