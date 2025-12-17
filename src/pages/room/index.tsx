import { useParams } from "react-router"
import RoomActions from "./room-actions"
import MainWindow from "./main-window"

export default function RoomMain() {
    const { room } = useParams()
    return (
        <div className="h-screen flex flex-col p-3">
            <div className="flex-1 flex flex-col">
                <h2 className="text-center">Room ID: {room}</h2>

                <div className="flex-1 p-5">
                    <MainWindow />
                </div>
            </div>
            <RoomActions />
        </div>
    )
}
