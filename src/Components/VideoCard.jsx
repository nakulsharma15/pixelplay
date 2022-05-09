import "./Styles/VideoCard.css"

export default function VideoCard({Video}) {

    return (
        <div className="video-card">

            <div className="video-thumbnail">
                <img src={Video.thumbnail} alt="video" />
            </div>

            <div className="video-footer">

               <div className="avatar">
               <img src={Video.avatar} alt="video" />
               </div>

                <div className="video-info">
                    <div className="video-title">
                        <p>{Video.title}</p>
                    </div>

                    <div className="video-creator">
                        <p>{Video.creator}</p>
                        <span class="material-icons">check_circle</span>
                    </div>
                </div>
            </div>





        </div>
    )

}