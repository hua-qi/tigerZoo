import React, { memo } from 'react';
import {useNavigate } from 'react-router-dom'

import { 
  EyeOutlined,
  LikeOutlined,
  MessageOutlined
}from '@ant-design/icons'

// 样式
import mainlist from '@/assets/css/css_modules/mainlist.module.css'

export default memo(function MainList() {
  let navigate = useNavigate();
  function jumpToArticle() { 
    navigate('/discuss/1')
  }
  return (
    <div className={mainlist.mainlist}>
      <div
        style={{ fontSize: "16px", fontWeight: "600", marginLeft: "20px" }}
        onClick={ () => jumpToArticle()}
      >文章1</div>
      <div className={ mainlist.popular}>
        <span className={ mainlist.span}><EyeOutlined />1000</span>
        <span className={ mainlist.span}><LikeOutlined />18</span>
        <span className={ mainlist.span}><MessageOutlined />15</span>
      </div>
      <hr style={{width:"95%",position:"absolute",bottom:"0px",left:"20px"}}/>
    </div>
  );
})
