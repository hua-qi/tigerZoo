// 第三方组件
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

// 自定义组件
import UserAvatar from './cpns/userAvatar'

// redux 相关
import { useSelector } from 'react-redux'

// 样式相关
import Header from './styled'
import { Space, Button, Typography, Image } from 'antd'
import { BulbOutlined } from '@ant-design/icons'

// assets
import logo from '@/assets/img/logo-01.png'
import IAppState from '@/store/type'
import { IUserState } from '@/store/user/type'

const { Link } = Typography

export default memo(function HQAppHeader(props) {
    // 获取用户登录态
    const user = useSelector<IAppState, IUserState>(state => state.user)
    const isLogin = user.userStatus.isAuth
    console.log(isLogin)

    const navigation = useNavigate()
    const jumpToLogin = () => {
        navigation('/auth')
    }

    return (
        <Header>
            <div className='actionBar'>
                <Link href='/#'>
                    <Image
                        src={logo}
                        alt='tigerZoo`s logo. this app`s logo'
                        height={32}
                        preview={false}
                        style={{ cursor: 'pointer' }}
                    />
                </Link>
                <Space className='operationalZone' size='large'>
                    {props.children}

                    <Link href='/#' target='_blank' style={{ color: '#000' }}>
                        <BulbOutlined style={{ fontSize: '20px' }} />
                    </Link>
                    {isLogin ? (
                        <UserAvatar />
                    ) : (
                        <Button onClick={() => jumpToLogin()}>登录</Button>
                    )}
                </Space>
            </div>
        </Header>
    )
})
