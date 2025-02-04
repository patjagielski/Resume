import { useEffect, useRef, useState } from "react";

const ImagePreview = ({ project }) => {
    const [isHover, setIsHover] = useState(false);
    const [projectImage, setProjectImage] = useState(project.images[0])
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isHover) {
            let index = 0;
            intervalRef.current = setInterval(() => {
                setProjectImage(project.images[index]);
                index = (index + 1) % project.images.length;
            }, 900);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isHover, project.images]);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
        setProjectImage(project.images[0]);
    };
    return (
        <a href={project.link}>
            <div onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} className="flex flex-col justify-between size-full bg-slate-600 rounded-lg p-4">
                <p className="flex lg:justify-center font-bold text-md lg:text-3xl pb-2 lg:p-2">{project.title}</p>
                <div className="flex hidden lg:block justify-center p-2 w-full">
                    <img className="rounded-lg w-72" src={projectImage} />
                </div>
                <p className="flex justify-center lg:self-end text-md lg:text-l  lg:p-2">{project.description}</p>
            </div>
        </a>
    )
}

export default ImagePreview;