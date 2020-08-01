import Team from '../app';

const bowman = {
  type: 'Bowman',
  name: 'Robin',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};
const swordsman = {
  type: 'Swordsman',
  name: 'Arthur',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

test('Добавление персонажа', () => {
  const character = bowman;
  const team = new Team();
  team.add(character);
  const recieved = team.members.has(character);
  expect(recieved).toBe(true);
});

test('Добавление существующего персонажа', () => {
  const character = swordsman;
  const team = new Team();
  team.add(character);
  expect(() => team.add(character)()).toThrow();
});

test('Добавление нескольких персонажей', () => {
  const character1 = bowman;
  const character2 = swordsman;
  const team = new Team();
  team.addAll(character1, character2);
  const recieved1 = team.members.has(character1);
  const recieved2 = team.members.has(character2);
  expect(recieved1 && recieved2).toBe(true);
});

test('Проверка дублирования', () => {
  const character1 = bowman;
  const character2 = swordsman;
  const team = new Team();
  team.addAll(character1, character2, character1);
  const recieved1 = team.members.has(character1);
  const recieved2 = team.members.has(character2);
  const recieved3 = team.members.size;
  expect(recieved1 && recieved2).toBe(true);
  expect(recieved3).toBe(2);
});

test('проверка конвертации в массив', () => {
  const character1 = bowman;
  const character2 = swordsman;
  const team = new Team();
  team.addAll(character1, character2);
  team.toArray();
  expect(team.members).toEqual([bowman, swordsman]);
});
