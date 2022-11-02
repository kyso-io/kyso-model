import { GitCommit } from './git-commit';

export interface GitMetadata {
  repository: string;
  branch: string;
  latest_commit: GitCommit[];
}