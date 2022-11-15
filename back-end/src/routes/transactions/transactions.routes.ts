import { Router } from "express"

import { createTransactionController } from "../../controllers/transactions/createTransactions.controller"
import { listTransactionsController } from "../../controllers/transactions/listTransactions.controller"
import { listTransactionsKeywordController } from "../../controllers/transactions/listTransactionsKeyword.controller"
import { tokenMiddleware } from "../../middlewares/token.middleware"


const routes = Router()

const transactionsRoutes = () => {

    routes.post('',  tokenMiddleware, createTransactionController)
    routes.get('', tokenMiddleware, listTransactionsController)
    routes.get('/:value', tokenMiddleware, listTransactionsKeywordController)

    return routes
}

export { transactionsRoutes }