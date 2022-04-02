import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderItemComponent } from './components/header-item/header-item.component';
import { DLogoComponent } from './components/dlogo/dlogo.component';
import { LogoLoaderComponent } from './components/logo-loader/logo-loader.component';
import { LandingComponent } from './components/landing/landing.component';
import { SocialsComponent } from './components/socials/socials.component';
import { SocialIconComponent } from './components/social-icon/social-icon.component';
import { GutterSectionComponent } from './components/gutter-section/gutter-section.component';
import { EmailGutterComponent } from './components/email-gutter/email-gutter.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WorkExperienceSegmentComponent } from './components/work-experience-segment/work-experience-segment.component';
import { DateDurationPipe } from './pipes/date-duration.pipe';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { MobileMessageComponent } from './components/mobile-message/mobile-message.component';



@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    HeaderItemComponent,
    DLogoComponent,
    LogoLoaderComponent,
    LandingComponent,
    SocialsComponent,
    SocialIconComponent,
    GutterSectionComponent,
    EmailGutterComponent,
    AboutMeComponent,
    WorkExperienceSegmentComponent,
    DateDurationPipe,
    WorkExperienceComponent,
    ContactMeComponent,
    MobileMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      ButtonComponent,
      HeaderComponent,
      LogoLoaderComponent,
      LandingComponent,
      SocialsComponent,
      EmailGutterComponent,
      AboutMeComponent,
      WorkExperienceSegmentComponent, // Remove this
      WorkExperienceComponent,
      ContactMeComponent,
      MobileMessageComponent
  ]
})
export class DumbComponentsModule { }
