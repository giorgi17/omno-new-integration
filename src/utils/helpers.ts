import { IncomingHttpHeaders } from 'http';
import { stripeSchema } from './schemas';
import { StripeSchema } from './interfaces';

export const matchSchemas = (
    headers: IncomingHttpHeaders
): StripeSchema | undefined => {
    const allSchemaNames = stripeSchema.map(item => item.name);

    let schemaObject = {};

    for (let i = 0; i < allSchemaNames.length; i++) {
        const currentSchema = allSchemaNames[i];
        const currentSchemaLowecase = allSchemaNames[i].toLocaleLowerCase();
        const schemaValue = headers[`x-${currentSchemaLowecase}`];

        if (!schemaValue) return;

        schemaObject[currentSchema] = schemaValue;
    }

    return schemaObject as StripeSchema;
};
