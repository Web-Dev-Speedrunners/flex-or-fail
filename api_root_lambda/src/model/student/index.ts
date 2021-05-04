import { StudentSequelizeModel } from '../../service/database';

export interface IStudentModel {
  id: number,
  firstName: string
}

export default class StudentModel {
  static async GetStudentById(id: string) : Promise<IStudentModel> {
    const databaseEntry = await StudentSequelizeModel.findByPk(id);
    if (databaseEntry === undefined || databaseEntry === null) throw new Error("Student doesn't exists");
    const student: IStudentModel = {
      id: databaseEntry.id,
      firstName: databaseEntry.firstName,
    };
    return student;
  }
}
