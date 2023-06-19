import { useParams } from "react-router-dom";
import Carroussel from "../components/Loc/Carrousel";
import logement from "../Data/logement.json";
import Collapse from "../components/Collapse";
import Tag from "../components/tag";
import Ratings from "../components/rating";
import Page404 from "../pages/Page404";

function Location() {

  let id = useParams()

  let check = logement.find(search => search.id === id.id)



  // Vérifier si id existe ou pas
  if (!check) {
    return <Page404 />;
  }

  let pictures = check.pictures.map((pics, index) => {
    return (
      <img key={index} className="image" src={pics} alt="habitation" />
    )
  })

  let tags = check.tags.map((tag, index) => (
    <Tag key={`${index}`} tag={`${tag}`} />
  ))

  return (
    <>
      <Carroussel image={pictures} />

      <section className="rentalIdentity" >
        <div className="place" >
          <p className="rentalTitle" >{check.title}</p>
          <p className="rentalPlace" >{check.location}</p>
          <div className="tagWrapper">
            {tags}
          </div>
        </div>
        <div className="hostAndRate" >
          <div className="host" >
            <p className="renterName" >{check.host.name}</p>
            <img className="renterPicture" src={check.host.picture} alt="Profil du loueur" />
          </div>
          <div className="rates">
            <Ratings rate={check.rating} />
          </div>
        </div>
      </section>

      <div className="collapse-Ccontent">
        <Collapse title="Description">{check.description}</Collapse>
        <Collapse title="Équipements">
          {check.equipments.map((equipment) => (
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