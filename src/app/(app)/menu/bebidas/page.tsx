'use client'
import ContainerCardDrinks from "@/components/ContainerCardDrinks/ContainerCardDrinks";
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

  return <ContainerCardDrinks />;
}