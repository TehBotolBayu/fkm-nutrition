export default function Card({options, children}) {
    return (
        <div className={`${options} p-4 rounded-lg shadow-md`}>
            {children}
        </div>
    )
}