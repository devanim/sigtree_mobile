export default class ArticleBrief {
  public id!: number;
  public tags: string | undefined;
  //public tagsArray: string[] | undefined;
  public title!: string;
  public excerpt!: string;
  public image: string | undefined;
  public timestamp!: string;
  //public timestampDate: Date | undefined;
}