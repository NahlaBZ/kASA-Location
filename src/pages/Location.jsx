import { useParams } from "react-router-dom";
import Carroussel from "../components/Loc/Carrousel";
import logement from "../Data/logement.json"


function Location() {

  let id = useParams()

  let checkedRental = logement.find(search => search.id === id.id)



  let pictures = checkedRental.pictures.map((pics, index) => {
    return (
      <img key={index} className="image" src={pics} alt="habitation" />
    )
  })



  return (
    <>
      <Carroussel image={pictures} />



    </>
  )
}




export default Location;