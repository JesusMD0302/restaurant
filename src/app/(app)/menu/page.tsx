'use client'
import CardSaucerContainer from "@/components/ContainerCardSaucer/CardSaucerContainer";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5285/api/Food');
        console.log(response.data);
      } catch (error) {
        console.error(`Error al hacer la solicitud: ${error}`);
      }
    };

    fetchData();
  }, []); */

  return <CardSaucerContainer />;
}