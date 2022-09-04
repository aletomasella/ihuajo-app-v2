import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { api } from "../../utilities";
import { Animal } from "../../models/animals";
import EditData from "./components/EditData";

const Details = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState<Animal | null>(null);

  useEffect(() => {
    axios.get(`${api.endopoints.animalsURL}/${id}`).then((res) => {
      setAnimal(res.data);
    });
  }, []);

  return (
    <>
      {animal && (
        <div>
          <h1>{animal.tagId}</h1>
          <p>{animal.actualLocation}</p>
          <EditData animal={animal as Animal} />
        </div>
      )}
    </>
  );
};

export default Details;
