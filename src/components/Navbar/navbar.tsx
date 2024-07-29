import Link from 'next/link'
import { usePathname } from "next/navigation"
import Header from '../Header/header';

const Navbar = () => {

    const pathname = usePathname()
    const isActive = pathname === "/myroute"

    return (
        <>
            <Header />
            <ul className='pb-12 flex gap-6 justify-center text-2xl '>
                <li className={`rounded-md p-4 ${pathname === "/" ? 'bg-slate-700' : 'bg-transparent'} hover:bg-slate-600`}>
                    <Link href="/">Home</Link>
                </li>
                <li className={`rounded-md p-4 ${pathname === "/resume" ? 'bg-slate-700' : 'bg-transparent'} hover:bg-slate-600 `}>
                    <Link href="/resume">Resume</Link>
                </li>
                <li className={`rounded-md p-4 ${pathname === "/projects" ? 'bg-slate-700' : 'bg-transparent'} hover:bg-slate-600`}>
                    <Link href="/projects">Projects</Link>
                </li>
            </ul>
        </>
    );
}

export default Navbar;