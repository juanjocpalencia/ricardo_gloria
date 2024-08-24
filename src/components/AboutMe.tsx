import { Card } from "antd"
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
    const [t, i18n] = useTranslation();

    return (
        <>
            <Card className="sidebar lg:col-span-5 md:col-span-1 sm:col-span-1 ...">
                <div className="content-area">
                    <section className="content" id="about">
                        <h1>{t('Name')} </h1>
                        <h2>{t('AboutMeTitle')}</h2>
                        <p>
                            {t('AboutMeP1')}
                            <a href="https://www.yingyingwu.io/" target="_blank">{t('AboutMeLink1')}</a>
                            {t('AboutMeP2')}
                        </p>
                        <p>
                            {t('AboutMeP3')}
                            <a href="http://www.demat.ugto.mx/" target="_blank">{t('AboutMeLink2')}</a> /
                            <a href="https://www.cimat.mx/" target="_blank">{t('AboutMeLink3')}</a>
                            {t('AboutMeP4')}
                            <a href="https://sph.umich.edu/bdsi/" target="_blank">{t('AboutMeLink4')}</a>
                            {t('AboutMeP5')}
                            <a href="https://sgi.mit.edu/" target="_blank">{t('AboutMeLink5')}</a>
                            {t('AboutMeP6')}
                            <a href="https://www.umalca.org/" target="_blank">{t('AboutMeLink6')}</a> 
                            {t('AboutMeP7')}
                        </p>
                        <p>
                        {t('AboutMeP8')}
                        </p>
                    </section>
                </div>
            </Card>
        </>
    )
}

export default AboutMe