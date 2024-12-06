import { formatDate, mapStatus } from "@/lib/utils";
import { Advertisement } from "@/types/advertisement";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL;

export async function getAdvertisements(): Promise<Advertisement[]> {
  const response = await fetch(`${API_ENDPOINT}/advertisements?admin=true`);
  const advertisements = await response.json();
  return advertisements.map((ad: any) => ({
    ...ad,
    status: mapStatus(ad.status),
    start_date: formatDate(new Date(ad.start_date), true),
    creation_date: formatDate(new Date(ad.creation_date), false)
  }));
}

export async function getReportedAdvertisements(): Promise<Advertisement[]> {
  const response = await fetch(`${API_ENDPOINT}/advertisements?admin=true`);
  const advertisements = await response.json();
  return advertisements
    .filter((ad: any) => ad.status === 4)
    .map((ad: any) => ({
      ...ad,
      status: mapStatus(ad.status),
      start_date: formatDate(new Date(ad.start_date), true),
      creation_date: formatDate(new Date(ad.creation_date), false)
    }));
}
