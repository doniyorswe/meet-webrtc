import { BellDot, Video } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import UserDropdown from "./user-dropdown";
import { ModeToggle } from "./mode-toggler";

export default function Header() {

    return (
        <header className="flex justify-between">
            <Input type="search" placeholder="Search..." className="w-auto bg-background border-secondary/20 border-none shadow-popover-foreground" />
            <div className="flex items-center gap-2">
                <Button variant="default">
                    <Video size={16} />
                    Meet
                </Button>
                <ModeToggle />
                <Button size="icon" variant="outline" className="bg-background hover:bg-background border-none">
                    <BellDot className="w-5! h-5!" />
                </Button>
                <UserDropdown />
            </div>
        </header>
    )
}
