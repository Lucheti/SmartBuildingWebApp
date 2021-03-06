import React, { useRef } from "react";
import { UpdateConsorcesList } from "./ManageConsorces";

const useInput = () => {
  const ref = useRef();
  const refValue = () => ref.current.value;
  return [ref, refValue];
};

export default function AddConsorceForm() {
  const updateList = React.useContext(UpdateConsorcesList);

  const [consorceNameRef, consorceName] = useInput();
  const [consorceAdressRef, consorceAdress] = useInput();
  const [consorceZipRef, consorceZip] = useInput();
  const [consorceNumberRef, consorceNumber] = useInput();
  const [floorsRef, floors] = useInput();

  // const [location, setLocation] = React.useState({
  //     lat: -1,
  //     lng: -1
  // })

  const [location, setLocation] = React.useState([]);
  const [geometry, setGeometry] = React.useState({
    lat: -1,
    lng: -1
  });

  const [image, setImage] = React.useState(new Date().getMilliseconds());

  const addConsorce = () => {
    fetch(
      "http://localhost:8080/admins/" + window.sessionStorage.id + "/consorce",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: consorceName(),
          image: image,
          address: consorceAdress(),
          zip: consorceZip(),
          number: consorceNumber(),
          floors: floors(),
          location: {
            latitude: location.lat,
            longitude: location.lng
          }
        })
      }
    ).then(res => {
      if (res.ok) {
        updateList();
        clearInputs();
        console.log(this);
      }
    });
  };

  const getPositionFromAddress = e => {
    if (consorceAdress && consorceAdress().length >= 3) {
      fetch(
        "https://api.opencagedata.com/geocode/v1/json?q=" +
          consorceAdress() +
          "&key=4f2e8ad1d18f451793dd42490f6156e1&no_annotations=1&language=es"
      )
        .then(res => res.json())
        .then(data => {
          if (data && data.results && data.results.length > 0) {
            setLocation(data.results);
          }
        });
    }
  };

  const clearInputs = () => {
    consorceNameRef.current.value = "";
    consorceAdressRef.current.value = "";
    consorceNumberRef.current.value = "";
    consorceZipRef.current.value = "";
    setImage(undefined);
  };

  const onChange = e => {
    let files = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = e => setImage(e.target.result);
    e.target.value = "";
  };

  return (
    <div className={"add-consorce"}>
      <div
        className={"file-upload"}
        style={image ? { backgroundImage: 'url("' + image + '")' } : {}}
      >
        {!image && (
          <label>
            <i className={"fa fa-plus"} />
            Upload Img
          </label>
        )}
        <input type="file" required="required" onChange={onChange} />
      </div>
      <div className="inputs">
        <div className={"input-group"}>
          <p>Name</p>
          <input ref={consorceNameRef} placeholder={"Name"} />
        </div>
        <div className={"input-group"}>
          <p>Adress</p>
          <div style={{ width: "60%", position: "relative" }}>
            <input
              list={"options2"}
              ref={consorceAdressRef}
              placeholder={"Ej: Campus Universidad Austral, Pilar, Argentina"}
              onChange={getPositionFromAddress}
              style={{ width: "100%" }}
            />
            {location.length !== 0 && <div
              id="options2"
              onClick={val => setGeometry(val)}
              style={{
                position: "absolute",
                background: "white",
                border: "1px solid rgba(0,0,0,.1)",
                padding: "1rem"
              }}
            >
              {location.map((elem, i) => (
                <>
                  <p
                    className={'blue-on-hover'}
                    onClick={val => {
                      setGeometry(val.geometry);
                    }}
                    value={elem.formatted}
                    style={{ width: "92%", textAlign: "left", padding: '1rem', margin: 0}}
                  >
                    {elem.formatted}
                  </p>
                  {i !== location.length - 1 && <hr style={{margin: 0}}/>}
                </>
              ))}
            </div>}
          </div>
        </div>

        <div className={"input-group"}>
          <p>Zip Code</p>
          <input ref={consorceZipRef} placeholder={"Zip Code"} />
        </div>

        <div className={"input-group"}>
          <p>Contact Number</p>
          <input ref={consorceNumberRef} placeholder={"XX-XXXX-XXXX"} />
        </div>

        <div className={"input-group"}>
          <p>Floors</p>
          <input ref={floorsRef} placeholder={"Quantity"} />
        </div>

        <div className={"submit-button"} style={{ padding: "1rem" }}>
          <button
            onClick={addConsorce}
            style={{
              background: "black",
              color: "white",
              padding: ".5rem",
              fontSize: "1rem",
              cursor: "pointer",
              border: "none",
              textShadow: "0 0 5px rgba(255,255,255,.5)"
            }}
          >
            Add Consorce
          </button>
        </div>
      </div>
    </div>
  );
}
