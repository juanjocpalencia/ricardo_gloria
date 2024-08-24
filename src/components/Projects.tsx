import { Card } from "antd"

const projects = [
    {
        title: "Summer Geometry Initiative 2023",
        img: "src/img/IMG_0499.JPG",
        info: "As a SGI 2023 fellow I worked on two research projects led by faculty and research scientists in the field of Geometry Processing:",
        Links: [
            {
                link: "https://summergeometry.org/sgi2023/geometric-surface-characterization/",
                title: "Geometric Surface Characterization",
                Dr: "Dr. Yingying Wu.",
                DrLink: "https://summergeometry.org/sgi2023/geometric-surface-characterization/"
            },
            {
                link: "https://summergeometry.org/sgi2023/intrinsic-mollification/",
                title: "Intrinsic Mollification",
                Dr: "Dr. Keenan Crane.",
                DrLink: "https://www.cs.cmu.edu/~kmcrane/"
            }
        ]
    },
    {
        title: "Notes on Discrete Exterior Calculus",
        img: "src/img/DEC_notes.png",
        info: "Final project intended for a PDE course in the fall of 2022. An introduction to basic concepts to Discrete Exterior Calculus is presented.  Theoretical aspects are widely explained through drawings, figures and examples.",
        Links: [
            {
                link: "src/docs/DEC-EDP.pdf",
                title: "You can access this project through here.",
                Dr: "",
                DrLink: ""
            }
        ]
    }
]


export const Projects = () => {
    return (
        <>
            <div className="wide-container" id="research">
                <h2> Projects and Research: </h2>
                <div className="projects  grid lg:grid-flow-col gap-4">
                    {
                        projects.map(project => {
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
