import React, { useEffect, useState } from "react";
import {
  FormControl,
  Input,
  InputLabel,
  FormGroup,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import { Animal, MedicalTreatment } from "../../../models/animals";
import { dateFilter } from "../../../utilities/dateFilter";
import axios from "axios";
import { api } from "../../../utilities";

const CreateAnimal = () => {
  const [input, setInput] = useState<Animal | any>({
    tagId: "",
    race: "",
    genre: "",
    boughtPrice: 0,
    boughtFrom: "",
    initialWeight: 0,
    finalWeight: 0,
    actualLocation: "",
    isCastrated: 0,
    medicalTreatments: [],
    isAlive: 0,
    isSold: 0,
    soldPrice: 0,
    soldTo: "",
    soldDate: "2020-01-01",
  });
  const [addMedicalTreatment, setAddMedicalTreatment] = useState(false);
  const [medicalTreatments, setMedicalTreatments] = useState<MedicalTreatment>({
    name: "",
    date: dateFilter(new Date().toISOString()),
    description: "",
  });

  const handleChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleMedicalTreatment = (e: any) => {
    setMedicalTreatments({
      ...medicalTreatments,
      [e.target.name]: e.target.value,
    });
  };

  const submitMedicalTreatment = (e: any) => {
    e.preventDefault();
    setInput({
      ...input,
      medicalTreatments: [...input.medicalTreatments, medicalTreatments],
    });
    setMedicalTreatments({
      name: "",
      date: dateFilter(new Date().toISOString()),
      description: "",
    });
    setAddMedicalTreatment(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    input.tagId = input.tagId.toUpperCase().replace(/\s/g, "");
    input.race = input.race.toUpperCase();
    input.boughtFrom = input.boughtFrom.toUpperCase();
    input.actualLocation = input.actualLocation.toUpperCase();
    input.soldTo = input.soldTo.toUpperCase();
    input.isAlive = input.isAlive === 1 ? true : false;
    input.isCastrated = input.isCastrated === 1 ? true : false;
    input.isSold = input.isSold === 1 ? true : false;
    input.soldDate = input.soldDate === "2020-01-01" ? null : input.soldDate;
    axios.post(api.endopoints.animalsURL, { animal: input }).then((res) => {
      console.log(res.data);
      if (res.status === 200) {
        alert("ANIMAL AGREGADO CORRECTAMENTE");
      }
    });
  };

  const handleResetInput = () => {
    setInput({
      tagId: "",
      race: "",
      genre: "",
      boughtPrice: 0,
      boughtFrom: "",
      initialWeight: 0,
      finalWeight: 0,
      actualLocation: "",
      isCastrated: 0,
      medicalTreatments: [],
      isAlive: 0,
      isSold: 0,
      soldPrice: 0,
      soldTo: "",
      soldDate: "2020-01-01",
    });
  };

  return (
    <>
      <FormGroup
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          alignContent: "center",
          justifyContent: "center",
          margin: "auto",
          border: "1px solid white",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <FormControl style={{ width: "45%", margin: "10px" }}>
          <InputLabel htmlFor="tagId">Nro de Caravana</InputLabel>
          <Input
            id="tagId"
            name="tagId"
            value={input.tagId}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl style={{ width: "45%", margin: "10px" }}>
          <InputLabel htmlFor="race">Raza</InputLabel>
          <Input
            id="race"
            name="race"
            value={input.race}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl style={{ width: "45%", margin: "10px" }}>
          <InputLabel id="genre">Genero</InputLabel>
          <Select
            labelId="genre"
            id="genre"
            name="genre"
            value={input.genre}
            label="Castrado"
            onChange={handleChange}
          >
            <MenuItem value={"MALE"}>MACHO</MenuItem>
            <MenuItem value={"FEMALE"}>HEMBRA</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ width: "45%", margin: "10px" }}>
          <InputLabel htmlFor="boughtPrice">Precio de Compra</InputLabel>
          <Input
            id="boughtPrice"
            name="boughtPrice"
            value={input.boughtPrice}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl style={{ width: "45%", margin: "10px" }}>
          <InputLabel htmlFor="boughtFrom">Vendedor</InputLabel>
          <Input
            id="boughtFrom"
            name="boughtFrom"
            value={input.boughtFrom}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl style={{ width: "45%", margin: "10px" }}>
          <InputLabel htmlFor="initialWeight">Peso Inicial</InputLabel>
          <Input
            id="initialWeight"
            name="initialWeight"
            value={input.initialWeight}
            onChange={handleChange}
            type="number"
          />
        </FormControl>
        <FormControl style={{ width: "45%", margin: "10px" }}>
          <InputLabel htmlFor="finalWeight">Peso Final</InputLabel>
          <Input
            id="finalWeight"
            name="finalWeight"
            value={input.finalWeight}
            onChange={handleChange}
            type="number"
          />
        </FormControl>
        <FormControl style={{ width: "45%", margin: "10px" }}>
          <InputLabel htmlFor="actualLocation">
            Establecimiento Actual
          </InputLabel>
          <Input
            id="actualLocation"
            name="actualLocation"
            value={input.actualLocation}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl style={{ width: "45%", margin: "10px" }}>
          <InputLabel id="isCastrated">Castrado</InputLabel>
          <Select
            labelId="isCastrated"
            id="isCastrated"
            name="isCastrated"
            value={input.isCastrated}
            label="Castrado"
            onChange={handleChange}
          >
            <MenuItem value={1}>SI</MenuItem>
            <MenuItem value={0}>NO</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ width: "45%", margin: "10px" }}>
          <InputLabel id="isSold">Vendido</InputLabel>
          <Select
            labelId="isSold"
            id="isSold"
            name="isSold"
            value={input.isSold}
            label="Castrado"
            onChange={handleChange}
          >
            <MenuItem value={1}>SI</MenuItem>
            <MenuItem value={0}>NO</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ width: "45%", margin: "10px" }}>
          <InputLabel htmlFor="soldTo">Vendido a</InputLabel>
          <Input
            id="soldTo"
            name="soldTo"
            value={input.soldTo}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl style={{ width: "45%", margin: "10px" }}>
          <InputLabel htmlFor="soldDate">Vendido en</InputLabel>
          <Input
            id="soldDate"
            name="soldDate"
            value={input.soldDate}
            onChange={handleChange}
            type="date"
          />
        </FormControl>
        <FormControl style={{ width: "45%", margin: "10px" }}>
          <InputLabel htmlFor="soldPrice">Precio de venta</InputLabel>
          <Input
            id="soldPrice"
            name="soldPrice"
            value={input.soldPrice}
            onChange={handleChange}
            type="number"
          />
        </FormControl>
        <FormControl style={{ width: "45%", margin: "10px" }}>
          <InputLabel id="isAlive">Vive</InputLabel>
          <Select
            labelId="isAlive"
            id="isAlive"
            name="isAlive"
            value={input.isAlive}
            label="Castrado"
            onChange={handleChange}
          >
            <MenuItem value={1}>SI</MenuItem>
            <MenuItem value={0}>NO</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" onClick={handleSubmit}>
          Enviar Datos
        </Button>
        <Button type="submit" onClick={handleResetInput}>
          Borrar Formulario
        </Button>
      </FormGroup>

      {addMedicalTreatment ? (
        <div>
          <Typography
            sx={{
              mb: 1.5,
              fontSize: 20,
              width: "100%",
              fontWeight: "bold",
              padding: "15px",
            }}
            color="text.secondary"
          >
            Agrega un tratamiento medico
          </Typography>
          <FormGroup
            style={{
              width: "70%",
              display: "flex",
              flexDirection: "row",
              textAlign: "center",
              alignContent: "center",
              justifyContent: "center",
              margin: "auto",
              border: "1px solid white",
              borderRadius: "20px",
              background: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <FormControl style={{ width: "45%", margin: "10px" }}>
              <InputLabel htmlFor="name">Nombre</InputLabel>
              <Input
                id="name"
                name="name"
                value={medicalTreatments.name}
                onChange={handleMedicalTreatment}
                type="text"
              />
            </FormControl>
            <FormControl style={{ width: "45%", margin: "10px" }}>
              <InputLabel htmlFor="description">Descripcion</InputLabel>
              <Input
                id="description"
                name="description"
                value={medicalTreatments.description}
                onChange={handleMedicalTreatment}
                type="text"
              />
            </FormControl>
            <FormControl style={{ width: "45%", margin: "10px" }}>
              <InputLabel htmlFor="name">Fecha</InputLabel>
              <Input
                id="date"
                name="date"
                value={medicalTreatments.date}
                onChange={handleMedicalTreatment}
                type="date"
                placeholder=""
              />
            </FormControl>
            <Button onClick={submitMedicalTreatment}>
              Agregar tratamiento
            </Button>
          </FormGroup>
          <Button onClick={() => setAddMedicalTreatment(false)}>Ocultar</Button>
        </div>
      ) : (
        <div>
          <Button onClick={() => setAddMedicalTreatment(true)}>
            Añadir Tratamiento
          </Button>
        </div>
      )}
    </>
  );
};

export default CreateAnimal;
