import "./Styles/VideoCard.css"

export default function VideoCard() {

    return (
        <div className="video-card">

            <div className="video-thumbnail">
                <img src="https://res.cloudinary.com/nakulsharma15/image/upload/v1651163019/PixelPlay%20Video%20Library/Smartphone%20Video%20Thumbnails/hq720_dtfwm4.jpg" alt="video" />
            </div>

            <div className="video-footer">

               <div className="avatar">
               <img src="https://res.cloudinary.com/nakulsharma15/image/upload/v1651476965/PixelPlay%20Video%20Library/Channel%20Avatar/download_kmvi1c.jpg" alt="video" />
               </div>

                <div className="video-info">
                    <div className="video-title">
                        <p>POCO X4 Pro Review - $250 iPhone Destroyer?</p>
                    </div>

                    <div className="video-creator">
                        <p>Mrwhosetheboss</p>
                        <span class="material-icons">check_circle</span>
                    </div>
                </div>
            </div>





        </div>
    )

}