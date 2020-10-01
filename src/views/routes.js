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
            name: "基础",
            icon: "vd-changyongshili",
            path: 'base',
            component: Main,
            children: [
               {
                  path: '',
                  component: Default
               },
               {
                  name: "按钮",
                  icon: "vd-logo",
                  show: false,
                  path: 'button',
                  component: () => import('./Base/button.md')
               },
               {
                  name: "弹层",
                  icon: "vd-logo",
                  path: 'dialog',
                  component: () => import('./Base/dialog.md'),
               },
               {
                  name: "消息框",
                  icon: "vd-logo",
                  path: 'message',
                  component: () => import('./Base/message.md')
               },
               {
                  name: "选项卡",
                  icon: "vd-logo",
                  path: 'tabs',
                  component: () => import('./Base/tabs.md')
               },
               {
                  name: "气泡",
                  icon: "vd-logo",
                  path: 'bubble',
                  component: () => import('./Base/bubble.md')
               },
               {
                  name: "下拉框",
                  icon: "vd-logo",
                  path: 'dropdown',
                  component: () => import('./Base/dropdown.md')
               },
               {
                  name: "浮动菜单",
                  icon: "vd-logo",
                  path: 'floatMenu',
                  component: () => import('./Base/float-menu.md')
               },
               {
                  name: "右键菜单",
                  icon: "vd-logo",
                  path: 'contextmenu',
                  component: () => import('./Base/contextmenu.md')
               },
               {
                  name: "drawer",
                  icon: "vd-logo",
                  path: 'drawer',
                  component: () => import('./Base/drawer.md')
               },
               {
                  name: "tip",
                  icon: "vd-logo",
                  path: 'tip',
                  component: () => import('./Base/tip.md')
               },
               {
                  name: "loading",
                  icon: "vd-logo",
                  path: 'loading',
                  component: () => import('./Base/loading.md')
               }
            ]
         },
         {
            path: 'layout',
            component: Main,
            children: []
         },
         {
            name: "导航",
            icon: "vd-dingwei",
            path: 'navigation',
            component: Main,
            children: [
               {
                  name: "导航",
                  icon: "vd-logo",
                  path: 'navbar',
                  component: () => import('./Navigation/navbar.md')
               },
               {
                  name: "分页",
                  icon: "vd-logo",
                  path: 'pagination',
                  component: () => import('./Navigation/pagination.md')
               }
            ]
         },
         {
            name: "表单",
            icon: "vd-form",
            path: 'form',
            component: Main,
            children: [
               {
                  path: '',
                  component: Default
               },
               {
                  name: "input",
                  icon: "vd-logo",
                  path: 'input',
                  component: () => import(/* webpackChunkName: "form" */ './Form/input.md')

               },
               {
                  name: "radio",
                  icon: "vd-logo",
                  path: 'radio',
                  component: () => import(/* webpackChunkName: "form" */ './Form/radio.md')
               },
               {
                  name: "select",
                  icon: "vd-logo",
                  path: 'select',
                  component: () => import(/* webpackChunkName: "form" */ './Form/select.md')
               },
               {
                  name: "cascader",
                  icon: "vd-logo",
                  path: 'cascader',
                  component: () => import(/* webpackChunkName: "form" */ './Form/cascader.md')
               },
               {
                  name: "date picker",
                  icon: "vd-logo",
                  path: 'date',
                  component: () => import(/* webpackChunkName: "form" */ './Form/date.md')
               },
               {
                  name: "image",
                  icon: "vd-logo",
                  path: 'image',
                  component: () => import(/* webpackChunkName: "form" */ './Form/image.md'),
               },
               {
                  name: "upload",
                  icon: "vd-logo",
                  path: 'upload',
                  component: () => import(/* webpackChunkName: "form" */ './Form/upload.md'),
               },
               {
                  name: "slider",
                  icon: "vd-logo",
                  path: 'slider',
                  component: () => import('./Form/slider.md')
               },
               {
                  name: "tag",
                  icon: "vd-logo",
                  path: 'tag',
                  component: () => import('./Form/tag.md')
               },
               {
                  name: "switch",
                  icon: "vd-logo",
                  path: 'switch',
                  component: () => import('./Form/switch.md')
               }
            ]
         },
         {
            name: "文档",
            icon: "vd-logo",
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
