import { GameSavingLoader } from '../GameSavingLoader';
import { GameSaving } from '../GameSaving';

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

const testObject = {
  id: 9,
  created: 1546300800,
  userInfo: {
    id: 1,
    name: 'Hitman',
    level: 10,
    points: 2000,
  },
};

test('проверка данных возвращенных из промиса', async () => {
  const result = await GameSavingLoader.load();

  expect(result).toEqual(data);
});

test('проверка данных возвращенных из промиса для объекта класса GameSaving', async () => {
  const result = await GameSavingLoader.load();
  const object = new GameSaving(JSON.parse(result));

  expect(object).toEqual(testObject);
});
