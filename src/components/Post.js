import React, { useState, useEffect } from 'react'

const comentariosDefinidos = [
    { mensaje: "Soy el primer comentario!", like: false },
    { mensaje: "Buenisima", like: true }
]

const Post = () => {
    const [comentarios, setComentarios] = useState(comentariosDefinidos)
    const [mensaje, setMensaje] = useState("")
    const [like, setLike] = useState(false)

    const handleMensaje = (evento) => {
        setMensaje(evento.target.value)
    }

    const handleLike = (evento) => {
        setLike(!like)
    }

    const handleEnvio = (evento) => {
        const nuevoComentario = {
            mensaje: mensaje,
            like: like,
        }
        let copiaComentario = [...comentarios]
        copiaComentario.push(nuevoComentario)
        setComentarios(copiaComentario)
    }

    useEffect(() => {
        let copiaComentario = [...comentarios]
        const nuevoComentario = {
            mensaje: "Todo Bien?",
            like: true
        }
        copiaComentario.push(nuevoComentario)
        setComentarios(copiaComentario)
    }, [])

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

            <div className="row">
                <div className='col-4'>
                    <div class="card bg-info">
                        <img src="https://coobis.com/wp-content/uploads/2018/09/comentarios-en-instagram-destacada.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Aqui podras comentar, con un emoticon y ver los comentarios</p>
                        </div>
                    </div>

                </div>
                <div className='col-4'>
                    <h1>Comentar</h1>
                    <label htmlFor="mensaje">Mensaje 💭</label>
                    <textarea
                        className="form-control"
                        type="text"
                        value={mensaje}
                        onChange={handleMensaje}
                        name="mensaje"
                        id="mensaje"
                        rows="0"
                    />

                    <div className="form-check mt-3">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={like}
                            onChange={handleLike}
                            name="like"
                            id="like"
                        />
                        <label className="form-check-label" htmlFor="like">
                            Agregar Emoticon 👍
                        </label>
                        <br />
                    </div>
                    <button
                        className="btn btn-primary mt-3"
                        type="button"
                        onClick={handleEnvio}
                    >
                        Enviar</button>
                </div>


                <div className='col-4'>
                    <h1>Comentarios</h1>
                    <table className="table table-info table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Mensajes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comentarios.map((comentario) => {
                                return (
                                    <tr>
                                        <td>
                                            {comentario.mensaje}
                                            {comentario.like && "👍"}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>


                </div>

            </div>
        </>
    )
}

export default Post