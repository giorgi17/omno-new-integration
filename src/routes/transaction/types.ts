import { Static, Type } from '@sinclair/typebox';

export const processTransactionRequestBody = Type.Object({
    schemaParams: Type.Boolean(),
});

export type processTransactionRequestBodyType = Static<
    typeof processTransactionRequestBody
>;

export const transactionResponseHookRequestBody = Type.Object({
    success: Type.Boolean(),
});

export type transactionResponseHookRequestBodyType = Static<
    typeof transactionResponseHookRequestBody
>;
