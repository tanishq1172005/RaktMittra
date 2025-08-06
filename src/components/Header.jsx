import {Logo,Button} from './index'
import {Link} from 'react-router-dom'

export default function Header(){
    return(
    <header>
        <nav className="flex items-center justify-between px-2 border border-black h-15 xl:h-20 xl:px-10">
            <div className='flex items-center'>
                <Logo/>
                <p className='font-bold text-red-800'>RaktMittra</p>
            </div>
            <div className='space-x-5'>
                <Link to='/about' className='hover:text-red-600'>About</Link>
                <Link to='/contact' className='hover:text-red-600'>Contact</Link>
                <Button>Get Started</Button>
            </div>
        </nav>
    </header>)
}