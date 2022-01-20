export class Invite {
  public id: string
  public code: string
  public team_id: string 
  public email: string 
  public role: string
  public accepted: boolean
 
  constructor(id: string, code: string, team_id: string, email: string, role: string, accepted: boolean) {
    this.id = id
    this.code = code
    this.team_id = team_id
    this.email = email
    this.role = role
    this.accepted = accepted
  }
}