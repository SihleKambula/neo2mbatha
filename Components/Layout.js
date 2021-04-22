import React from "react";
import Head from "next/head";
import style from "../styles/Layout.module.scss";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Neo2Mbatha</title>
        <link
          rel='shortcut icon'
          href='images/neo2mbatha.png'
          type='image/x-icon'
        />
      </Head>
      <div className={style.layout}>{props.children}</div>
    </>
  );
};

export default Layout;
