export function isUndefnied(input: any): input is undefined{
  return typeof input === 'undefined';
}