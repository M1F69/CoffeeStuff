import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TablerIconsModule} from 'angular-tabler-icons';
import {IconCamera, IconHeart, IconBrandGithub, IconCup} from 'angular-tabler-icons/icons';

const icons = {
  IconCamera,
  IconHeart,
  IconBrandGithub,
  IconCup
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TablerIconsModule.pick(icons)
  ],
  exports: [TablerIconsModule]
})
export class IconsModule {
}
