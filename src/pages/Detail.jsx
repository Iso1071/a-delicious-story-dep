import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return <div>Detail page: {id}</div>;
};

export default Detail;
