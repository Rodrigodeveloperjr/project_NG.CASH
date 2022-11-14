import { Request, Response } from "express"
import { AppDataSource } from "../../data-source"
import { Account } from "../../entities/accounts"
import { User } from "../../entities/users"
import { specificAccountService } from "../../services/accounts/specificAccount.service"


const specificAccountController = async (req: Request, res: Response) => {

    const username = req.username

    const userRepository = AppDataSource.getRepository(User)

    const accountRepository = AppDataSource.getRepository(Account)

    const user = await userRepository.findOneBy({ username })

    const account = await accountRepository.findOneBy({ id: user!.accountId })

    const balanceAccount = await specificAccountService(account?.id)

    return res.json(balanceAccount)
}

export { specificAccountController }