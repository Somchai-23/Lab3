import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Object array
const items = [
  {
    id: 1,
    category: 'metal',
    name: 'Metallica',
    infoUrl: 'https://en.wikipedia.org/wiki/Metallica',
    age: 42,
    adopted: true,
    birthday: '1981-10-28',
    music: 'Enter Sandman',
    imageUrl: '/image/metallica.png'
  },

  {
    id: 2,
    category: 'metal',
    name: 'Iron Maiden',
    infoUrl: 'https://en.wikipedia.org/wiki/Iron_Maiden',
    age: 49,
    adopted: true,
    birthday: '1975-12-25',
    music: 'The Trooper',
    imageUrl: '/image/iron_maiden.png'
  },

  {
    id: 3,
    category: 'metal',
    name: 'Slipknot',
    infoUrl: 'https://en.wikipedia.org/wiki/Slipknot_(band)',
    age: 29,
    adopted: true,
    birthday: '1995-09-01',
    music: 'Duality',
    imageUrl: '/image/slipknot.png'
  },

  {
    id: 4,
    category: 'metal',
    name: 'Megadeth',
    infoUrl: 'https://en.wikipedia.org/wiki/Megadeth',
    age: 41,
    adopted: true,
    birthday: '1983-06-10',
    music: 'Symphony of Destruction',
    imageUrl: '/image/megadeth.jpg'
  },

  {
    id: 5,
    category: 'metal',
    name: 'Pantera',
    infoUrl: 'https://en.wikipedia.org/wiki/Pantera',
    age: 42,
    adopted: true,
    birthday: '1981-07-01',
    music: 'Cowboys from Hell',
    imageUrl: '/image/pantera.jpg'
  }
];

// Routes
app.get('/api/items', (req, res) => {
  res.json(items);
});

app.get('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  item ? res.json(item) : res.status(404).json({ error: 'Item not found' });
});

app.get('/api/items/category/:category', (req, res) => {
  const filteredItems = items.filter(
    i => i.category.toLowerCase() === req.params.category.toLowerCase()
  );
  res.json(filteredItems);
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
