export class TeamInfoDto {
  public team_id!: string;
  public members!: number;
  public reports!: number;
  public discussions!: number;
  public comments!: number;
  public lastChange!: Date;
}
