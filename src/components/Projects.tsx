import { Card } from "antd"
import { useTranslation } from 'react-i18next';

const GetProjects = () => {
    const [t, i18n] = useTranslation();
    return [
        {
            title:  t('ProjectTitle1') ,
            img: "src/img/IMG_0499.JPG",
            info: t('ProjectInfo1'),
            Links: [
                {
                    link: "https://summergeometry.org/sgi2023/geometric-surface-characterization/",
                    title:  t('Project1LinkTitle1'),
                    Dr: "Dr. Yingying Wu.",
                    DrLink: "https://summergeometry.org/sgi2023/geometric-surface-characterization/"
                },
                {
                    link: "https://summergeometry.org/sgi2023/intrinsic-mollification/",
                    title:  t('Project1LinkTitle2'),
                    Dr: "Dr. Keenan Crane.",
                    DrLink: "https://www.cs.cmu.edu/~kmcrane/"
                }
            ]
        },
        {
            title:  t('ProjectTitle2'),
            img: "src/img/DEC_notes.png",
            info:  t('ProjectInfo2'),
            Links: [
                {
                    link: "src/docs/DEC-EDP.pdf",
                    title:  t('Project2LinkTitle1'),
                    Dr: "",
                    DrLink: ""
                }
            ]
        }
    ]
}

export const Projects = () => {
    const [t, i18n] = useTranslation();
    return (
        <>
            <div className="wide-container" id="research">
                <h2> {t('ProjectSection')} </h2>
                <div className="projects  grid lg:grid-flow-col gap-4">
                    {
                        GetProjects().map(project => {
                            return (<>
                                <Card>
                                    <div className="project grid lg:grid-flow-col gap-4">
                                        <img src={project.img} alt="Project 1 Image" />
                                        <div className="project-info ">
                                            <h3>{project.title}</h3>
                                            <p> {project.info}</p>
                                            <ul>
                                                {
                                                    project.Links.map(link => {
                                                        return (<>
                                                            <li>
                                                                <a href={link.link} target="_blank">{link.title}</a>
                                                                <a href={link.DrLink} target="_blank"> {link.Dr} </a> </li>
                                                        </>)
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </Card>
                            </>)
                        })
                    }


                </div>
            </div>
        </>
    )
}
