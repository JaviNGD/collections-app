import { useContext } from "react";
import { CollectionsAppContext } from "../../Context/Context";
import Layout from "../../Components/Layout/Layout"

function Account() {
  const { setSearchByGenre} = useContext(CollectionsAppContext);
  setSearchByGenre(null);

  return (
    <Layout>
      Account
    </Layout>
  )
}

export default Account