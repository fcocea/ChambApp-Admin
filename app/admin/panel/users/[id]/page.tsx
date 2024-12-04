"use client";

import { useParams } from "next/navigation";

const mockUsers = [
  { id: 1, name: "User One", email: "userone@example.com", createdAt: "2023-01-01", phone: "1234567890", birthDate: "1990-01-01", gender: "M", canBeChamber: false },
  { id: 2, name: "User Two", email: "usertwo@example.com", createdAt: "2023-02-01", phone: "0987654321", birthDate: "1992-02-02", gender: "F", canBeChamber: true },
  { id: 3, name: "User Three", email: "userthree@example.com", createdAt: "2023-03-01", phone: "1122334455", birthDate: "1994-03-03", gender: "M", canBeChamber: false }
];

export default function UsuarioDetailPage() {
  const params = useParams();
  const { id } = params;
  const user = mockUsers.find(user => user.id === Number(id));

  if (!user) {
    return <p>Usuario no encontrado</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Teléfono: {user.phone}</p>
      <p>Fecha de nacimiento: {user.birthDate}</p>
      <p>Género: {user.gender}</p>
      <p>Creado el: {user.createdAt}</p>
      <div className="mt-4 space-x-2">
        <button className="px-4 py-2 bg-red-500 text-white rounded">Suspender usuario</button>
        {user.canBeChamber ? (
          <button className="px-4 py-2 bg-green-500 text-white rounded">Hacer chamber</button>
        ) : (
          <button className="px-4 py-2 bg-gray-500 text-white rounded" disabled>No puede ser chamber</button>
        )}
      </div>
    </div>
  );
}