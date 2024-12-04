import { User } from "@/types/user";
import { Chamber } from "@/types/chamber";

export async function funarUsuarios(userIds: string[]): Promise<void> {
  alert(`Funando usuarios con IDs: ${userIds.join(", ")}`);
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

export async function funarAnuncios(advertisementIds: string[]): Promise<void> {
  alert(`Funando anuncios con IDs: ${advertisementIds.join(", ")}`);
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

export async function acceptChamberRequests(chamberIds: string[]): Promise<void> {
  alert(`Aceptando solicitudes de chambers con IDs: ${chamberIds.join(", ")}`);
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

export async function rejectChamberRequests(chamberIds: string[]): Promise<void> {
  alert(`Rechazando solicitudes de chambers con IDs: ${chamberIds.join(", ")}`);
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

export async function forgiveUsers(userIds: string[]): Promise<void> {
  alert(`Perdonando usuarios con IDs: ${userIds.join(", ")}`);
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

export async function reactivateAdvertisements(advertisementIds: string[]): Promise<void> {
  alert(`Reactivando anuncios con IDs: ${advertisementIds.join(", ")}`);
  return new Promise((resolve) => setTimeout(resolve, 1000));
}