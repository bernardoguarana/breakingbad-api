import { useEffect, useState } from "react"
import { CardItem } from "../CardItem"
import { ButtonLoadMore, ContentCard, Loader } from "./style"
import axios from "axios"
import ImageLoader from "../../assets/loader.png"

export function Application({ serie }) {
    const [totalCards, setTotalCards] = useState(7)
    const [showCards, setShowCards] = useState(4)
    const [items, setItems] = useState([])
    const [isLoader, setIsLoader] = useState(true) //loader dever aparecer

    function mostrarMais(){
        setIsLoader(true)
        setShowCards(showCards + 4)
    }

    useEffect(() => {
        //console.log('componente renderizado')

        axios.get(`https://breakingbadapi.com/api/characters?category=${serie}&limit=${showCards}&offset=0`)
            .then(response => {
                //console.log(response.data)
                setItems(response.data)
                setTotalCards(response.data.length)

                //Dados carregados, esconda o loader
                setIsLoader(false) //loader deve desaparecer
            })

    }, [showCards])

    return (
        <>
            {
                //se isLoader true, então...
                isLoader && (
                    <Loader>
                        <img src={ImageLoader} alt="" />
                    </Loader>
                )
            }

            <div className="container">

                <ContentCard>

                    {//console.log(items)

                        items.map((dados) => {

                            return (
                                <CardItem key={dados.char_id}
                                    imagem={dados.img}
                                    nome={dados.name}
                                    ator={dados.portrayed}
                                    apelido={dados.nickname}
                                    status={dados.status}
                                />
                            )

                        })

                    }
                </ContentCard>
                    {`Total Exibido: ${totalCards}`}<br/>
                    {`Total Solicitado: ${showCards}`}



                <ButtonLoadMore onClick={mostrarMais} disabled={showCards != totalCards} >Mostrar mais</ButtonLoadMore>
            </div>
        </>
    )

}