const Scooter = ({scooter}) => {
    return(
        <div className="card mb-3" style={{width:200}}>
            <img src={'./img/scooter/' + scooter.img }className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">Titulo Patinete</h5>
                <p className="card-text">{scooter.txt}</p>
            </div>
            <ul className="list-group list-group-flush">
                    <li className="list-group-item">{scooter.precio}€</li>
            </ul>
        </div>    
    )
}

export default Scooter;