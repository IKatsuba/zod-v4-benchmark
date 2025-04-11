import { bench } from '../lib/bench.ts';

bench(
  'string',
  (zod) => zod.string(),
  () => `${Math.random()}`,
);

bench('number', (zod) => zod.number(), () => Math.random());

bench('boolean', (zod) => zod.boolean(), () => Math.random() > 0.5);

bench(
  'array',
  (zod) => zod.array(zod.string()),
  () => Array.from({ length: 10 }, () => `${Math.random()}`),
);

bench('object', (zod) =>
  zod.object({
    name: zod.string(),
    age: zod.number(),
  }), () => ({
    name: `${Math.random()}`,
    age: Math.random(),
  }));

bench(
  'union',
  (zod) => zod.union([zod.string(), zod.number()]),
  () => Math.random() > 0.5 ? `${Math.random()}` : Math.random(),
);
