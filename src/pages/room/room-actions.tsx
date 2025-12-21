import { Button } from "@/components/ui/button";
import { Ellipsis, Link, MessagesSquare, MicOff, MonitorUp, Phone, VideoOff } from "lucide-react";
import { useNavigate } from "react-router";

export default function RoomActions() {
    const navigate = useNavigate()
    return (
        <div className="w-full mx-auto grid grid-cols-3">
            <div className="flex items-center gap-2">
                <Button size="icon" variant="secondary">
                    <Link />
                </Button>
                <Button size="icon" variant="secondary">
                    <MicOff />
                </Button>
                <Button size="icon" variant="secondary">
                    <VideoOff />
                </Button>
            </div>

            <div className="flex items-center justify-center gap-2">
                <Button size="icon" variant="secondary">
                    <MonitorUp />
                </Button>
                <Button size="icon" variant="secondary">
                    <MessagesSquare />
                </Button>
                <Button size="icon" variant="secondary">
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
