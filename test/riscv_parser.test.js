const Interpreter = require('../src/riscv/riscv_parser.js');

test('Interpreter initializes correctly', () => {
    const interpreter = new Interpreter(/* cpuParams */);
    expect(interpreter).toBeDefined();
});