import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Object array
const items = [
  {
    id: 1,
    category: 'artist',
    name: 'the toy',
    infoUrl: 'https://th.wikipedia.org/wiki/%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%B0%E0%B8%97%E0%B8%AD%E0%B8%A2%E0%B8%AA%E0%B9%8C',
    age: 31,
    adopted: true,
    birthday: '1995-12-01',
    music: 'ก่อนฤดูฝน',
    imageUrl: '/image/thetoy.png'
  },


  {
    id: 2,
    category: 'artist',
    name: 'Bowky',
    infoUrl: 'https://th.wikipedia.org/wiki/%E0%B9%82%E0%B8%9A%E0%B8%81%E0%B8%B5%E0%B9%89%E0%B9%84%E0%B8%A5%E0%B8%AD%E0%B9%89%E0%B8%AD%E0%B8%99',
    age: 32,
    adopted: true,
    birthday: '1994-10-24',
    music: 'คงคา',
    imageUrl: '/image/Bowky.png'
  },

  {
    id: 3,
    category: 'artist',
    name: 'jeff',
    infoUrl: 'https://en.wikipedia.org/wiki/Jeff_Satur',
    age: 36,
    adopted: true,
    birthday: '1995-03-06',
    music: 'Dum Dum',
    imageUrl: '/image/jeff.png'
  },

  {
    id: 4,
    category: 'artist',
    name: 'ส้มมารี',
    infoUrl: 'https://th.wikipedia.org/wiki/%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%B5_%E0%B9%80%E0%B8%AD%E0%B8%AD%E0%B9%80%E0%B8%88%E0%B8%99%E0%B8%B5_%E0%B9%80%E0%B8%A5%E0%B8%AD%E0%B9%80%E0%B8%A5%E0%B8%A2%E0%B9%8C',
    age: 22,
    adopted: true,
    birthday: '1992-03-02',
    music: 'ไม่เคยจะคิด',
    imageUrl: '/image/som.jpg'
  },

  {
    id: 5,
    category: 'artist',
    name: 'Tom Room39',
    infoUrl: 'https://th.wikipedia.org/wiki/%E0%B8%AD%E0%B8%B4%E0%B8%A8%E0%B8%A3%E0%B8%B2_%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%99%E0%B8%B4%E0%B8%95%E0%B8%A2%E0%B9%8C%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B9%8C',
    age: 31,
    adopted: true,
    birthday: '1994-06-06',
    music: 'หน่วง',
    imageUrl: '/image/tom.jpg'
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
