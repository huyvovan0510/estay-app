import React from 'react';

import { Dimensions, Platform, StatusBar } from 'react-native';
import _ from 'lodash';

const width = 375;
const s = Dimensions.get('window').width / width;
const isIphoneX = () => {
  const { width, height } = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 || width === 812 || (height === 896 || width === 896))
  );
};

const VIDEO_HEIGHT = (Dimensions.get('window').width * 9) / 16;

const Util = {
  screenSize: () => {
    return Dimensions.get('window');
  },

  scale: value => {
    return value * s;
  },

  formatNumber: number => {
    if (!number) {
      return '0';
    }
    let n = parseFloat(number.toFixed(2));
    return n.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
  },

  formatPrice: value => {
    let tr = 1000000;
    let ty = 1000000000;
    if (value < tr) {
      let n = parseFloat(value.toFixed(2));
      return n.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
    }
    if (value < ty) {
      let format = (value / tr).toFixed(1) + ' million';
      return format.replace('.0', '');
    }
    if (value > ty) {
      let format = (value / ty).toFixed(1) + ' billion';
      return format.replace('.0', '');
    }
  },

  formatTime: millisec => {
    let seconds = (millisec / 1000).toFixed(0);
    let minutes = Math.floor(seconds / 60);
    let hours = '';
    if (minutes > 59) {
      hours = Math.floor(minutes / 60);
      hours = hours >= 10 ? hours : '0' + hours;
      minutes = minutes - hours * 60;
      minutes = minutes >= 10 ? minutes : '0' + minutes;
    }

    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : '0' + seconds;
    if (hours !== '') {
      return hours + ':' + minutes + ':' + seconds;
    }
    return minutes + ':' + seconds;
  },

  round: (value, decimals) => {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  },

  isIphoneX,

  getStatusBarHeight: safe => {
    return Platform.select({
      ios: isIphoneX() ? (safe ? 44 : 30) : 20,
      android: StatusBar.currentHeight,
      default: 0,
    });
  },

  getToolbarHeight: () => {
    return Platform.select({
      ios: 64,
      android: 56,
      default: 0,
    });
  },

  //NOTE  Get height of ads when ads fixed top/bottom
  CalculateHeightAds: ads => {
    let height = 0;
    for (let i = 0; i < ads.length; i++) {
      const active = _.get(ads[i], 'active', true);
      if (active) {
        const sizeAds = _.get(ads[i], 'configs.ui.size', '');
        const marginTop = _.get(ads[i], 'configs.ui.margin.top', 0);
        const marginBottom = _.get(ads[i], 'configs.ui.margin.bottom', 0);
        height += marginBottom + marginTop;
        switch (sizeAds) {
          case 'Rectangle':
            height += 280;
            break;
          case 'Large':
            height += 100;
            break;
          case 'Banner':
            height += 50;
            break;
          default:
            break;
        }
      }
    }
    return height;
  },

  getHTMLTypeVideo(data = {}) {
    let {
      textSize = 14,
      videoLink = '',
      errorText = 'Could not load content',
    } = data;
    const html = `
            <style>
              .video-wrapper{
                width: 100%;
                padding-bottom: 56.25%;
                height: 0;
                position: relative;
              }
              .video-wrapper iframe {
                position: absolute;
                width: 100%;
                height: 100%;
              }
              .error-video {
                font-size: ${textSize}px;
                letter-spacing: -0.4px;
                color: #FFF;
                position: relative;
                float: left;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            </style>
            <div class="main-container">
              ${
                videoLink
                  ? `
                    <div className="video-wrapper">
                         <iframe title="video-detail" width="100%" height="${VIDEO_HEIGHT}" src="${videoLink}" frameborder="0" allow="autoplay" allowFullScreen=""></iframe>
                     </div>
                 `
                  : `
                    <div class="header">
                        <div class="error-video">${errorText}</div>
                    </div>`
              }
            </div>
    `;
    return html;
  },

  getHTMLTypeLink({
    videoLink,
    content,
    ele_content,
    textColor = '#333',
    textSize = 14,
  } = {}) {
    const html = `
          <style>
            .content {
              font-size: ${textSize + 4}px;
              line-height: 1.4;
              color: ${textColor};
              h1, h2, h3, h4, h5, h6 {
                font-size: 1.2em !important;
                font-weight: bold !important;
              }
          
              b, strong {
                font-weight: bold !important;
              }
            }
            .content table {
              width: 100%;
            }
            .content img {
              border-radius: 4px;
            }
            .content figure {
              margin:0;
            }
            .content img:not([width]){
              width: 100%;
            }
          </style>
            <div>
            ${
              videoLink
                ? `<iframe
                  width="100%"
                  height="${VIDEO_HEIGHT}"
                  src="${videoLink}"
                  frameBorder="0"
                  allow="autoplay"
                  allowFullScreen=""
                />`
                : ''
            }
              <div class="content">
                ${ele_content ? content : ''}
              </div>
            </div>
          `;
    return html;
  },
};

export default Util;
