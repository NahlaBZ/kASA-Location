import { useParams } from "react-router-dom";
import Carroussel from "../components/Loc/Carrousel";
import logement from "../Data/logement.json";
import Collapse from "../components/Collapse";
import Tag from "../components/tag";


function Location() {

  let id = useParams()

  let checkedRental = logement.find(search => search.id === id.id)



  let pictures = checkedRental.pictures.map((pics, index) => {
    return (
      <img key={index} className="image" src={pics} alt="habitation" />
    )
  })

  let tags = checkedRental.tags.map((tag, index) => (
    <Tag key={`${index}`} tag={`${tag}`} />
  ))

  return (
    <>
      <Carroussel image={pictures} />

      <section className="rentalIdentity" >
        <div className="place" >
          <p className="rentalTitle" >{checkedRental.title}</p>
          <p className="rentalPlace" >{checkedRental.location}</p>
          <div className="tagWrapper">
            {tags}
          </div>
        </div>
        <div className="hostAndRate" >
          <div className="host" >
            <p className="renterName" >{checkedRental.host.name}</p>
            <img className="renterPicture" src={checkedRental.host.picture} alt="Profil du loueur" />
          </div>

        </div>
      </section>

      <div className="collapse-container">
        <Collapse title="Description">{checkedRental.description}</Collapse>
        <Collapse title="Équipements">
          {checkedRental.equipments.map((equipment) => (
            <p key={equipment}>
              {equipment}
              <br />
            </p>
          ))}
        </Collapse>
      </div>


    </>
  )
}




export default Location;