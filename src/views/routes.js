import index from './index.vue'
import _default from 'view-template/default.vue'
import _404 from 'view-template/404.vue'

import base from './base/'
import form from './form/'
import layout from './layout/'
import navigation from './navigation/'

export default [
   {
      path: '/',
      component: index,
      children: [
         {
            path: '',
            component: _default
         },
         {
            path: 'base',
            component: base,
            children: [
               {
                  path: '',
                  component: _default
               },
               {
                  path: 'button',
                  component: () => import('./base/button.md')
               },
               {
                  path: 'dialog',
                  component: () => import('./base/dialog.md')
               },
               {
                  path: 'message',
                  component: () => import('./base/message.md')
               },
               {
                  path: 'tabs',
                  component: () => import('./base/tabs.md')
               },
               {
                  path: 'bubble',
                  component: () => import('./base/bubble.md')
               },
               {
                  path: 'dropdown',
                  component: () => import('./base/dropdown.md')
               },
               {
                  path: 'floatMenu',
                  component: () => import('./base/float-menu.md')
               },
               {
                  path: 'contextmenu',
                  component: () => import('./base/contextmenu.md')
               },
               {
                  path: 'drawer',
                  component: () => import('./base/drawer.md')
               },
               {
                  path: 'tip',
                  component: () => import('./base/tip.md')
               },
               {
                  path: 'loading',
                  component: () => import('./base/loading.md')
               }
            ]
         },
         {
            path: 'layout',
            component: layout,
            children: [

            ]
         },
         {
            path: 'navigation',
            component: navigation,
            children: [
               {
                  path: 'paging',
                  component: () => import('./navigation/paging.md')
               },
               {
                  path: 'navbar',
                  component: () => import('./navigation/navbar.md')
               },
            ]
         },
         {
            path: 'form',
            component: form,
            children: [
               {
                  path: '',
                  component: _default
               },
               {
                  path: 'input/input',
                  component: () => import(/* webpackChunkName: "form" */ './form/input.md')
                  
               },
               {
                  path: 'input/range',
                  component: () => import(/* webpackChunkName: "form" */ './form/range.md')
               },
               {
                  path: 'radio',
                  component: () => import(/* webpackChunkName: "form" */ './form/radio.md')
               },
               {
                  path: 'select',
                  component: () => import(/* webpackChunkName: "form" */ './form/select.md')
               },
               {
                  path: 'cascader',
                  component: () => import(/* webpackChunkName: "form" */ './form/cascader.md')
               },
               {
                  path: 'date',
                  component: () => import(/* webpackChunkName: "form" */ './form/date.md')
               },
               {
                  path: 'upload',
                  component: () => import(/* webpackChunkName: "form" */ './form/upload.md'),
               },
               {
                  path: 'slider',
                  component: () => import('./form/slider.md')
               },
               {
                  path: 'tag',
                  component: () => import('./form/tag.md')
               },
               {
                  path: 'switch',
                  component: () => import('./form/switch.md')
               }
            ]
         },
         {
            path: 'document',
            component: () => import('./document/'),
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
