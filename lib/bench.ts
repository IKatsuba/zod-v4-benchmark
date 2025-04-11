import { z as zod4 } from 'npm:zod@next';
import { createSchema } from './create-schema.ts';
import { createData } from './create-data.ts';

export function bench(
  name: string,
  schemaFactory: (zod: typeof zod4) => any,
  dataFactory: () => any,
  length = 10000,
) {
  const schema = createSchema(schemaFactory);

  Deno.bench(`v3`, { group: name }, (t) => {
    const data = createData(length, dataFactory);

    t.start();
    data.forEach((d) => schema.v3.parse(d));
    t.end();
  });

  Deno.bench(`v4`, { group: name, baseline: true }, (t) => {
    const data = createData(length, dataFactory);

    t.start();
    data.forEach((d) => schema.v4.parse(d));
    t.end();
  });
}
