import { z as zod3 } from 'zod3';
import { z as zod4 } from 'zod4';

export function createSchema(fn: (zod: typeof zod4) => any) {
  return {
    v3: fn(zod3 as any),
    v4: fn(zod4),
  };
}
