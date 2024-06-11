export class UserDto {
  readonly name: string;
  readonly mail: string;
  readonly password: string;

  constructor(entity: Partial<UserDto>) {
    Object.assign(this, entity);
  }
}
