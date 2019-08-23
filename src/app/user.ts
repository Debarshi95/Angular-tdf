export class User {
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public password: string,
    public choice: string,
    public usertype: string,
    public subscribe: boolean
  ) {}
}
