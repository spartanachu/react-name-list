// import React from "React"
import ReactDOM from "react-dom/client"
import "./style.css"
import photo1 from "./Assets/Images/photo1.jpg"
import photo2 from "./Assets/Images/photos2.jpg"

const root = ReactDOM.createRoot(document.getElementById("root"))
var arr = [
    {
        image: photo1 ,
        name: "Jossica Koel",
        dec: "Hey, loel, i here to help you out please"
    },
    {
        image: photo2,
        name: "komeial Bolger",
        dec: "i will send you all document as soon a.."
    },
    {
        image: photo1 ,
        name: "Tamaara Suiale",
        dec: "Are you going to business trip in next week.."
    },
    {
        image: photo1 ,
        name: "Sam Nielson",
        dec: "i suggest to start new business soon"
    },
    {
        image: photo1,
        name: "Caroline Nexon",
        dec: "we need to start new research center"
    },
    {
        image: photo1,
        name: "Patrick Koeler",
        dec: "May be yes"
    }
]
function Inputbox() {
    return (
        <div className="inputbox">

            <input type="text" placeholder="Search.." src="./Assets/Images/search.png"></input>
            <i class="fa-solid fa-magnifying-glass" style={{ color: "#00060f" }}></i>
        </div>
    )
}
function Namelist(props) {
    return (
        <div className="" >

            <div className="container" >

                <div className="image1"><img src={props.image} alt="" /></div>
                <div className="name">
                    <h4>{props.name} </h4>
                    <p>{props.dec} </p></div>
                <div className="dt">
                    <p>11:26</p>
                    <p style={{ marginTop: "50px" }}>⭐</p>
                </div>
            </div>
        </div>
    )
}

root.render(
    <div style={{ backgroundColor: "lightwhite", padding: "10px", margin: "10px" }}>
        <Inputbox></Inputbox>
        <div>
            {
                arr.map(
                    function (items) {
                        return <Namelist image={items.image} name={items.name} dec={items.dec}></Namelist>

                    }
                )
            }

        </div>
    </div>
)
