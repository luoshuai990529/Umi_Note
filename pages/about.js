import React from 'react';
import styles from './about.css';
import { Helmet } from 'umi';
const About =  () => {
  return (
    <div>
      <h1 className={styles.title}>Page about</h1>
      <Helmet>
        <meta name="decription" content="About description"/>
        <title>About Title</title>
      </Helmet>
    </div>
  );
}
// 给About页面加入权限配置
About.wrappers=['@/wrappers/auth']

export default About