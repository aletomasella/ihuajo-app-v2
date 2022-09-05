import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Animal } from "../../../models/animals";
import { dateFilter } from "../../../utilities/dateFilter";

export default function BasicCard({ animal }: { animal: Animal }) {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
        width: "80%",
        margin: "auto",
        background: "rgba(255, 255, 255, 0.5)",
        borderRadius: "20px",
      }}
    >
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          textAlign: "center",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Typography
          sx={{ mb: 1.5, fontSize: 20, width: "100%" }}
          color="text.secondary"
          gutterBottom
        >
          Detalles del animal
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            fontSize: 20,
            width: "45%",
            fontWeight: "semi-bold",
            padding: "15px",
            border: "1px solid lightgray",
            borderRadius: "20px",
          }}
          color="text.secondary"
        >
          Numero de Caravana : {animal.tagId}
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            fontSize: 20,
            width: "45%",
            fontWeight: "semi-bold",
            padding: "15px",
            border: "1px solid lightgray",
            borderRadius: "20px",
          }}
          color="text.secondary"
        >
          Raza : {animal.race}
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            fontSize: 20,
            width: "45%",
            fontWeight: "semi-bold",
            padding: "15px",
            border: "1px solid lightgray",
            borderRadius: "20px",
          }}
          color="text.secondary"
        >
          Genero : {animal.genre === "MALE" ? "MACHO" : "HEMBRA"}
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            fontSize: 20,
            width: "45%",
            fontWeight: "semi-bold",
            padding: "15px",
            border: "1px solid lightgray",
            borderRadius: "20px",
          }}
          color="text.secondary"
        >
          Precio de Compra : ${animal.boughtPrice}
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            fontSize: 20,
            width: "45%",
            fontWeight: "semi-bold",
            padding: "15px",
            border: "1px solid lightgray",
            borderRadius: "20px",
          }}
          color="text.secondary"
        >
          Vendedor : {animal.boughtFrom}
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            fontSize: 20,
            width: "45%",
            fontWeight: "semi-bold",
            padding: "15px",
            border: "1px solid lightgray",
            borderRadius: "20px",
          }}
          color="text.secondary"
        >
          Peso incial : {animal.initialWeight}kg
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            fontSize: 20,
            width: "45%",
            fontWeight: "semi-bold",
            padding: "15px",
            border: "1px solid lightgray",
            borderRadius: "20px",
          }}
          color="text.secondary"
        >
          Peso final : {animal.finalWeight + "kg" || "-"}
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            fontSize: 20,
            width: "45%",
            fontWeight: "semi-bold",
            padding: "15px",
            border: "1px solid lightgray",
            borderRadius: "20px",
          }}
          color="text.secondary"
        >
          Establecimiento actual : {animal.actualLocation}
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            fontSize: 20,
            width: "45%",
            fontWeight: "semi-bold",
            padding: "15px",
            border: "1px solid lightgray",
            borderRadius: "20px",
          }}
          color="text.secondary"
        >
          {animal.allLocations.length > 1 ? (
            <>
              <span>Establecimientos en los que ha estado : </span>
              {animal.allLocations.map((location) => (
                <li key={location}>{location}</li>
              ))}
            </>
          ) : (
            <span>Establecimientos : {animal.allLocations[0]}</span>
          )}
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            fontSize: 20,
            width: "45%",
            fontWeight: "semi-bold",
            padding: "15px",
            border: "1px solid lightgray",
            borderRadius: "20px",
          }}
          color="text.secondary"
        >
          Castrado : {animal.isCastrated ? "Si" : "No"}
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            fontSize: 20,
            width: "45%",
            fontWeight: "semi-bold",
            padding: "15px",
            border: "1px solid lightgray",
            borderRadius: "20px",
          }}
          color="text.secondary"
        >
          Vendido : {animal.isSold ? "Si" : "No"}
        </Typography>
        {animal.isSold && (
          <>
            <Typography
              sx={{
                mb: 1.5,
                fontSize: 20,
                width: "45%",
                fontWeight: "semi-bold",
                padding: "15px",
                border: "1px solid lightgray",
                borderRadius: "20px",
              }}
              color="text.secondary"
            >
              Vendido a : {animal.soldTo}
            </Typography>{" "}
            <Typography
              sx={{
                mb: 1.5,
                fontSize: 20,
                width: "45%",
                fontWeight: "semi-bold",
                padding: "15px",
                border: "1px solid lightgray",
                borderRadius: "20px",
              }}
              color="text.secondary"
            >
              Fecha de venta : {dateFilter(`${animal.soldDate}`)}
            </Typography>
            <Typography
              sx={{
                mb: 1.5,
                fontSize: 20,
                width: "45%",
                fontWeight: "semi-bold",
                padding: "15px",
                border: "1px solid lightgray",
                borderRadius: "20px",
              }}
              color="text.secondary"
            >
              Precio de venta : ${animal.soldPrice}
            </Typography>
          </>
        )}
        <Typography
          sx={{
            mb: 1.5,
            fontSize: 20,
            width: "45%",
            fontWeight: "semi-bold",
            padding: "15px",
            border: "1px solid lightgray",
            borderRadius: "20px",
          }}
          color="text.secondary"
        >
          Vivo : {animal.isAlive ? "Si" : "No"}
        </Typography>
      </CardContent>
    </Card>
  );
}
