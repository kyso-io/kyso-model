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

  constructor(step_1: boolean, step_2: boolean, step_3: boolean, step_4: boolean, step_5: boolean) {
    this.step_1 = step_1;
    this.step_2 = step_2;
    this.step_3 = step_3;
    this.step_4 = step_4;
    this.step_5 = step_5;
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
    return new OnboardingProgress(true, false, false, false, false);
  }

  static examples(): { [key: string]: { value: OnboardingProgress } } {
    return {
      OnboardingProgress: {
        value: OnboardingProgress.createEmpty(),
      },
    };
  }
}
