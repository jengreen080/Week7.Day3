import React, {useState} from "react"
import InnerBox from "../containers/InnerBox"
import ListElement from "../components/ListElement"
import TitleElement from "../components/TitleElement"


const OuterBox = () => {

    const [filmTitles, setFilmTitles] = useState(
        [
            {
                id: 1,
                filmTitle: "Spiderman: In to the Spiderverse"
            },
            {
                id: 2,
                filmTitle: "Pretty Woman"
            }
        ]
    )

    return (
        <>
            <h1> This is my outer box</h1>
            <TitleElement/>
            <ListElement filmTitle = {filmTitles}/>
            <InnerBox/>
        </>
    )


}

export default OuterBox