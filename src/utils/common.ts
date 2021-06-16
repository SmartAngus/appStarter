/**
 * @File: 常用工具方法
 */
import JSEncrypt from 'jsencrypt';
import _ from 'lodash';
import {privateKey} from '@/config';
import regexp from './regexp';
import request from './http';
// import Base64 from 'Base64';

/* 加密，sourceStr必须是字符串 */
// export function getEncryption(sourceStr) {
//   return Base64.btoa(window.encodeURIComponent(sourceStr));
// }

export const tranRSA = params => {
  const jsencrypt = new JSEncrypt({});
  jsencrypt.setPublicKey(privateKey);
  return jsencrypt.encrypt(params);
};

export const getFlatTreeData = (treeData, mapKey) => {
  const dataList = [];
  const loop = data =>
    data.forEach(item => {
      if (!_.isEmpty(item[mapKey])) {
        loop(item[mapKey]);
      }
      dataList.push(item);
    });
  loop(treeData);
  return dataList;
};

export const orderBy = (arr, props, orders) => {
  const array = [...arr];
  array.sort((a, b) =>
    props.reduce((acc, prop, i) => {
      let order = acc;
      if (order === 0) {
        const [p1, p2] =
          orders && orders[i] === 'desc'
            ? [b[prop], a[prop]]
            : [a[prop], b[prop]];
        const descOrder = p1 < p2 ? -1 : 0;
        order = p1 > p2 ? 1 : descOrder;
      }
      return order;
    }, 0),
  );
  return array;
};

export {regexp};

export {request};

export const getRandomNumer = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export default {tranRSA, getFlatTreeData, getRandomNumer, regexp, request};
