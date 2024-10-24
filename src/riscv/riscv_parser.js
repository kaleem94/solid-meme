const parserConfig = require('./parser.json');

console.log(parserConfig);

class RiscvParser {
    parse(code) {
        const instructions = code.split('\n').map(line => line.trim()).filter(line => line.length > 0);
        const parsedInstructions = instructions.map(instruction => {
            const [opcode, ...params] = instruction.split(/\s+/);
            return { opcode, params };
        });
        return parsedInstructions;
    }
}


module.exports = RiscvParser;