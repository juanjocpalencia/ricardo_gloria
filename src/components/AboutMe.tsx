import { Card } from "antd"


const AboutMe = () => {
    return (
        <>
            <Card className="sidebar lg:col-span-5 md:col-span-1 sm:col-span-1 ...">
                <div className="content-area">
                    <section className="content" id="about">
                        <h1>Ricardo A. Gloria Picazzo</h1>
                        <h2>About me ...</h2>
                        <p>
                            I am a mathematics PhD student with a Research Assistant position at the University of Houston under the supervision of Dr. <a href="https://www.yingyingwu.io/" target="_blank">Yingying Wu</a>. My interests revolve around (discrete) differential geometry, (numerical) differential equations, differential and applied topology, discrete exterior calculus and their applications to geometry processing and machine learning.
                        </p>
                        <p>
                            I earned my bachelor's degree in Mathematical Computing at the <a href="http://www.demat.ugto.mx/" target="_blank">University of Guanajuato</a> / <a href="https://www.cimat.mx/" target="_blank">CIMAT</a>. During my undergraduate studies I was part of some summer programs as a fellow such as <a href="https://sph.umich.edu/bdsi/" target="_blank">Big Data Summer Institute </a> 2022 (University of Michigan), <a href="https://sgi.mit.edu/" target="_blank">Summer Geometry Initiative</a> (Massachusetts Institute of Technology) and <a href="https://www.umalca.org/" target="_blank">EMALCA</a> (Escuela de Matemáticas de América Latina y el Caribe).
                        </p>
                        <p>
                            In my spare time I enjoy playing soccer and watching films. From time to time I also like playing the guitar and reading latinoamerican literature.
                        </p>
                    </section>
                </div>
            </Card>
        </>
    )
}

export default AboutMe