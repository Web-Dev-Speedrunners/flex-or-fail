import { StudentSequelizeModel } from '../../service/database';
import GetRandomImageUrl from '../../service/placeholder/get_random_image_url';
import { CreateStudentValidator } from '../../util/validator';

export type StudentModelCreateProps = {
  firstName: string
  lastName: string,
  gpa: number,
  email: string,
  imageUrl?: string
}

export default class StudentModel {
  id: number;

  firstName: string;

  lastName: string;

  gpa: number;

  email: string;

  imageUrl: string;

  private constructor(dbStudent: StudentSequelizeModel) {
    this.id = dbStudent.id;
    this.firstName = dbStudent.firstName;
    this.lastName = dbStudent.lastName;
    this.email = dbStudent.email;
    this.gpa = dbStudent.gpa;
    this.imageUrl = dbStudent.imageUrl;
  }

  static async CreateStudent(props: StudentModelCreateProps) : Promise<StudentModel> {
    await CreateStudentValidator.validateAsync(props);
    const {
      firstName,
      lastName,
      email,
      gpa,
    } = props;
    const imageUrl = props.imageUrl ? props.imageUrl : await GetRandomImageUrl({
      width: 400,
      height: 400,
    });
    const dbStudent = await StudentSequelizeModel.create({
      firstName,
      lastName,
      email,
      gpa,
      imageUrl,
    });
    return new StudentModel(dbStudent);
  }

  static async GetAll() : Promise<StudentModel[]> {
    const students = await StudentSequelizeModel.findAll({ where: {} });
    return students.map((dbStudent) => new StudentModel(dbStudent));
  }
}
