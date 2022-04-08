import React from "react"

const ImageCard = ({image, handleDelete}) => {

    return (
        <div className="col">
            <div className="card">
            <img src={image.urls.thumb} className="card-img-top rounded" alt={image.title}/>
            <button onClick={() => handleDelete(image.id)} className="btn btn-primary">Delete</button>
            <div className="card-body">
                <h5 className="card-title">{image.title}</h5>
                <p className="card-text">{image.description}</p>
            </div>
            </div>
        </div>
        
    );
}

export default ImageCard;