import Link from "next/link";

const mockUsers = [
  { id: 1, name: "User One", email: "userone@example.com", createdAt: "2023-01-01" },
  { id: 2, name: "User Two", email: "usertwo@example.com", createdAt: "2023-02-01" },
  { id: 3, name: "User Three", email: "userthree@example.com", createdAt: "2023-03-01" }
];

export default function UsuariosPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Usuarios</h1>
      <ul className="space-y-2">
        {mockUsers.map(user => (
          <li key={user.id} className="p-2 border rounded">
            <Link href={`/admin/panel/users/${user.id}`} legacyBehavior>
              <a className="text-blue-500 hover:underline">{user.name}</a>
            </Link>
            <p>{user.email}</p>
            <p>Creado el: {user.createdAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}