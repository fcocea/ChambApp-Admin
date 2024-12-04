import { User } from "@/types/user";
import { formatDate } from "@/lib/utils";

const nombres = ["Juan", "María", "Pedro", "Ana", "Carlos", "Lucía", "José", "Elena", "Luis", "Clara"];
const apellidos = ["Pérez", "García", "López", "Martínez", "Rodríguez", "Sánchez", "Gómez", "Fernández", "Ruiz", "Díaz"];
const genders = ["M", "F", "NB"];

export async function getAllUsers(): Promise<User[]> {
  const users: User[] = Array.from({ length: 10 }, (_, i) => {
    const rut = `${Math.floor(Math.random() * 10000000 + 1000000)}-${Math.floor(Math.random() * 10)}`;
    const phone = `+569${Math.floor(Math.random() * 100000000)}`;
    const first_name = nombres[i % nombres.length];
    const last_name = apellidos[i % apellidos.length];
    const password = "password123";
    const birth_date = formatDate(new Date(1990, 1, 1));
    const gender = genders[i % genders.length];
    const email = `${first_name.toLowerCase()}.${last_name.toLowerCase()}@example.com`;
    const account_creation_date = formatDate(new Date());
    const can_be_chamber = i % 2 === 0;

    return { rut, phone, first_name, last_name, password, birth_date, gender, email, account_creation_date, can_be_chamber };
  });

  return users;
}

export async function getSuspendedUsers(): Promise<User[]> {
  const users: User[] = Array.from({ length: 5 }, (_, i) => {
    const rut = `${Math.floor(Math.random() * 10000000 + 1000000)}-${Math.floor(Math.random() * 10)}`;
    const phone = `+569${Math.floor(Math.random() * 100000000)}`;
    const first_name = nombres[i % nombres.length];
    const last_name = apellidos[i % apellidos.length];
    const password = "password123";
    const birth_date = formatDate(new Date(1990, 1, 1));
    const gender = genders[i % genders.length];
    const email = `${first_name.toLowerCase()}.${last_name.toLowerCase()}@example.com`;
    const account_creation_date = formatDate(new Date());
    const can_be_chamber = i % 2 === 0;
    const suspended = true;

    return { rut, phone, first_name, last_name, password, birth_date, gender, email, account_creation_date, can_be_chamber, suspended };
  });

  return users;
}