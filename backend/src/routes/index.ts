import { transactionsRoutes } from "./transactions/transactions.routes";
import { accountsRoutes } from "./accounts/account.routes";
import { sessionRoutes } from "./session/session.routes";
import { usersRoutes } from "./users/users.routes";
import { Express } from "express";

const appRoutes = (app: Express) => {
  app.use("/users", usersRoutes());
  app.use("/session", sessionRoutes());
  app.use("/accounts", accountsRoutes());
  app.use("/transactions", transactionsRoutes());
};

export { appRoutes };
