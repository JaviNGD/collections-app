import { useContext } from "react";
import { CollectionsAppContext } from "../../Context/Context";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import { IoIosArrowBack } from "react-icons/io";
import Layout from "../../Components/Layout/Layout";

function Account() {
  const { setSearchByGenre, loggedInUser } = useContext(CollectionsAppContext);
  const navigate = useNavigate();
  setSearchByGenre(null);

  // Redirect to the register page if the user is not logged in and return null to prevent the rest of the code from running
  if (loggedInUser === null) {
    navigate('/collections-app/register');
    return null;
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to='/collections-app/' className="absolute left-0">
          <IoIosArrowBack className="h-6 w-6 text-black cursor-pointer"/>
        </Link>
        <h1 className="font-semibold">My Account</h1>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-lg mb-10">Welcome, {loggedInUser.name}</h2>
        <table className="table-auto">
        <tbody>
          <tr>
            <th className="w-3/4 text-left pr-14">Name</th>
            <td className="w-3/4 text-left">{loggedInUser.name}</td>
          </tr>
          <tr>
            <th className="w-3/4 text-left pr-14">Last Name</th>
            <td className="w-3/4 text-left">{loggedInUser.lastName}</td>
          </tr>
          <tr>
            <th className="w-3/4 text-left pr-14">Email</th>
            <td className="w-3/4 text-left">{loggedInUser.email}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </Layout>
  )
}

export default Account