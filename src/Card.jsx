

export default function Card() {
    return (
        <div className="card">
            <img src="/public/katie-zaferes.png" alt="" />
            <div className="rating">
                <img src="/public/star.png" alt="" />
                <span>5.0</span>
                <span>(6).USA</span>
            </div>
            <p>Life lesson with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}