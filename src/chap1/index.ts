/**
 * number型
 */
const binary = 0b1010; // 2進数リテラル
const octal = 0o755; // 8進数リテラル
const hexadecimal = 0xff; // 16進数リテラル

console.log(binary, octal, hexadecimal); // 10 493 255

/**
 * bigint型：任意精度（どのくらい大きい数であっても正しく表示できる）
 */
const bigNum: bigint = (123n + 456n) * 2n;
console.log(bigNum);

/**
 * Unicodeを使用
 */
console.log('Hello \u{796d} world!'); // Hello 祭 world!

/**
 * nullとundefined
 * 何もないことを示すプリミティブが2種類存在するのはjs,tsの特徴
 */
const val1: null = null;
const val2: undefined = undefined; // undefinedの方がサポートが手厚い

/**
 * 暗黙の変換
 */
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question('数字を入力してください（string型で処理されます）:', (num1) => {
//   const sum1 = num1 + 1000; // string型に暗黙の変換が行われている
//   console.log(sum1);
//   rl.close;
// });

rl.question('数字を入力してください（number型で処理されます）:', (num1) => {
  const num2 = Number(num1); // number型に変換
  /**
   * Numberで変換できなかった場合NaNが返却される
   */
  const sum1 = num2 + 1000;
  console.log(sum1);
  rl.close;
});
