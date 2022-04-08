import React from "react";

const Search = ({word, setWord, handleSubmit}) => {

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-8 col-lg-7">
                <form className="form-inline" onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-sm-9">
                            <input className="form-control" 
                            type="text" 
                            placeholder="Search an Image" 
                            autoFocus 
                            onChange={(e) => setWord(e.target.value)} 
                            value={word} />
                        </div>
                        <div className="col">
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </form>
                </div>
                
            </div>
        </div>
    )
}

export default Search;