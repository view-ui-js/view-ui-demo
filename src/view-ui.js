import "view-ui/style/";
import "view-ui/icon/iconfont.css";

import Vue from 'vue';
import axios from 'axios';

import NavBar from "view-ui/NavBar.vue";
Vue.use(NavBar);

import Header from "view-ui/Header.vue";
Vue.use(Header);

import Content from "view-ui/Content.vue";
Vue.use(Content);

import Footer from "view-ui/Footer.vue";
Vue.use(Footer);

// flex 行
import Row from "view-ui/Row.vue";
Vue.use(Row);

// flex 列
import Column from "view-ui/Column.vue";
Vue.use(Column);

// 按钮
import Button from 'view-ui/Button.vue';
Vue.use(Button);

import Buttons from 'view-ui/Buttons.vue';
Vue.use(Buttons);

// 弹层
import Dialog from 'view-ui/Dialog.vue';
import $Confirm from 'view-ui/$Confirm.vue';
Vue.use(Dialog);
Vue.use($Confirm);

import DialogPage from 'view-ui/DialogPage.vue';
Vue.use(DialogPage);

import Drawer from 'view-ui/Drawer.vue';
Vue.use(Drawer);

import Search from "view-ui/Search.vue";
Vue.use(Search);

/**
 * 表单
 */

import FormPage from 'view-ui/Form/Page.vue';
Vue.use(FormPage);
 
import Form from 'view-ui/Form/Index.vue';
Vue.use(Form);

import Input from 'view-ui/Form/Input.vue';
Vue.use(Input);

import InputRange from 'view-ui/Form/InputRange.vue';
Vue.use(InputRange);

import Textarea from 'view-ui/Form/Textarea.vue';
Vue.use(Textarea);

import Select from 'view-ui/Form/Select/index.js';
Vue.use(Select);

// import Select from 'view-ui/Form/Select.vue';
// Vue.use(Select);

// import Selects from 'view-ui/Form/Selects.vue';
// Vue.use(Selects);

// import SelectEdit from 'view-ui/Form/SelectEdit.vue';
// Vue.use(SelectEdit);

import Cascader from 'view-ui/Form/Cascader.vue';
Vue.use(Cascader);

import Radio from 'view-ui/Form/Radio.vue';
Vue.use(Radio);


// 日期选择器
import DateInline from 'view-ui/Date/Inline.vue';
import DateInlineRange from 'view-ui/Date/Range.vue';
Vue.use(DateInline);
Vue.use(DateInlineRange);

// 内联日期
import DatePicker from 'view-ui/Date/Picker.vue';
import DatePickerRange from 'view-ui/Date/PickerRange.vue';
Vue.use(DatePicker);
Vue.use(DatePickerRange);

import Tag from 'view-ui/Form/Tag.vue';
Vue.use(Tag);

import Switch from 'view-ui/Switch.vue';
Vue.use(Switch);

// 滑块
import Slider from "view-ui/Slider/Index.vue";
import SliderRange from "view-ui/Slider/Range.vue";
Vue.use(Slider);
Vue.use(SliderRange);

// 图片
import Img from "view-ui/Img.vue";
Vue.use(Img);

// 单图上传
import Image from "view-ui/Form/Image.vue";

Vue.use(Image, function(url, data) {
  return axios.post(url, data);
});

// 多图上传
import Images from "view-ui/Form/Images.vue";

Vue.use(Images, function(url, data) {
  return axios.post(url, data);
});

// 气泡
import Bubble from 'view-ui/Bubble.vue';
Vue.use(Bubble);

// 警示框
import Alert from 'view-ui/Alert.vue';
Vue.use(Alert);

// 消息框
import $Message from 'view-ui/$Message.vue';
Vue.use($Message);

// 图片预览
import $ImagePreview from 'view-ui/$ImagePreview.vue';
Vue.use($ImagePreview);

// tab选项卡
import Tabs from 'view-ui/Tabs.vue';
Vue.use(Tabs);

// 加载中
import Loading from 'view-ui/Loading.vue';
Vue.use(Loading);

// 列表
import List from 'view-ui/List.vue';
Vue.use(List);

import ListItem from 'view-ui/ListItem.vue';
Vue.use(ListItem);

// table标签增强
import Table from 'view-ui/Table.vue';
Vue.use(Table);

// tip提示框
import Tip from 'view-ui/Tip.vue';
Vue.use(Tip);

// 浮动菜单
import FloatMenu from 'view-ui/FloatMenu.vue';
Vue.use(FloatMenu);

// 下拉菜单
import Dropdown from 'view-ui/Dropdown/Index.vue';
import DropdownSelect from 'view-ui/Dropdown/Select.vue';
import DropdownRange from 'view-ui/Dropdown/Range.vue';

Vue.use(Dropdown);
Vue.use(DropdownSelect);
Vue.use(DropdownRange);

// 分页
import Pagination from 'view-ui/Pagination.vue';
Vue.use(Pagination);

// 右键菜单
import $ContextMenu from 'view-ui/$ContextMenu.vue';
Vue.use($ContextMenu);

import MenuLine from 'view-ui/Menu/Line.vue';
Vue.use(MenuLine);

import theme from 'view-ui/theme.js';

export default theme;
