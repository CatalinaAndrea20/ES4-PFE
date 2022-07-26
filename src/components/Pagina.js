
const Pagina = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-info">
                <a class="navbar-brand" href="#">Catalina Andrea</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/src/components/Post.js">Post</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <br />

            <div className="jumbotron text-center mb-4 mt3">
                <h1>Catalina Chávez</h1>
                <p>Estudiante en el centro de formación tecnica INACAP, ultimo semestre de tecnico analista programador<br />Mas informacion de la carrera analista programador</p>
                <a className="btn btn-danger" target="_blank" href="https://portales.inacap.cl/carreras/Area-Tecnologias-Informacion-y-Ciberseguridad/Analista-Programador/index" role="button">Leer más</a>
            </div>
            <hr />
            <div class="container">
                <div class="row mt-4">

                    <h3 className="mt-3">Ramos que me gustaron de la carrera</h3>
                    <div class="accordion mt-3" id="accordionExample">
                        <div class="accordion-item bg-info text-white">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Comunicación y redes de datos
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Se denomina red de transmisión de datos al conjunto formado por los equipos y los medios físicos y lógicos que permiten la comunicación de información entre diferentes usuarios a cualquier distancia que se encuentren.</strong>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item bg-info text-white">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Administración de sistema operativo Linux
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Para su administración está integrado por programas que hacen posible el manejo de cuentas de usuario, la organización del sistema de archivos, la instalación y la actualización de software, el monitoreo del sistema, la realización de respaldos y la ejecución de tareas de mantenimiento.</strong>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item bg-info text-white">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Ingenieria y gestión de requerimientos
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Es la disciplina para desarrollar una especificación completa, consistente y no ambigua, la cual servirá como base para acuerdos comunes entre todas las partes involucradas y en dónde se describen las funciones que realizará el sistema.</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <div class="row">
                    <h3 className="text-center mt-3">Intereses</h3>
                    <div class="col-6 mt-3">
                        <h5>Viajar a Finlandia</h5>
                        <div class="card mt-3">
                            <img src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_1860/public/media/image/2019/04/finlandia-pais-feliz-mundo.jpg?itok=Ok3RdIlM" class="card-img-top" />
                            <div class="card-body mt-3">
                                <p class="card-text mt-3">
                                Finlandia es un país de Europa del Norte que limita con Suecia,
                                Noruega y Rusia. Su capital, Helsinki, ocupa una península y
                                las islas que la rodean en el mar Báltico.<br />
                                El vuelo desde Chile a Finlandia sale alrededor de $1.429.873 pesos chilenos, con 29 h 55 m de vuelo.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 mt-3">
                        <h5>Continuar con una Ingeneria Informatica</h5>
                        <div class="card">
                            <img src="https://www.emagister.com/blog/wp-content/uploads/2019/02/ingenier%C3%ADa-inform%C3%A1tica.jpg" class="card-img-top" />
                            <div class="card-body mt-3">
                                <p class="card-text mt-3">
                                Las tendencias tecnológicas en la actualidad requieren cada día de profesionales que sean capaces
                                de enfrentarse a desafíos en el área de las Tecnologías de la Información. 
                                Ingenieros con conocimientos de arquitectura de bases de datos en la nube, inteligencia de negocios
                                e ingeniería de software; y que, además, tengan la habilidad de conformar equipos de trabajo para
                                una eficiente gestión de los proyectos.
                                Es en este escenario donde surge la carrera profesional de Ingeniería en Informática,
                                que integra en una forma coherente las metodologías de la especialidad con la formación
                                de las disciplinas básicas, entregando sólidos conocimientos en Tecnologías de Información
                                y Comunicación, el desarrollo de software, la analítica y minería de datos,
                                la inteligencia de negocios, la gestión y evaluación de proyectos.
                                </p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <script src="js/bootstrap.bundle.min.js"></script>
        </>

    )
}

export default Pagina