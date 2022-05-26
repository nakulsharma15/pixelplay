import "./Styles/HorizontalVideoCard.css";

export default function HorizontalVideoCard() {

    return (
        <div className="horz-video-card">

            <div className="horz-video-thumbnail">
                <img src="https://res.cloudinary.com/nakulsharma15/image/upload/v1651163019/PixelPlay%20Video%20Library/Smartphone%20Video%20Thumbnails/hq720_dtfwm4.jpg" />
            </div>

            <div className="horz-video-info">

                <div className="horz-video-header">

                    <div>
                        <p className="horz-video-title">POCO X4 Pro Review - $250 iPhone Destroyer?</p>
                        <div className="video-creator flex-align-center horz-video-creater-div">
                            <p>Mrwhosetheboss</p>
                            <span className="material-icons">check_circle</span>
                        </div>
                    </div>

                    <button className="delete-history-btn"><span className="material-icons-outlined">delete_outline</span></button>

                </div>

                <div className="horz-video-footer">
                    <p>Unboxing and Review of the POCO X4 Pro, the best budget phone in 2022, including Camera test, battery life, and price, but then also the sneaky ways that POCO manages to make their phones so cheap!</p>
                </div>

            </div>

        </div>
    )
}