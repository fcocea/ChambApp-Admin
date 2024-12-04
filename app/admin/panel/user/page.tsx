import { DataTable } from "@/components/ui/data-table";

import { columns, Usuarios } from "./user-columns";

async function getUserList(): Promise<Usuarios[]> {
  const nombres = ["Juan", "María", "Pedro", "Ana", "Carlos", "Lucía", "José", "Elena", "Luis", "Clara"];
  const apellidos = ["Pérez", "García", "López", "Martínez", "Rodríguez", "Sánchez", "Gómez", "Fernández", "Ruiz", "Díaz"];
  const genders = ["M", "F"];

  const formatDate = (date: Date): string => {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // Months start at 0
    const yy = String(date.getFullYear()).slice(-2);
    return `${dd}/${mm}/${yy}`;
  };

  // Generar 10 usuarios
  const usuario: Usuarios[] = Array.from({ length: 10 }, (_, i) => {
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

  return usuario;
}

export default async function UsuariosData() {
  const data = await getUserList();

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} pagSize={10} />
      </div>
    </>
  );
}
