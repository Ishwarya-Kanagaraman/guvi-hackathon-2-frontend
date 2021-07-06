import React from "react";
import "./Main.css";
export default function Main() {
  
  const movies = [
    {
      name: "Bahubali",
      Hero: "Prabhas",
      url: "https://images-na.ssl-images-amazon.com/images/I/711eHgGtnFL._SL1209_.jpg",
      Herione: "Anushka",
      language: "Tamil",
      releasedAt: 2017,
    },
    {
      name: "Bahubali",
      Hero: "Prabhas",
      url: "https://images-na.ssl-images-amazon.com/images/I/711eHgGtnFL._SL1209_.jpg",
      Herione: "Anushka",
      language: "Tamil",
      releasedAt: 2017,
    },
    {
      name: "Bahubali",
      Hero: "Prabhas",
      url: "https://images-na.ssl-images-amazon.com/images/I/711eHgGtnFL._SL1209_.jpg",
      Herione: "Anushka",
      language: "Tamil",
      releasedAt: 2017,
    },
    {
      name: "Bahubali",
      Hero: "Prabhas",
      url: "https://images-na.ssl-images-amazon.com/images/I/711eHgGtnFL._SL1209_.jpg",
      Herione: "Anushka",
      language: "Tamil",
      releasedAt: 2017,
    },
    {
      name: "Bahubali",
      Hero: "Prabhas",
      url: "https://images-na.ssl-images-amazon.com/images/I/711eHgGtnFL._SL1209_.jpg",
      Herione: "Anushka",
      language: "Tamil",
      releasedAt: 2017,
    },
    {
      name: "Bahubali",
      Hero: "Prabhas",
      url: "https://images-na.ssl-images-amazon.com/images/I/711eHgGtnFL._SL1209_.jpg",
      Herione: "Anushka",
      language: "Tamil",
      releasedAt: 2017,
    },
    {
      name: "Bahubali",
      Hero: "Prabhas",
      url: "https://images-na.ssl-images-amazon.com/images/I/711eHgGtnFL._SL1209_.jpg",
      Herione: "Anushka",
      language: "Tamil",
      releasedAt: 2017,
    },
    {
      name: "Bahubali",
      Hero: "Prabhas",
      url: "https://images-na.ssl-images-amazon.com/images/I/711eHgGtnFL._SL1209_.jpg",
      Herione: "Anushka",
      language: "Tamil",
      releasedAt: 2017,
    },
  ];
  return (
    <div className="main">
      <div className="cardContainer">
        {movies.map((e) => (
          <div>
            <div className="card">
              <img src={e.url} alt="bahubali" />
            </div>

            <h5 className="mname">{e.name}</h5>
            <h5 className="mlang">{e.language}</h5>
          </div>
        ))}
      </div>
      <div className="premiereDiv">
        <div className="prHead">
          <img
            className="prLogo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXsWSNBKgXhoGUSImI3VaUuk0NwOVmnjCcseiJduQccVuRbywWUchMuBSgca-22SWvcY&usqp=CAU"
            alt=""
          />
          <div style={{marginLeft:"25px"}}>
            <h3 className="prName">Premiere</h3>
            <h5 className="prsubname">Watch brand new movies every Friday</h5>
          </div>
        </div>
        <div className="cardContainer">
        {movies.map((e) => (
            <div className="card">
              <img src={e.url} alt="bahubali" />
              <h5 className="mname">{e.name}</h5>
              <h5 className="mlang">{e.language}</h5>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
}
