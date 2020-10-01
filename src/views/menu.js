const menu = {
  base: {
    name: "基础",
    icon: "vd-changyongshili",
    children: {
      button: {
        name: "按钮",
        icon: "vd-logo",
        show: false
      },
      dialog: {
        name: "弹层",
        icon: "vd-logo",
      },
      tabs: {
        name: "选项卡",
        icon: "vd-logo",
      },
      message: {
        name: "消息框",
        icon: "vd-logo",
      },
      contextmenu: {
        name: "右键菜单",
        icon: "vd-logo",
      },
      bubble: {
        name: "气泡",
        icon: "vd-logo",
      },
      floatMenu: {
        name: "浮动菜单",
        icon: "vd-logo",
      },
      dropdown: {
        name: "下拉框",
        icon: "vd-logo",
      },
      tip: {
        name: "tip",
        icon: "vd-logo",
      },
      drawer: {
        name: "drawer",
        icon: "vd-logo",
      },
      loading: {
        name: "loading",
        icon: "vd-logo",
      },
    },
  },
  form: {
    name: "表单",
    icon: "vd-form",
    children: {
      input: {
        name: "input",
        icon: "vd-logo",
      },
      // "input-range": {
      //   name: "input range",
      //   icon: "vd-logo",
      // },
      radio: {
        name: "radio",
        icon: "vd-logo",
      },
      select: {
        name: "select",
        icon: "vd-logo",
      },
      cascader: {
        name: "cascader",
        icon: "vd-logo",
      },
      date: {
        name: "date picker",
        icon: "vd-logo",
      },
      image: {
        name: "image",
        icon: "vd-logo",
      },
      upload: {
        name: "upload",
        icon: "vd-logo",
      },
      slider: {
        name: "slider",
        icon: "vd-logo",
      },
      tag: {
        name: "tag",
        icon: "vd-logo",
      },
      switch: {
        name: "switch",
        icon: "vd-logo",
      },
    },
  },
  navigation: {
    name: "导航",
    icon: "vd-dingwei",
    children: {
      navbar: {
        name: "导航",
        icon: "vd-logo",
      },
      pagination: {
        name: "分页",
        icon: "vd-logo",
      },
    },
  },
  layout: {
    name: "布局",
    icon: "vd-changyongshili"
  },
  document: {
    name: "文档",
    icon: "vd-logo",
    children: {},
  },
}

global.menu = menu;

export default menu;