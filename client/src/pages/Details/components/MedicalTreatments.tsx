import React from "react";
import { MedicalTreatment } from "../../../models/animals";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const MedicalTreatments = ({
  medicalTreatments,
}: {
  medicalTreatments: MedicalTreatment[];
}) => {
  return (
    <>
      {medicalTreatments.map((medicalTreatment) => (
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            textAlign: "center",
            width: "45%",
            margin: "auto",
            background: "rgba(255, 255, 255, 0.5)",
            borderRadius: "20px",
            marginTop: "20px",
            marginLeft: "10px",
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
              Nombre del tramiento : {medicalTreatment.name}
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
              Descripcion : {medicalTreatment.description}
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
              Fecha : {medicalTreatment.date}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default MedicalTreatments;
