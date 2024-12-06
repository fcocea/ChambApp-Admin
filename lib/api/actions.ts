import { Chamber } from "@/types/chamber";
import { User } from "@/types/user";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL;

export async function funarUsuarios(userIds: string[]): Promise<void> {
  for (const userId of userIds) {
    const response = await fetch(`${API_ENDPOINT}/users/${userId}/inactive`, {
      method: "POST"
    });
    if (!response.ok) {
      throw new Error(`Failed to funar user with ID ${userId}`);
    }
  }
}

export async function funarAnuncios(advertisementIds: string[]): Promise<void> {
  for (const advertisementId of advertisementIds) {
    const response = await fetch(`${API_ENDPOINT}/advertisements/${advertisementId}/inactive`, {
      method: "POST"
    });
    if (!response.ok) {
      throw new Error(`Failed to funar advertisement with ID ${advertisementId}`);
    }
  }
}

export async function acceptChamberRequests(chamberIds: string[]): Promise<void> {
  alert(`Aceptando solicitudes de chambers con IDs: ${chamberIds.join(", ")}`);
  return new Promise(resolve => setTimeout(resolve, 1000));
}

export async function rejectChamberRequests(chamberIds: string[]): Promise<void> {
  alert(`Rechazando solicitudes de chambers con IDs: ${chamberIds.join(", ")}`);
  return new Promise(resolve => setTimeout(resolve, 1000));
}

export async function forgiveUsers(userIds: string[]): Promise<void> {
  for (const userId of userIds) {
    const response = await fetch(`${API_ENDPOINT}/users/${userId}/active`, {
      method: "POST"
    });
    if (!response.ok) {
      throw new Error(`Failed to forgive user with ID ${userId}`);
    }
  }
}

export async function reactivateAdvertisements(advertisementIds: string[]): Promise<void> {
  for (const advertisementId of advertisementIds) {
    const response = await fetch(`${API_ENDPOINT}/advertisements/${advertisementId}/active`, {
      method: "POST"
    });
    if (!response.ok) {
      throw new Error(`Failed to reactivate advertisement with ID ${advertisementId}`);
    }
  }
}
