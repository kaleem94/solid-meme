const Interpreter = require('../src/index');

test('Interpreter initializes correctly', () => {
    const interpreter = new Interpreter(/* cpuParams */);
    expect(interpreter).toBeDefined();
});