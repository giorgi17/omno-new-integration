import { Request, Response, NextFunction } from 'express';
import { testFields } from '../utils/fields';
import axios from 'axios';

const getSchema = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        message: 'PSP credential schema has been retrieved.',
        data: testFields,
    });
};

const processTransaction = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Receiving all data from core needed for transaction processing
    const schemaParams = req.body.schemaParams;

    // Do transaction processing and send pending status if there is no error
    // .....

    res.status(200).json({
        message: schemaParams
            ? 'Transaction is pending'
            : 'schemaParams were not received!',
    });
};

const transactionResponseHook = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Getting information from hook coming from PSP
    const isSuccessful = req.body.success;

    // Sending information about transaction to core hook
    // axios.post('https://core-url.com/transactionHook', {
    //     transactionInfo: isSuccessful,
    // });

    res.status(200).json({
        message: 'Information about transaction has been sent to core hook.',
    });
};

export default { getSchema, processTransaction, transactionResponseHook };
