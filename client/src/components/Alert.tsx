type AlertProps = {
    children: React.ReactNode
}
const Alert = ({ children }: AlertProps) => {
    return <div className="p-2 text-red-200">{children}</div>
}
export { Alert }