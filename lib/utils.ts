import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: Date, includeTime: boolean): string => {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0"); // Months start at 0
  const yy = String(date.getFullYear()).slice(-2);

  if (includeTime) {
    const hh = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    return `${dd}/${mm}/${yy} ${hh}:${min}`;
  }

  return `${dd}/${mm}/${yy}`;
};

export const mapStatus = (status: number): string => {
  const statusMap: { [key: number]: string } = {
    0: "Petición",
    1: "Aceptado",
    2: "Finalizado",
    3: "Cancelado",
    4: "Reportado"
  };

  return statusMap[status] ?? "desconocido";
};
