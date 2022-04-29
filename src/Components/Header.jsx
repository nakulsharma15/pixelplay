import "./Styles/Header.css";

export default function Header() {

    return (
        <div className="header flex-sb">

            <div className="header-logo flex-align-center">

                <div className="header-logo-img">
                    <img src="https://res.cloudinary.com/nakulsharma15/image/upload/v1651218268/Assets/0_hfnhg9.png" />
                </div>
                <h1 className="text-xl">PixelPlay</h1>

            </div>

            <button class="btn primary-btn flex-sb login-btn"><span class="material-symbols-outlined">account_circle</span>LOGIN</button>
            


        </div>)

}