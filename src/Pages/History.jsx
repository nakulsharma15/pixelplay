import "./Styles.css";
import { Header, SideNav,  HorizontalVideoCard  } from "../Components";
import { useUserDetails } from "../Contexts/UserContext/UserContext";
import { clearHistoryHandler } from "../Utils/handleHistory";

export default function History() {

    const { userState, userDispatch } = useUserDetails();

    const { history } = userState;

    return (
        <div>
            <Header />

            <div className="page-content">

                <SideNav />

                <div className="main-content">

                    <div className="history-page-header">

                        <div>
                            <h1>Watch History</h1>
                            {history.length === 0 ?  <p>Videos you watch will show up here.</p> : <p>Here are the videos you watched: </p>}
                           
                        </div>
                        {history.length !== 0 ? <button className="btn icon-btn clear-history-btn" onClick={() => clearHistoryHandler(userDispatch)}>Clear All <span className="material-icons-outlined">delete</span></button> : null}

                    </div>

                    {history.length === 0 ? <p className="empty-list-text">This list has currently no videos</p> :
                        <div className="horz-video-list">
                            {history.map((video) => <div key={video._id}><HorizontalVideoCard Video={video} Type={"History"}/></div>)}
                        </div>}




                </div>

            </div>


        </div>
    )

}