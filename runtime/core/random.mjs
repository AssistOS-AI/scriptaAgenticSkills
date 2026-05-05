function hashString(value) {
  const text = String(value);
  let hash = 2166136261;

  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function mulberry32(seed) {
  let state = seed >>> 0;

  return function generate() {
    state += 0x6D2B79F5;
    let result = Math.imul(state ^ (state >>> 15), 1 | state);
    result ^= result + Math.imul(result ^ (result >>> 7), 61 | result);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

export function createSeededRandom(seedInput) {
  const random = mulberry32(hashString(seedInput ?? 'scripta-default-seed'));

  return {
    next() {
      return random();
    },
    int(min, max) {
      const lower = Math.ceil(min);
      const upper = Math.floor(max);
      return Math.floor(random() * (upper - lower + 1)) + lower;
    },
    pick(values) {
      if (!Array.isArray(values) || values.length === 0) {
        throw new Error('Cannot pick from an empty value set.');
      }

      return values[this.int(0, values.length - 1)];
    },
    sample(values, size) {
      const pool = [...values];
      const output = [];

      while (pool.length > 0 && output.length < size) {
        const index = this.int(0, pool.length - 1);
        output.push(pool.splice(index, 1)[0]);
      }

      return output;
    }
  };
}
