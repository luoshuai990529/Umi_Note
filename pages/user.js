import React from 'react';
import styles from './user.css';
import {Link} from 'umi'

/* 
  1、Umi路由参数
*/
/* 
  2、多个路由参数
  - Umi预定[ ]包裹的文件或者文件夹为动态路由参数
*/
/* 
  3、可选路由参数
  - Umi约定[ $]包裹的文件或者文件夹为动态可选路由
  - 如果路由参数中出现了可选路由参数，那么当参数个数不够的时候回自动忽略可选路由参数
*/
export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page user</h1>
      <Link to={'/details/1'}>张三</Link>
      <Link to={'/details/2'}>李四</Link>
      <Link to={'/info/4/Jack'}>多参数传递</Link>
      {/* 如果只传递一个参数那么默认就是name=66 */}
      <Link to={'/info/66'}>可选参数传递</Link>
    </div>
  );
}
