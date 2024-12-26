const binary = 0b1010; // 2進数リテラル
const octal = 0o755; // 8進数リテラル
const hexadecimal = 0xff; // 16進数リテラル

console.log(binary, octal, hexadecimal); // 10 493 255

const bigNum: bigint = (123n + 456n) * 2n;
console.log(bigNum);
