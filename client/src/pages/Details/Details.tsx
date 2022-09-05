import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { api } from "../../utilities";
import { Animal } from "../../models/animals";
import { EditData, AnimalCard } from "./components";
import { Button, Typography } from "@mui/material";
import MedicalTreatments from "./components/MedicalTreatments";

const Details = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    axios.get(`${api.endopoints.animalsURL}/${id}`).then((res) => {
      setAnimal(res.data);
    });
  }, []);

  return (
    <>
      {animal && (
        <div
          style={{
            display: "flex",
            justifyContent: "justify-between",
            flexDirection: "column",
          }}
        >
          <AnimalCard animal={animal as Animal} />
          {animal.medicalTreatments.length > 0 && (
            <div>
              <div>
                <Typography
                  sx={{
                    mb: 1.5,
                    fontSize: 20,
                    width: "100%",
                    marginTop: "20px",
                  }}
                  color="text.secondary"
                  gutterBottom
                >
                  Tratamientos medicos realizados
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <MedicalTreatments
                  medicalTreatments={animal.medicalTreatments}
                />
              </div>
            </div>
          )}
          <Button onClick={() => setEdit(!edit)}>
            {edit ? "Cerrar" : "Editar los datos"}
          </Button>
          {edit && <EditData animal={animal as Animal} />}
        </div>
      )}
    </>
  );
};

export default Details;
