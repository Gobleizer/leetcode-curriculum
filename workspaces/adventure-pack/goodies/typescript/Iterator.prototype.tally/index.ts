import "../Iterator.prototype.toIterable";
import { iteratorPrototype } from "../Iterator.prototype";

declare global {
  interface Iterator<T> {
    tally(this: Iterator<T>): Map<T, number>;
  }
}

iteratorPrototype.tally = function <T>(this: Iterator<T>): Map<T, number> {
  const tally = new Map<T, number>();

  for (const element of this.toIterable()) {
    tally.set(element, (tally.get(element) ?? 0) + 1);
  }

  return tally;
};
