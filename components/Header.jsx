import Link from "next/link";
import { Button } from "./ui/button";

// importing components
import Nav from "@/components/Nav"
import { Pointer } from "lucide-react";


const Header = () => {
    return <header className="py-8 sm:py-7 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                <h1 className="text-xl font-semibold">
                    Kushal <span className="text-cyan-200">.</span>
                </h1>
                </Link>




                {/* Desktop Nav and Hire Button*/}
                <div className="hidden sm:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button className="text-cyan-200">Hire me</Button>
                    </Link>
                </div>

                {/* Desktop Nav and Hire Button*/}
                <div className="sm:hidden">Mobile Nav</div>
                
            </div>
        </header>
}

export default Header