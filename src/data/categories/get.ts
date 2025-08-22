// O server-only é para deixar claro que este código só deve ser executado no servidor
import "server-only";

import { db } from "@/db";

export const getCategories = async () => {
  const categories = await db.query.categoryTable.findMany();
  return categories;
};