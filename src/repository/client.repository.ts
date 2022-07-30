import { Client } from "../entities";
import { dataSource } from "../config/database";

export const createClient = async (obj: any) => {
  const ClientRepo = dataSource.getRepository(Client);
  const data = ClientRepo.create(obj);
  const saveData = await ClientRepo.save(data);
  return saveData;
};
