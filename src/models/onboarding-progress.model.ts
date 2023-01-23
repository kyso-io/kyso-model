import { IsBoolean } from 'class-validator';

export class OnboardingProgress {
  @IsBoolean()
  public step_1: boolean;

  @IsBoolean()
  public step_2: boolean;

  @IsBoolean()
  public step_3: boolean;

  @IsBoolean()
  public step_4: boolean;

  @IsBoolean()
  public step_5: boolean;

  @IsBoolean()
  public finish_and_remove: boolean;

  constructor(step_1: boolean, step_2: boolean, step_3: boolean, step_4: boolean, step_5: boolean, finish_and_remove: boolean) {
    this.step_1 = step_1;
    this.step_2 = step_2;
    this.step_3 = step_3;
    this.step_4 = step_4;
    this.step_5 = step_5;
    this.finish_and_remove = finish_and_remove;
  }

  validate(): boolean {
    return true;
  }

  public getProgressPercentage(): number {
    let completed = 0;

    if (this.step_1) completed++;
    if (this.step_2) completed++;
    if (this.step_3) completed++;
    if (this.step_4) completed++;
    if (this.step_5) completed++;

    return Math.round((completed * 100) / 5);
  }

  static createEmpty(): OnboardingProgress {
    return new OnboardingProgress(false, false, false, false, false, false);
  }

  static examples(): { [key: string]: { value: OnboardingProgress } } {
    return {
      OnboardingProgress: {
        value: OnboardingProgress.createEmpty(),
      },
    };
  }
}
