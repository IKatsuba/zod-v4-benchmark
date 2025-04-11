import { z as zod3 } from 'npm:zod@3.24.2';
import { z as zod4 } from 'npm:zod@next';

export function createSchema(fn: (zod: typeof zod4) => any) {
  return {
    v3: fn(zod3 as any),
    v4: fn(zod4),
  };
}
