import TextElement from "../components/TextElement"


const ListElement = ({filmTitles}) => {
    const textComponents = filmTitles.map( filmTitle => {
        return (
            <TextElement
            key = {filmTitle.id} 
            filmTitle = {filmTitle.filmTitle}
            />
        )
    })

    return (
        <>
            <h1> This is my list component</h1>
            {textComponents}
            <TextElement/>
        </>
    )


}

export default ListElement