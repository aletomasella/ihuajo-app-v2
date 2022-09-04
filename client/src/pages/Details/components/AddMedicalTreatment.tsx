import React, { useState } from "react";
import { Input, InputLabel, FormGroup } from "@mui/material";

const AddMedicalTreatment = () => {
  const [input, setInput] = useState({
    name: "",
    date: "",
    description: "",
  });

  const handleChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2>Agrega un tratamiento medico</h2>
      <FormGroup>
        <InputLabel htmlFor="name">Nombre</InputLabel>
        <Input
          id="name"
          name="name"
          value={input.name}
          onChange={handleChange}
          type="text"
        />
        <InputLabel htmlFor="description">Descripcion</InputLabel>
        <Input
          id="description"
          name="description"
          value={input.description}
          onChange={handleChange}
          type="text"
        />
        <InputLabel htmlFor="name">Fecha</InputLabel>
        <Input
          id="date"
          name="date"
          value={input.date}
          onChange={handleChange}
          type="date"
        />
      </FormGroup>
    </>
  );
};

export default AddMedicalTreatment;
