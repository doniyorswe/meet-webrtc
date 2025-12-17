import { Button } from "@/components/ui/button";
import { Ellipsis, Link, MessagesSquare, MicOff, MonitorUp, Phone, VideoOff } from "lucide-react";
import { useNavigate } from "react-router";

export default function RoomActions() {
    const navigate = useNavigate()
    return (
        <div className="w-full mx-auto grid grid-cols-3">
            <div className="flex items-center gap-2">
                <Button size="icon">
                    <Link />
                </Button>
                <Button size="icon">
                    <MicOff />
                </Button>
                <Button size="icon">
                    <VideoOff />
                </Button>
            </div>

            <div className="flex items-center justify-center gap-2">
                <Button size="icon">
                    <MonitorUp />
                </Button>
                <Button size="icon">
                    <MessagesSquare />
                </Button>
                <Button size="icon">
                    <Ellipsis />
                </Button>
            </div>

            <div className="flex justify-end">
                <Button size="icon" variant="destructive" onClick={() => navigate("/")}>
                    <Phone className="rotate-132" />
                </Button>
            </div>
        </div>
    )
}
