import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TablerIconsModule} from 'angular-tabler-icons';
import {IconCamera, IconHeart, IconBrandGithub} from 'angular-tabler-icons/icons';

const icons = {
  IconCamera,
  IconHeart,
  IconBrandGithub
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
