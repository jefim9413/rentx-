import express from 'express';

const app = express();
app.use(express.json());
app.get('/', (resquest, response) => {
  return response.json({ message: 'Hello World2' });
});

app.listen(3333, () => console.log('Server on '));
