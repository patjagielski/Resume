import ImagePreview from "../ImagePreview/ImagePreview";

const MyProjects = ({ title, projectList }) => {
    return (
        <div>
            <p className="flex text-4xl pb-5 my-5 shadow-line shadow-white"> {title}</p>
            <div className="grid grid-cols-3 gap-8 p-20">
                {projectList.map((project, index) => (
                    <ImagePreview key={project.title+index} project={project}/>
                ))}
            </div>
        </div>
    );
}

export default MyProjects;