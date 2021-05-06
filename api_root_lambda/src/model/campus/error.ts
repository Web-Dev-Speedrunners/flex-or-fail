export enum CampusModelErrorType {
  CampusDoesntExist
}

const ErrorTypeMessage : Record<CampusModelErrorType, string> = {
  [CampusModelErrorType.CampusDoesntExist]: "Campus doesn't exists",
};

export default class CampusModelError extends Error {
  readonly type: CampusModelErrorType

  constructor(type: CampusModelErrorType, message?: string) {
    super();
    this.type = type;
    this.message = message || ErrorTypeMessage[type];
  }
}
