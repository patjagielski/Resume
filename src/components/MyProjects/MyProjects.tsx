import { useEffect, useRef, useState } from "react";
import { Project } from "./ProjectsData";

const MyProjects = ({ title, projectList }) => {
    const isHover = useRef(false);
    const [projectImage, setProjectImage] = useState('')
    useEffect(() => {

    })
    const onMouseEnterHandle = (project: Project) => {
        isHover.current = true
        if (isHover) {
            project.images.map((image, index) => {
                setInterval(() => {
                    setProjectImage(image)
                    console.log(projectImage, index)
                }, index * 2000)
            })
        }
    }
    const onMouseLeaveHandle = () => {
        isHover.current = false
    }
    return (
        <div>
            <p className="flex text-4xl pb-5 my-5 shadow-line shadow-white"> {title}</p>
            <div className="grid grid-cols-3 gap-8 p-20">
                {projectList.map((project) => (
                    <a href={project.link}>
                        <div onMouseEnter={() => onMouseEnterHandle(project)} onMouseLeave={() => onMouseLeaveHandle()} className="flex flex-col justify-between size-full bg-slate-600 rounded-lg p-4">
                            <p className="flex justify-center text-3xl p-2">{project.title}</p>
                            <div className="flex justify-center p-2 w-full">
                                <img className="rounded-lg w-72" src={project.images[0]} />
                            </div>
                            <p className="flex self-end text-l p-2">{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default MyProjects;