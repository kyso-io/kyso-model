import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { OnboardingProgress } from '../models/onboarding-progress.model';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class UpdateUserRequestDTO extends BaseDto implements StaticImplements<ApiMethods<UpdateUserRequestDTO>, typeof UpdateUserRequestDTO> {
  @IsOptional()
  @IsString()
  public name: string;

  @IsOptional()
  @IsString()
  public display_name: string;

  @IsOptional()
  @IsString()
  public location: string;

  @IsOptional()
  @IsString()
  public link: string;

  @IsOptional()
  @IsString()
  public bio: string;

  @IsOptional()
  @IsBoolean()
  public show_onboarding: boolean;

  @IsOptional()
  public onboarding_progress: OnboardingProgress;

  constructor(name: string, display_name: string, location: string, link: string, bio: string, show_onboarding: boolean, onboarding_progress: OnboardingProgress) {
    super();
    this.name = name;
    this.display_name = display_name;
    this.location = location;
    this.link = link;
    this.bio = bio;
    this.show_onboarding = show_onboarding;
    this.onboarding_progress = onboarding_progress;
  }
  validate(): boolean {
    return true;
  }

  static createEmpty(): UpdateUserRequestDTO {
    return new UpdateUserRequestDTO('', '', '', '', '', true, OnboardingProgress.createEmpty());
  }

  static examples(): { [key: string]: { value: UpdateUserRequestDTO } } {
    return {
      UpdateUserRequestDTO: {
        value: UpdateUserRequestDTO.createEmpty(),
      },
    };
  }
}
