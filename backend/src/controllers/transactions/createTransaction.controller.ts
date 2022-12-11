import { createTransactionService } from '../../services/transactions/createTransaction.service'
import { ITransactionRequest } from '../../interfaces/transactions'
import { AppDataSource } from '../../data-source'
import { Account } from '../../entities/accounts'
import { Request, Response } from 'express'
import { User } from '../../entities/users'


const createTransactionController = async (req: Request, res: Response) => {

    const usernameDebt: string = req.username

    const data: ITransactionRequest = req.body

    const userRepository = AppDataSource.getRepository(User)

    const accountRepository = AppDataSource.getRepository(Account)

    const user_debited_id = await userRepository.findOneBy({ username: usernameDebt })

    const debited_id = await accountRepository.findOneBy({ id: user_debited_id!.accountId.id })

    const newTransaction = await createTransactionService(debited_id!.id, data)

    return res.status(201).json(newTransaction)
}

export { createTransactionController }