type MainBarProps = {
    children: React.ReactNode
}
const MainBar = ({ children }: MainBarProps) => {
    return <div className='bg-primary-white col-span-5 my-7 mr-7 rounded-[25px] flex justify-center items-center'>
        {children}
    </div>
}
export { MainBar }