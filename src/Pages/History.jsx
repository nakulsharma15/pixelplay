import { useUserDetails } from "../Contexts/UserContext/UserContext";

export default function History() {

    const { userState } = useUserDetails();

    const {history} = userState;

    return (
        <div>
            <h1>{history.map((video) => <p>{video.title}</p>)}</h1>
        </div>)

}