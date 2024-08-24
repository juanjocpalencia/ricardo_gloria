import { Card } from 'antd';

const ProfileCard = () => {
    return (
        <>
            <Card className="sidebar lg:col-span-1  md:col-span-1 sm:col-span-1 ... " >
                <img src="src/img/IMG_3418.jpg" alt="My Photo" />
                    <div className="contact-info">
                        <p><a href="mailto:ragloriapicazzo@uh.edu"><i className='bx bx-envelope'></i> ragloriapicazzo@uh.edu</a></p>
                        <p><a href="https://github.com/RicGLo" target="_blank"><i className='bx bxl-github'></i> RicGLo</a></p>
                        <p><a href="https://www.linkedin.com/in/ricglo/" target="_blank"><i className='bx bxl-linkedin'></i> Ricardo Gloria</a></p>
                        <p><a href="https://youtube.com/@ricardogloria2522?si=2MiUmfUukpv-_U1K" target="_blank"><i className='bx bxl-youtube'></i> Ricardo Gloria</a></p>
                        <p><a href="https://math.stackexchange.com/users/1353863/ricardo-gloria" target="_blank"><i className='bx bx-link'></i> MathExchange</a></p>
                        <p><a href="https://x.com/rGlorius20" target="_blank"><i className='bx bxl-twitter'></i> @rGlorius20</a></p>
                    </div>
            </Card>
        </>
    )
}

export default ProfileCard