"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const bigNum = (123n + 456n) * 2n;
console.log(bigNum);
/**
 * Unicodeを使用
 */
console.log('Hello \u{796d} world!'); // Hello 祭 world!
/**
 * nullとundefined
 * 何もないことを示すプリミティブが2種類存在するのはjs,tsの特徴
 */
const val1 = null;
const val2 = undefined; // undefinedの方がサポートが手厚い
/**
 * 暗黙の変換
 */
const readline_1 = require("readline");
const rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
});
// rl.question('数字を入力してください（string型で処理されます）:', (num1) => {
//   const sum1 = num1 + 1000; // string型に暗黙の変換が行われている
//   console.log(sum1);
//   rl.close;
// });
// rl.question('数字を入力してください（number型で処理されます）:', (num1) => {
//   const num2 = Number(num1); // number型に変換
//   /**
//    * Numberで変換できなかった場合NaNが返却される
//    */
//   const sum1 = num2 + 1000;
//   console.log(sum1);
//   rl.close;
// });
/**
 * オペランドと型
 * number型とbigint型を混在させることはできない
 */
const res1 = 5 - 1.89; // number型
const res2 = 2n ** 5n; // bigint型
/**
 * インクリメント、デクリメント
 * 明示的な理由がない限り、前置インクリメントを使用する
 */
let foo = 10;
console.log(++foo); // 11
console.log(--foo); // 10
console.log(foo--); // 10（変動前の値が出力される）
let x = 5;
let y = x++; // yには5が代入され、その後でxが6になる
/**
 * 三項演算子
 * boolean以外の型が与えられた場合は自動的に型変換が行われる
 * false, 0, '' (空文字), null, undefined, NaNはfalseとして処理される
 */
const value = null;
const result = value ? '存在する' : '存在しない'; // 存在しない
console.log(result);
// rl.question('名前を入力してください:', (name: string) => {
//   if(name == '') {
//     name = '名無し';
//   }
//   console.log(`こんにちは、${name}さん`);
//   rl.close;
// });
/**
 * ビット演算
 */
console.log(0b0101 | 0b1100);
console.log(0b0101 & 0b1100);
console.log(~0b0101);
