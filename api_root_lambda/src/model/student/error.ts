export enum StudentModelErrorType {
  UserDoesntExist,
  CampusDoesntExist,
}

const ErrorTypeMessage : Record<StudentModelErrorType, string> = {
  [StudentModelErrorType.UserDoesntExist]: "Student doesn't exists",
  [StudentModelErrorType.CampusDoesntExist]: "Campus doesn't exists",
};

export default class StudentModelError extends Error {
  readonly type: StudentModelErrorType

  constructor(type: StudentModelErrorType, message?: string) {
    super();
    this.type = type;
    this.message = message || ErrorTypeMessage[type];
  }
}
