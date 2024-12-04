import { DataTable } from "@/components/ui/data-table";

import { Advertisement, columns } from "./ads-columns";

async function getData(): Promise<Advertisement[]> {
  const titles = [
    "Venta de casa", "Auto en perfecto estado", "Servicios de jardinería",
    "Clases de piano", "Curso de programación", "Venta de laptop",
    "Reparación de electrodomésticos", "Asesoría legal", "Clases de yoga",
    "Servicio de catering", "Mudanza rápida", "Clases de inglés",
    "Venta de bicicleta", "Fotografía profesional", "Clases de cocina",
    "Diseño gráfico", "Reparación de autos", "Servicio de limpieza",
    "Alquiler de departamento", "Venta de muebles"
  ];

  const createdBy = [
    "Juan Pérez", "María García", "Pedro López", "Ana Martínez",
    "Carlos Rodríguez", "Lucía Sánchez", "José Gómez", "Elena Fernández",
    "Luis Ruiz", "Clara Díaz"
  ];

  const statuses = ["Activo", "Pendiente"];

  // Función para obtener una fecha aleatoria
  const getRandomDate = (start: Date, end: Date) =>
    new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  // Función para formatear fechas
  const formatDate = (date: Date): string => {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // Meses comienzan en 0
    const yyyy = date.getFullYear();
    const hh = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    return `${dd}-${mm}-${yyyy} ${hh}:${min}`;
  };

  // Generar 20 anuncios
  const advertisements: Advertisement[] = Array.from({ length: 20 }, (_, i) => {
    const creationDate = getRandomDate(new Date(2023, 0, 1), new Date(2023, 11, 31));
    const startDate = getRandomDate(new Date(2024, 0, 1), new Date(2024, 11, 31));

    return {
      ad_id: `ad_${i + 1}`,
      title: titles[i % titles.length],
      price: Math.floor(Math.random() * 10000 + 100), // Precio aleatorio entre 100 y 10,000
      start_date: formatDate(startDate), // Formato personalizado
      creation_date: formatDate(creationDate), // Formato personalizado
      created_by: createdBy[i % createdBy.length],
      status: statuses[Math.floor(Math.random() * statuses.length)]
    };
  });

  return advertisements;
}

export default async function Advertisements() {
  const data = await getData();

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} filterColumn="ad_id" aliasColumn="ID" pagSize={10} />
      </div>
    </>
  );
}
