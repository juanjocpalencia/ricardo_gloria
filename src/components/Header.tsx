import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'AboutMe',
        label: (
            <a href="#about">About me </a>
        ),
        icon: <MailOutlined />,
    },
    {
        key: 'Research',
        label: (
            <a href="#research">Research</a>
        ),
        icon: <MailOutlined />,
    },
    {
        key: 'CV',
        label: (
            <a href="files/CV_RicardoGloria2024.pdf" target="_blank">CV</a>
        ),
        icon: <MailOutlined />,
    },
    {
        key: 'spanish',
        label: (
            <a href="esp_index.html"> Versión en Español </a>
        ),
        icon: <MailOutlined />,
    },
];



export const Header: React.FC = () => { 
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}
