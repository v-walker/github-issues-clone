import React from 'react';

function Repo(props) {
    let {name, link, description, primaryLang, langColor, starCount, watchCount, forkCount, updatedDate} = props;

    console.log(langColor);

    return (
        <div className="col-12">
            <div><a href={link}>{name}</a></div>
            <div>{description}</div>
            <div className="row">
                <div className="col-1 pt-1 ps-5 pe-0">
                    <div className="langDot" style={{height: "12px", width: "12px", borderRadius: "50%", backgroundColor:`${langColor}`}}></div>
                </div>
                <div className="col-11 row ms-0 ps-0">
                    <div className="col-2"> {primaryLang}
                    </div> 
                    <div className="col-2">
                        stars: {starCount}
                    </div>
                    <div className="col-2">
                        watches: {watchCount}
                    </div>
                    <div className="col-2">
                        forks: {forkCount}
                    </div>
                    <div className="col-4">
                        updated at {updatedDate}
                    </div>
                </div>
            </div>
            <hr className="mb-2"/>
        </div>
    )
}

export default Repo
