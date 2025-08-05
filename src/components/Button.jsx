export default function Button({
    children,
    type='button',
    bgColor='bg-red-600',
    textColor='text-white',
    cursor='cursor-pointer',
    className='',
    ...props
}){
    return(
    <>
    <button className={`px-4 py-2 hover:bg-red-700 rounded-lg ${bgColor} ${textColor} ${className}${cursor}`}{...props}>{children}</button>
    </>);
}