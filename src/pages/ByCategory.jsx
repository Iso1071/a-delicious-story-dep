import { useEffect, useState } from "react";
import "./ByCategory.scss";
import fallback from "../assets/react.svg";

const ByCategory = ({ supabase }) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    let { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("name");

    console.log("ERROR", error);
    console.log("DATA", data);

    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <h3>Browse by category!</h3>

      <ul>
        {categories.map((row) => (
          <li key={row.id}>
            <img
              src={row.image || fallback}
              alt={row.name}
              className="icon"
            ></img>
            {row.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ByCategory;
