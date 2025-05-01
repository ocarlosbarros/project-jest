const adventure = require('../src/setupTeardown');
const { randomAttack, specialists } = require('../src/setupTeardown');

describe('4 - Quem sobreviveu?', () => {
  beforeEach(() => {
    randomAttack();
  });

  afterEach(() => {
    if (specialists.length === 1) {
      console.log(`Parabéns!! Você sobreviveu aos testes da Trybe Land ${specialists[0].nome}`);
    }
  });

  test('depois da primeira aventura', () => {
    expect(adventure.specialists.length).toBe(5);
  });
  test('depois da segunda aventura', () => {
    expect(adventure.specialists.length).toBe(4);
  });
  test('depois da terceira aventura', () => {
    expect(adventure.specialists.length).toBe(3);
  });
  test('depois da quarta aventura', () => {
    expect(adventure.specialists.length).toBe(2);
  });
  test('depois da quinta aventura', () => {
    expect(adventure.specialists.length).toBe(1);
  });
});
