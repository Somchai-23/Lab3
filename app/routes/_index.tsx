import { json, LoaderFunction, useLoaderData } from '@remix-run/react';

interface Item {
  id: number;
  category: string;
  name: string;
  infoUrl: string;
  birthday: string;
  age: string;
  music: string;
  imageUrl: string;
  description: string;
  [key: string]: any;
}

export const loader: LoaderFunction = async () => {
  const response = await fetch('http://localhost:5000/api/items');
  const items: Item[] = await response.json();
  return json(items);
};

export default function ArtistList() {
  const items = useLoaderData<Item[]>();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Artist List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map(item => (
          <div key={item.id} className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition">
            {/* ปรับรูปให้เป็นสี่เหลี่ยมจัตุรัส */}
            <div className="w-full aspect-w-1 aspect-h-1">
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
            <p className="text-gray-600">{item.category}</p>
            <p className="text-gray-500">Birthday: {new Date(item.birthday).toLocaleDateString()}</p>
            <p className="text-gray-500">Age: {item.age}</p>
            <p className="text-gray-500">Music: {item.music}</p>
            <div className="mt-4 space-y-2">
              <a href={item.infoUrl} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-center">More Info</a>
              <a href={`/items/${item.id}`} className="block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-center">View Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
