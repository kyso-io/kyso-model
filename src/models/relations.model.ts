import { User } from './user.model'
import { Report } from './report.model'
import { Comment } from './comment.model'
import { Team } from './team.model'
import { Organization } from './organization.model'

export interface Relations {
    [key: string]: User | Report | Comment | Team | Organization | null
}
