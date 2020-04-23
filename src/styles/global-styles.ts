import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import TmpIcon from "assets/tmp.png";

const GlobalStyle = createGlobalStyle`
${reset}
* {
box-sizing: border-box;
}
body{
font-size: 0.875em;
line-height: 1.5;
font-family: 'Malgun Gothic','맑은 고딕',NanumSquare,sans-serif,HelveticaNeue-Light,AppleSDGothicNeo-Light;
color: #333;
letter-spacing: -0.5px;
font-weight: 400;

background: #f1f1f1;

-ms-overflow-style: none; /* IE and Edge */
scrollbar-width: none; /* Firefox */

::-webkit-scrollbar {
display: none; /* Chrome, Safari, Opera*/
}
}
a {
color: #000;
text-decoration: none;
}

input, textarea {
line-height: 1.5;
font-family: 'Malgun Gothic','맑은 고딕',NanumSquare,sans-serif,HelveticaNeue-Light,AppleSDGothicNeo-Light;
color: #333;
letter-spacing: -0.5px;
font-weight: 400;
}

input, button {
background-color: transparent;
vertical-align: middle;
border: none;
outline: none;
padding: 0;
}

input[type="text"] {
height: 42px;
line-height: 40px;
border: 1px solid #e0e0e0;
font-size: 1.071em;
border-radius: 2px;
background: #fff;
padding: 0 10px;
-webkit-appearance: none;
box-shadow: none !important;
}

input[type="number"] {
height: 42px;
line-height: 40px;
border: 1px solid #e0e0e0;
font-size: 1.071em;
border-radius: 2px;
background: #fff;
padding: 0 10px;
-webkit-appearance: none;
box-shadow: none !important;
appearance: none;
}

input[type="text"]:read-only {
background: #f5f7f8;
}


input[type="checkbox"] {
width: 20px;
height: 20px;
border: 1px solid #a2a2a2;
background: #fff;
display: none;
}

input[type="checkbox"] + label span {
display: inline-block;
width: 20px;
height: 20px;
line-height: 20px;
margin: -2px 10px 0 0;
vertical-align: middle;
background: url(${TmpIcon}) left top no-repeat;
background-size: 20px 20px;
cursor: pointer;
}

h1, h2, h3, h4, h5, h6{
font-family:'Maven Pro', sans-serif;
}

ol, ul, li {
list-style: none;
}

img {
height: auto;
vertical-align: middle;
}

strong {
font-weight: bold;
}

.box {
-ms-overflow-style: none; /* IE and Edge */
scrollbar-width: none; /* Firefox */
}

img {
width: 100%;
height: auto;
vertical-align: middle;
}

h2 {
display: block;
font-size: 1.5em;
margin-block-start: 0.83em;
margin-block-end: 0.83em;
margin-inline-start: 0px;
margin-inline-end: 0px;
font-weight: bold;
}

h3 {
display: block;
font-size: 1.17em;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
font-weight: bold;
}

select {
width: auto;
height: 42px;
line-height: 42px;
font-size: 1.071em;
padding: 5px 10px;
border: 1px solid #e0e0e0;
border-radius: 2px;
overflow: hidden;
background: #fff;
}

option {
font-weight: normal;
display: block;
white-space: pre;
min-height: 1.2em;
padding: 0px 2px 1px;
}

textarea {
width: 100%;
border: 1px solid #e0e0e0;
font-size: 1em;
border-radius: 10px;
background: #fff;
padding: 10px;
}

.bgWhite {
background: #fff !important;
}

.tac {
text-align: center !important;
}

.pb0 {
padding-bottom: 0px !important;
}

.pt20 {
padding-top: 20px !important;
}

.mb5 {
margin-bottom: 5px !important;
}

.mb10 {
margin-bottom: 10px !important;
}

.mb15 {
margin-bottom: 15px !important;
}

.mb20 {
margin-bottom: 20px !important;
}

.mb30 {
margin-bottom: 30px !important;
}

.mt30 {
margin-top: 30px !important;
}

.mt20 {
padding-top: 20px !important;
}

.ti9 {
display: block;
text-indent: -9px;
padding-left: 9px;
}

.fs12 {
font-size: 12px !important;
line-height: 18px;
}

.fs13 {
font-size: 13px !important;
}

.fc666 {
color: #666;
}

.fcRed {
color: #c80c0c;
}

.fcBlue1 {
color: #0f4cd7;
}

.plr10 {
padding-left: 10px !important;
padding-right: 10px !important;
}

.pt10 {
padding-top: 10px !important;
}

.pt15 {
padding-top: 15px !important;
}

.pb40 {
padding-bottom: 40px !important;
}

.mt-10 {
margin-top: -10px !important;
}

.tab-area {
position: relative;
}

.tab-area .tabs {
overflow: hidden;
width: 100%;
}

.tab-area .tabs.column2 li {
width: 50%;
}

.view-type .tabsWrap {
min-height: 60px;
}

.view-type .tabs {
max-width: 1080px;
min-height: 60px;
margin: 0 auto;
}

.view-type .tabs li {
float: left;
}

.view-type .tabs li a {
display: block;
height: 60px;
font-size: 1.357em;
color: #666;
line-height: 57px;
background: #fff  repeat-x left 59px;
text-align: center;
padding-bottom: 3px;
}


.basicWd {
max-width: 1080px;
height: auto;
margin: 0 auto;
overflow: hidden;
}

.h35 {
height: 35px;
line-height: 33px;
padding: 0 10px;
font-size: 0.857em;
}

.br2 {
border-radius: 2px;
}

.btn {
overflow: hidden;
display: inline-block;
color: #fff;
letter-spacing: -0.5px;
text-align: center;
vertical-align: top;
background-color: #322f78;
border: 1px solid #322f78;
font-size: 1em;
}

.btn.h42 {
height: 42px;
line-height: 40px;
padding: 0 10px;
}

.btn.w49 {
width: 49%;
}


.btn.br2 {
border-radius: 2px;
}

.btn.cBlue1 {
background: #fff;
border: 1px solid #302ad6;
color: #302ad6;
}

.btn.cWhite {
background: #fff;
border: 1px solid #888;
color: #444;
}

.btn.h25 {
height: 25px;
line-height: 23px;
padding: 0 10px 2px;
font-size: 0.786em;
}



.btnWrap {
width: 100%;
height: auto;
text-align: center;
overflow: hidden;
padding: 30px 0;
}

.btnWrap .btn:first-child {
margin-left: 0px !important;
}

.cautionTxt {
line-height: 15px;
font-size: 0.785em;
background: #f1f1f1 url(${TmpIcon}) no-repeat 15px center;
background-size: 20px 20px;
padding: 10px 10px 10px 45px;
border: 1px solid #e0e0e0;
border-radius: 2px;
}

#wrap {
max-width: 1080px;
height: 100%;
padding: 10px 10px 30px;
margin: 0 auto;
}

.wd100p {
max-width: 100% !important;
height: auto;
margin: 0 auto;
padding: 10px 0 60px !important;
}

.memInfo {
width: 100%;
margin-top: -10px;
}

.memInfo li {
min-height: 61px;
border-bottom: 1px solid #e7e7e7;
background: #fff;
}

.memInfo li em {
color: #999;
font-size: 0.857em;
}

.memInfo li div {
position: relative;
max-width: 1080px;
min-height: 60px;
line-height: 60px;
padding: 0 10px;
margin: 0 auto;
}

.memInfo li div.lh30 {
line-height: 20px;
padding: 10px;
}

.memInfo li strong.sTit {
font-weight: 600;
}

.memInfo li a {
display: block;
float: right;
width: 30px;
height: 60px;
background: #fff url(${TmpIcon}) no-repeat right center;
background-size: 11px 20px;
}

.memInfo li p {
position: absolute;
top: 50%;
right: 0px;
margin-top: -12px;
height: 25px;
line-height: 25px;
}

.memInfo li p.h55 {
position: absolute;
top: 50%;
right: 0px;
margin-top: -23px;
height: 50px;
line-height: 25px;
}

.memInfo li p.r10 {
right: 10px;
}

.footBtn {
max-width: 1080px;
height: 51px;
line-height: 25px;
padding: 12px 10px;
font-size: 0.786em;
font-weight: 600;
margin: 0 auto;
}

.footBtn button {
width: 60px;
height: 25px;
line-height: 22px;
border: 1px solid #ccc;
color: #666;
background: #f6f6f6;
text-align: center;
margin-left: 3px;
}

.listBox {
width: 100%;
padding-right: 1px;
height: auto;
overflow: hidden;
}

.memberTop {
max-width: 1080px;
height: auto;
padding: 15px 20px 20px;
text-align: center;
background: #fff;
}

.memberTop h3 {
font-size: 1.071em;
margin-bottom: 10px;
}

.memberTop img {
width: 47px;
}

.memInfo {
width: 100%;
margin-top: -10px;
}

.memInfo li p button {
width: 78px;
height: 23px !important;
line-height: 23px !important;
}


.dealDlcTop {
width: 100%;
height: 85px;
font-family: NanumSquare;
}

.dealDlcTop section {
max-width: 1080px;
padding: 0;
margin: 0 auto;
}

.dealDlcTop .inBox {
width: 100%;
height: 85px;
padding: 25px 30px 15px;
border-radius: 10px;
background: #2d28af repeat-x left bottom;
text-align: center;
}

.dealDlcTop .inBox .pcOut {
display: inline-block;
height: 42px;
max-width: 450px;
overflow: hidden;
}

.dealDlcTop .inBox img {
float: left;
width: 37px;
border-radius: 19px;
-webkit-box-shadow: 5px 5px #1b195a;
box-shadow: 5px 5px #1b195a;
}

.dealDlcTop .inBox .boxR {
float: right;
color: #fde802;
font-weight: 600;
text-align: right;
}

.dealDlcTop .inBox .boxR span {
float: left;
display: block;
height: 35px;
line-height: 35px;
color: #fff;
font-size: 1.285em;
padding-left: 10px;
}

.dealDlcTop .inBox .boxR p {
float: left;
max-width: 250px;
height: auto;
line-height: 35px;
font-size: 2.143em;
padding-top: 0px;
text-align: left;
}

.dealDlcTop .inBox .boxR span em {
font-weight: 300;
}

.dealDlcTop .inBox .boxR span i {
font-style: normal;
padding-right: 10px;
}

.dealDlcTop .inBox .boxR p em {
font-size: 17px;
font-weight: 300;
}

.dealManaTop {
padding: 20px 30px 15px;
background: #fff;
overflow: hidden;
}

.dealManaTop select.wd33 {
float: left;
width: 32.666%;
margin-right: 1%;
}

.dealManaTop select.wd33:last-child {
margin-right: 0;
}

.dealManaOut {
max-width: 1080px;
padding: 20px 0px;
margin: 0 auto;
overflow: hidden;
}

.dealManaOut p.totalNo {
color: #000;
font-size: 0.857em;
}


`;

export default GlobalStyle;
