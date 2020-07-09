import Establishment from './Establishment';
import ICreateEstablishment from './ICreateEstablishment';

export default interface IEstablismentRepository {
  index(): Promise<Establishment[]>;
  findById(id: string): Promise<Establishment | undefined>;
  create(data: ICreateEstablishment): Promise<Establishment>;
  save(dataUser: Establishment): Promise<Establishment>;
}
