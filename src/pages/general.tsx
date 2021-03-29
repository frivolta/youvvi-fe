import { Button, Card } from "../components"
import { Edit } from "../sections/Edit"
import { H2, H4 } from "../styles"

export const GeneralPage = ()=>{
    const handleUpdateInformations = ()=>{
        console.log('Ádd position')
    }
    const generalInfoCardElement = <Card>
    <H2>General informations.</H2>
    <Button text="Add an expense" handleClick={handleUpdateInformations} />
  </Card>


    return <Edit>{generalInfoCardElement}</Edit>
}