import index from './index.vue'
import _404 from 'view-ui/Page/404.vue'

import Main from '@/components/Main.vue';
import Default from '@/components/Default.vue';

export default [
   {
      path: '/',
      component: index,
      children: [
         {
            path: '',
            component: () => import('./Home/index.md')
         },
         {
            path: 'base',
            component: Main,
            children: [
               {
                  path: '',
                  component: Default
               },
               {
                  path: 'button',
                  component: () => import('./Base/button.md')
               },
               {
                  path: 'dialog',
                  component: () => import('./Base/dialog.md')
               },
               {
                  path: 'message',
                  component: () => import('./Base/message.md')
               },
               {
                  path: 'tabs',
                  component: () => import('./Base/tabs.md')
               },
               {
                  path: 'bubble',
                  component: () => import('./Base/bubble.md')
               },
               {
                  path: 'dropdown',
                  component: () => import('./Base/dropdown.md')
               },
               {
                  path: 'floatMenu',
                  component: () => import('./Base/float-menu.md')
               },
               {
                  path: 'contextmenu',
                  component: () => import('./Base/contextmenu.md')
               },
               {
                  path: 'drawer',
                  component: () => import('./Base/drawer.md')
               },
               {
                  path: 'tip',
                  component: () => import('./Base/tip.md')
               },
               {
                  path: 'loading',
                  component: () => import('./Base/loading.md')
               }
            ]
         },
         {
            path: 'layout',
            component: Main,
            children: [

            ]
         },
         {
            path: 'navigation',
            component: Main,
            children: [
               {
                  path: 'pagination',
                  component: () => import('./Navigation/pagination.md')
               },
               {
                  path: 'navbar',
                  component: () => import('./Navigation/navbar.md')
               },
            ]
         },
         {
            path: 'form',
            component: Main,
            children: [
               {
                  path: '',
                  component: Default
               },
               {
                  path: 'input/input',
                  component: () => import(/* webpackChunkName: "form" */ './Form/input.md')
                  
               },
               {
                  path: 'input/range',
                  component: () => import(/* webpackChunkName: "form" */ './Form/range.md')
               },
               {
                  path: 'radio',
                  component: () => import(/* webpackChunkName: "form" */ './Form/radio.md')
               },
               {
                  path: 'select',
                  component: () => import(/* webpackChunkName: "form" */ './Form/select.md')
               },
               {
                  path: 'cascader',
                  component: () => import(/* webpackChunkName: "form" */ './Form/cascader.md')
               },
               {
                  path: 'date',
                  component: () => import(/* webpackChunkName: "form" */ './Form/date.md')
               },
               {
                  path: 'image',
                  component: () => import(/* webpackChunkName: "form" */ './Form/image.md'),
               },
               {
                  path: 'upload',
                  component: () => import(/* webpackChunkName: "form" */ './Form/upload.md'),
               },
               {
                  path: 'slider',
                  component: () => import('./Form/slider.md')
               },
               {
                  path: 'tag',
                  component: () => import('./Form/tag.md')
               },
               {
                  path: 'switch',
                  component: () => import('./Form/switch.md')
               }
            ]
         },
         {
            path: 'document',
            component: () => import('./Document/index.md'),
         },
         {
            path: '*',
            component: _404
         },
      ]
   },
   {
      path: '*',
      component: _404
   }
]
