import { Chamber } from "@/types/chamber";
import { formatDate } from "@/lib/utils";

const nombres = ["Empresa A", "Empresa B", "Empresa C", "Empresa D", "Empresa E"];
const tipos = ["Tecnología", "Salud", "Educación", "Finanzas", "Construcción"];

export async function getAllChambers(): Promise<Chamber[]> 
{
  const chambers: Chamber[] = Array.from({ length: 10 }, (_, i) => {
    const id = `${Math.floor(Math.random() * 100000)}`;
    const name = nombres[i % nombres.length];
    const type = tipos[i % tipos.length];
    const creation_date = formatDate(new Date(2000, 1, 1));

    return { id, name, type, creation_date };
  });

  return chambers;
}

export async function getAllChamberRequests(): Promise<void> {
  alert(`Obteniendo todas las solicitudes de chambers`);
  return new Promise((resolve) => setTimeout(resolve, 1000));
}