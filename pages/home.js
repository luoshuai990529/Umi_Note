import React from 'react';
import styles from './home.css';
import { Helmet } from 'umi';
// 国际化
import { useIntl } from 'umi';
const Home = (props) => {
  const intl = useIntl();
  return (
    <div>
      <h1 className={styles.title}>{intl.formatMessage({id:"WELCOME_TO_UMI_WORLD"})}</h1>
      <button onClick={()=>{props.history.goBack()}}>返回goBack()</button>
      <Helmet>
        <meta name="decription" content="Home description"/>
        <title>Home Title</title>
      </Helmet>
    </div>
  );
}
// 给home路由加入权限配置
Home.wrappers = ['@/wrappers/auth']

export default Home