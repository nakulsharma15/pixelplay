import "./Styles.css";
import { Header, SideNav,  HorizontalVideoCard  } from "../Components";
import { useUserDetails } from "../Contexts/UserContext/UserContext";
import toast from "react-hot-toast";
import toastStyles from "../Utils/toastStyle";
import axios from "axios";

export default function History() {

    const { userState, userDispatch } = useUserDetails();

    const { history } = userState;

    const clearHistoryHandler = async (userDispatch) => {

        try {
            const response = await axios.delete(`/api/user/history/all`, {
              headers: {
                authorization: localStorage.getItem("Token"),
              },
            });
            const { status, data } = response;
            if (status === 200 || status === 201) {
              userDispatch({ type: "CLEAR_HISTORY", payload: data?.history });
              toast.success("Watch history cleared",{style: toastStyles});
            }
          } catch (error) {
            console.log(error);
            toast.error("Couldn't clear History",{style: toastStyles});
          }

    }

    return (
        <div>
            <Header />

            <div className="page-content">

                <SideNav />

                <div className="main-content">

                    <div className="history-page-header">

                        <div>
                            <h1>Watch History</h1>
                            <p>Videos you watched will appear here</p>
                        </div>
                        {history.length !== 0 ? <button className="btn icon-btn clear-history-btn" onClick={() => clearHistoryHandler(userDispatch)}>Clear All <span className="material-icons-outlined">delete</span></button> : null}

                    </div>

                    {history.length === 0 ? <p className="empty-list-text">This list has currently no videos</p> :
                        <div className="horz-video-list">
                            {history.map((video) => <div key={video._id}><HorizontalVideoCard Video={video} /></div>)}
                        </div>}




                </div>

            </div>


        </div>
    )

}