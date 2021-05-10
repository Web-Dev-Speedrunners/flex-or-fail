import { StudentSequelizeModel, CampusSequelizeModel } from '../../service/database';
import GetRandomImageUrl from '../../service/placeholder/get_random_image_url';
import { CreateCampusValidator } from '../../util/validator';
import CampusModelError, { CampusModelErrorType } from './error';

export type CampusModelCreateProps = {
  name: string,
  address: string,
  description: string,
  imageUrl?: string,
}

export default class CampusModel {
  id: number;

  name: string;

  address: string;

  description: string;

  imageUrl: string;

  private constructor(dbCampus: CampusSequelizeModel) {
    this.id = dbCampus.id;
    this.name = dbCampus.name;
    this.address = dbCampus.address;
    this.description = dbCampus.description;
    this.imageUrl = dbCampus.imageUrl;
  }

  static async CreateCampus(props: CampusModelCreateProps): Promise<CampusModel> {
    // Validate the input
    await CreateCampusValidator.validateAsync(props);
    // Destructure
    const {
      name,
      address,
      description,
    } = props;
    const imageUrl = props.imageUrl ? props.imageUrl : await GetRandomImageUrl({
      width: 400,
      height: 400,
    });

    const dbCampus = await CampusSequelizeModel.create({
      name,
      address,
      description,
      imageUrl,
    });

    return new CampusModel(dbCampus);
  }

  static async DeleteCampus(campusId: string): Promise<void> {
    const dbCampus = await CampusSequelizeModel.findByPk(campusId);
    if (dbCampus === undefined || dbCampus === null) {
      throw new CampusModelError(CampusModelErrorType.CampusDoesntExist);
    }
    // Remove campus association from students who are enrolled
    await StudentSequelizeModel.update({
      campusId: null,
    }, {
      where: { campusId: dbCampus.id },
    });
    // Delete Campus
    await dbCampus.destroy();
  }

  static async GetAll(): Promise<Array<CampusModel>> {
    const dbCampuses = await CampusSequelizeModel.findAll({ where: {} });
    return dbCampuses.map((dbCampus) => new CampusModel(dbCampus));
  }

  static async GetById(campusId: string) : Promise<CampusModel> {
    const dbCampus = await CampusSequelizeModel.findByPk(campusId);
    if (dbCampus === undefined || dbCampus === null) {
      throw new CampusModelError(CampusModelErrorType.CampusDoesntExist);
    }
    return new CampusModel(dbCampus);
  }
}
