import Link from 'next/link'
import { usePathname } from "next/navigation"
import Header from '../Header/header';

const Navbar = () => {
    const pathname = usePathname();
    
    return (
        <>
            <Header />
            <ul className='pb-12 flex gap-6 justify-center text-2xl '>
                <li>
                    <Link className={`flex rounded-md p-4 ${pathname === "/" ? 'text-pink-500' : 'bg-transparent'} hover:bg-slate-600`} href="/">Home</Link>
                </li>
                <li>
                    <Link className={`flex rounded-md p-4 ${pathname === "/resume" ? 'text-pink-500' : 'bg-transparent'} hover:bg-slate-600`} href="/resume">Resume</Link>
                </li>
                <li>
                    <Link className={`flex rounded-md p-4 ${pathname === "/projects" ? 'text-pink-500' : 'bg-transparent'} hover:bg-slate-600`} href="/projects">Projects</Link>
                </li>
            </ul>
        </>
    );
}

export default Navbar;