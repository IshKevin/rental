import { Link } from "react-router-dom";

const properties = [
  { id: 1, name: "Modern Apartment" },
  { id: 2, name: "Luxury Villa" },
];

export default function PropertyList() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Properties</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id} className="mt-2">
            <Link to={`/properties/${property.id}`} className="text-purple-600">
              {property.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
