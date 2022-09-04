import React, { useEffect, useState } from "react";
import { FormControl, Input, InputLabel, FormGroup } from "@mui/material";
import { Animal } from "../../../models/animals";
import AddMedicalTreatment from "./AddMedicalTreatment";

const EditData = ({ animal }: { animal: Animal }) => {
  const [input, setInput] = useState<Animal | any>({
    tagId: "",
    race: "",
    genre: "MALE",
    boughtPrice: 0,
    boughtFrom: "",
    initialWeight: 0,
    finalWeight: 0,
    actualLocation: "",
    allLocations: [""],
    isCastrated: false,
    medicalTreatments: [],
    isAlive: false,
    isSold: false,
    soldPrice: 0,
    soldTo: "",
    soldDate: new Date(),
  });
  const [addMedicalTreatment, setAddMedicalTreatment] = useState(false);

  useEffect(() => {
    setInput(animal);
  }, []);

  const handleChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <FormGroup>
        <InputLabel htmlFor="tagId">Nro de Caravana</InputLabel>
        <Input
          id="tagId"
          name="tagId"
          value={input.tagId}
          onChange={handleChange}
        />
        <InputLabel htmlFor="race">Raza</InputLabel>
        <Input
          id="race"
          name="race"
          value={input.race}
          onChange={handleChange}
        />
        <InputLabel htmlFor="genre">Genero</InputLabel>
        <Input
          id="genre"
          name="genre"
          value={input.genre}
          onChange={handleChange}
        />
        <InputLabel htmlFor="boughtPrice">Precio de Compra</InputLabel>
        <Input
          id="boughtPrice"
          name="boughtPrice"
          value={input.boughtPrice}
          onChange={handleChange}
        />
        <InputLabel htmlFor="boughtFrom">Vendedor</InputLabel>
        <Input
          id="boughtFrom"
          name="boughtFrom"
          value={input.boughtFrom}
          onChange={handleChange}
        />
        <InputLabel htmlFor="initialWeight">Peso Inicial</InputLabel>
        <Input
          id="initialWeight"
          name="initialWeight"
          value={input.initialWeight}
          onChange={handleChange}
          type="number"
        />
        <InputLabel htmlFor="finalWeight">Peso Final</InputLabel>
        <Input
          id="finalWeight"
          name="finalWeight"
          value={input.finalWeight}
          onChange={handleChange}
          type="number"
        />
        <InputLabel htmlFor="actualLocation">Establecimiento Actual</InputLabel>
        <Input
          id="actualLocation"
          name="actualLocation"
          value={input.actualLocation}
          onChange={handleChange}
        />
        <InputLabel htmlFor="isCastrated">Castrado</InputLabel>
        <Input
          id="isCastrated"
          name="isCastrated"
          value={input.isCastrated}
          onChange={handleChange}
          type="checkbox"
        />
        <InputLabel htmlFor="isCastrated">Castrado</InputLabel>
        <Input
          id="isCastrated"
          name="isCastrated"
          value={input.isCastrated}
          onChange={handleChange}
          type="checkbox"
        />
      </FormGroup>
      {addMedicalTreatment && <AddMedicalTreatment />}
    </>
  );
};

export default EditData;
