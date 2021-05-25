export enum CampusModelErrorType {
  CampusDoesntExist,
  StudentDoesntExist,
  StudentIsntEnrolled,
}

const ErrorTypeMessage : Record<CampusModelErrorType, string> = {
  [CampusModelErrorType.CampusDoesntExist]: "Campus doesn't exists",
  [CampusModelErrorType.StudentDoesntExist]: "Student doesn't exists",
  [CampusModelErrorType.StudentIsntEnrolled]: "Student isn't enrolled in a Campus",
};

export default class CampusModelError extends Error {
  readonly type: CampusModelErrorType

  constructor(type: CampusModelErrorType, message?: string) {
    super();
    this.type = type;
    this.message = message || ErrorTypeMessage[type];
  }
}
