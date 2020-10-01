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
Vue.use(Dialog);

import $Confirm from 'view-ui/$Confirm.vue';
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

import Form from 'view-ui/Form.vue';
Vue.use(Form);

import FormPage from 'view-ui/FormPage.vue';
Vue.use(FormPage);

import Input from 'view-ui/Input/Index.js';
Vue.use(Input);

import Textarea from 'view-ui/Textarea.vue';
Vue.use(Textarea);

import Select from 'view-ui/Select/index.js';
Vue.use(Select);

import Cascader from 'view-ui/Cascader.vue';
Vue.use(Cascader);

import Radio from 'view-ui/Radio.vue';
Vue.use(Radio);

import Tag from 'view-ui/Tag.vue';
Vue.use(Tag);

// 日期选择器
import Date from 'view-ui/Date/Index.vue';
Vue.use(Date);

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
import Image from "view-ui/Image.vue";

Vue.use(Image, function(url, data) {
  return axios.post(url, data);
});

// 多图上传
import Images from "view-ui/Images.vue";

Vue.use(Images, function(url, data) {
  return axios.post(url, data);
});

// 气泡
import Bubble from 'view-ui/Bubble.vue';
Vue.use(Bubble);

// 警示框
import Alert from 'view-ui/Alert.vue';
Vue.use(Alert);

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

import MenuLine from 'view-ui/Menu/Line.vue';
Vue.use(MenuLine);

// 消息框
import $Message from 'view-ui/$Message.vue';
Vue.use($Message);

// 图片预览
import $ImagePreview from 'view-ui/$ImagePreview.vue';
Vue.use($ImagePreview);

// 右键菜单
import $ContextMenu from 'view-ui/$ContextMenu.vue';
Vue.use($ContextMenu);

// 图片预览
import $ImgPreview from 'view-ui/$ImgPreview.vue';
Vue.use($ImgPreview);

import theme from 'view-ui/theme.js';

export default theme;
