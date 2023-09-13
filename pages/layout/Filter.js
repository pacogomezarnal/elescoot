
const Filter = ({filtrarScooter}) => {

    return(
        <ul class="nav justify-content-end scooterlist pt-3 pb-1 pe-2 text-bg-dark">
            <li class="nav-item">
                <div class="row text-bg-dark">
                    <label for="inputPrecio" class="col col-form-label text-end">Precio maximo</label>
                    <div class="col">
                        <input  class="form-control" id="inputPrecio" onChange={filtrarScooter}/>
                    </div>
                </div>
            </li>

        </ul>
    )
};

export default Filter;