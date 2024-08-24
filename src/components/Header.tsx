import React, { useState } from 'react';
import { BookOutlined, FilePdfOutlined, GlobalOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';

type MenuItem = Required<MenuProps>['items'][number];



var GetItems = () => {
    const [t, i18n] = useTranslation();
    const [Lang, setLang] = useState('en')

    var changeLanguage=()=>{
        setLang(Lang=='en'?'es':'en')
        i18n.changeLanguage(Lang);
    }
    var result: MenuItem[] = [
        {
            key: 'AboutMe',
            label: (
                <a href="#about">{t('HeaderAbout')}  </a>
            ),
            icon: <UserOutlined />,
        },
        {
            key: 'Research',
            label: (
                <a href="#research">{t('HeaderResearch')}</a>
            ),
            icon: <BookOutlined />,
        },
        {
            key: 'CV',
            label: (
                <a href="files/CV_RicardoGloria2024.pdf" target="_blank">{t('HeaderCv')} </a>
            ),
            icon: <FilePdfOutlined />,
        },
        {
            key: 'spanish',
            label: (
                <a onClick={changeLanguage} > {t('HeaderLang')} </a >
            ),
            icon: <GlobalOutlined />,
        },
    ];
    return result;
}



export const Header: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={GetItems()} />;
}
