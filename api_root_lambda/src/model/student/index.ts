import { StudentSequelizeModel, CampusSequelizeModel } from '../../service/database';
import GetRandomImageUrl from '../../service/placeholder/get_random_image_url';
import { CreateStudentValidator } from '../../util/validator';
import CampusModel from '../campus';
import StudentModelError, { StudentModelErrorType } from './error';

export type StudentModelCreateProps = {
  firstName: string;
  lastName: string;
  gpa: number;
  email: string;
  imageUrl?: string;
};

export type StudentModelUpdateProps = Partial<StudentModelCreateProps>

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

  static async CreateStudent(
    props: StudentModelCreateProps,
  ): Promise<StudentModel> {
    await CreateStudentValidator.validateAsync(props);
    const {
      firstName, lastName, email, gpa,
    } = props;
    const imageUrl = props.imageUrl
      ? props.imageUrl
      : await GetRandomImageUrl({
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

  static async GetAll(): Promise<StudentModel[]> {
    const students = await StudentSequelizeModel.findAll({ where: {} });
    return students.map((dbStudent) => new StudentModel(dbStudent));
  }

  static async GetById(studentId: string): Promise<StudentModel> {
    const student = await StudentSequelizeModel.findByPk(studentId);
    if (student === undefined || student === null) {
      throw new StudentModelError(StudentModelErrorType.UserDoesntExist);
    }
    return new StudentModel(student);
  }

  static async EnrollStudent(studentId: string, campusId: string): Promise<void> {
    // Check both studentId and campusId are valid
    await this.GetById(studentId);
    await CampusModel.GetById(campusId);

    await StudentSequelizeModel.update({
      campusId,
    }, {
      where: { id: studentId },
    });
  }

  static async UnenrollStudent(studentId: string): Promise<void> {
    await this.GetById(studentId);

    await StudentSequelizeModel.update({
      campusId: null,
    }, {
      where: { id: studentId },
    });
  }

  static async GetStudentsInCampus(campusId: string): Promise<StudentModel[]> {
    const campus = await CampusSequelizeModel.findByPk(campusId);
    if (campus === undefined || campus === null) {
      throw new StudentModelError(StudentModelErrorType.CampusDoesntExist);
    }

    const students = await StudentSequelizeModel.findAll({
      where: {
        campusId: campus.id,
      },
    });

    return students.map((student) => new StudentModel(student));
  }

  static async GetRecentStudents(queryLimit?: number): Promise<StudentModel[]> {
    let limit = 10;
    if (queryLimit) {
      limit = queryLimit;
    }
    const dbRecentStudents = await StudentSequelizeModel.findAll({
      order: [['createdAt', 'DESC']],
      limit,
    });
    return dbRecentStudents.map((student) => new StudentModel(student));
  }

  static async UpdateStudent(studentId: number, updates: StudentModelUpdateProps) : Promise<void> {
    const [updateCount] = await StudentSequelizeModel.update(updates, {
      where: {
        id: studentId,
      },
    });
    if (updateCount === 0) throw new StudentModelError(StudentModelErrorType.UserDoesntExist);
  }
}
