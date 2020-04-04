export class Storage {
  public constructor(private readonly name: string) {}

  public set = (key: string, data: any) => {
    const newKey = this.name.concat('_').concat(key);
    localStorage.set(newKey, data);
  };

  public get = (key: string) => {
    const newKey = this.name.concat('_').concat(key);
    return localStorage.get(newKey);
  };

  public remove = (key: string) => {
    const newKey = this.name.concat('_').concat(key);
    return localStorage.remove(newKey);
  };
}
