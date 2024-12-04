import { Advertisement } from "@/types/advertisement";
import { formatDate } from "@/lib/utils";

const titles = [
  "Venta de casa", "Auto en perfecto estado", "Servicios de jardinería",
  "Clases de piano", "Curso de programación", "Venta de laptop",
  "Reparación de electrodomésticos", "Asesoría legal", "Clases de yoga",
  "Servicio de catering", "Mudanza rápida", "Clases de inglés",
  "Venta de bicicleta", "Fotografía profesional", "Clases de cocina",
  "Diseño gráfico", "Reparación de autos", "Servicio de limpieza",
  "Alquiler de departamento", "Venta de muebles"
];

const descriptions = [
  "Descripción 1", "Descripción 2", "Descripción 3", "Descripción 4",
  "Descripción 5", "Descripción 6", "Descripción 7", "Descripción 8",
  "Descripción 9", "Descripción 10", "Descripción 11", "Descripción 12",
  "Descripción 13", "Descripción 14", "Descripción 15", "Descripción 16",
  "Descripción 17", "Descripción 18", "Descripción 19", "Descripción 20"
];

const createdBy = [
  "12345678-9", "23456789-0", "34567890-1", "45678901-2",
  "56789012-3", "67890123-4", "78901234-5", "89012345-6",
  "90123456-7", "01234567-8"
];

const statuses = [0, 1, 2, 3];

const getRandomDate = (start: Date, end: Date) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

export async function getAdvertisements(): Promise<Advertisement[]> {
  const advertisements: Advertisement[] = Array.from({ length: 20 }, (_, i) => {
    const creationDate = getRandomDate(new Date(2023, 0, 1), new Date(2023, 11, 31));
    const startDate = getRandomDate(new Date(2024, 0, 1), new Date(2024, 11, 31));

    return {
      ad_id: `ad_${i + 1}`,
      title: titles[i % titles.length],
      description: descriptions[i % descriptions.length],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      price: Math.floor(Math.random() * 10000 + 100),
      start_date: formatDate(startDate),
      creation_date: formatDate(creationDate),
      created_by: createdBy[i % createdBy.length]
    };
  });

  return advertisements;
}

export async function getReportedAdvertisements(): Promise<Advertisement[]> {
    const advertisements: Advertisement[] = Array.from({ length: 20 }, (_, i) => {
        const creationDate = getRandomDate(new Date(2023, 0, 1), new Date(2023, 11, 31));
        const startDate = getRandomDate(new Date(2024, 0, 1), new Date(2024, 11, 31));

        return {
            ad_id: `ad_${i + 1}`,
            title: titles[i % titles.length],
            description: descriptions[i % descriptions.length],
            status: statuses[Math.floor(Math.random() * statuses.length)],
            price: Math.floor(Math.random() * 10000 + 100),
            start_date: formatDate(startDate),
            creation_date: formatDate(creationDate),
            created_by: createdBy[i % createdBy.length]
        };
        });

        return advertisements;
    }