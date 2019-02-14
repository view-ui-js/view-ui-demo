import index from './index.vue'
import _default from './default.vue'
import _404 from './404.vue'

import base from './base/'
import form from './form/'
import layout from './layout/'
import style from './style/'
import navigation from './navigation/'
import example from './example/'
import chart from './chart/'

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
            path: 'style',
            component: style,
            children: [
               {
                  path: 'menu',
                  component: () => import('./style/menu.md')
               },
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
            path: 'example',
            component: example,
            children: [
               {
                  path: '',
                  component: _default
               },
               {
                  path: 'list1',
                  component: () => import('./example/list1')
               },
               {
                  path: 'list2',
                  component: () => import('./example/list2')
               }
            ]
         },
         {
            path: 'chart',
            component: chart,
            children: [
               {
                  path: '',
                  component: _default
               },
               {
                  path: 'line',
                  component: () => import('./chart/line')
               },
               {
                  path: 'column',
                  component: () => import('./chart/column')
               },
               {
                  path: 'pie',
                  component: () => import('./chart/pie')
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
