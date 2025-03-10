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
  const response = await fetch('http://localhost:3002/api/items');
  const items: Item[] = await response.json();
  return json(items);
};

export default function ArtistList() {
  const items = useLoaderData<Item[]>();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Metal Band</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map(item => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300">
            {/* Image Section */}
            <div className="relative">
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                className="w-full h-60 object-cover" 
              />
              <span className="absolute top-2 left-2 bg-purple-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
                {item.category}
              </span>
            </div>
            
            {/* Content Section */}
            <div className="p-5 text-center">
              <h3 className="text-2xl font-semibold text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.music}</p>
              <p className="text-gray-500 mt-2">🎂 {new Date(item.birthday).toLocaleDateString()}</p>
              <p className="text-gray-500">🕒 Age: {item.age}</p>
              
              {/* Buttons */}
              <div className="mt-4 flex justify-center space-x-3">
                <a href={item.infoUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
                  More Info
                </a>
                <a href={`/items/${item.id}`} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
