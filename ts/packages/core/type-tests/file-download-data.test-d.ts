import type { FileDownloadData } from '../src';

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;
type Expect<T extends true> = T;

type FileDownloadPathIsNullable = Expect<Equal<FileDownloadData['filePath'], string | null>>;
declare const check: FileDownloadPathIsNullable;
void check;
