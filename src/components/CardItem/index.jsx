import { InfoCard } from "./style";

export function CardItem({imagem,nome,ator,apelido,status}){
    
    return(

        <InfoCard>
            <div className="image">
                <img src={imagem} alt="" />
            </div>

            <div className="info">
                <h2>{nome}</h2>
                <hr />
                
                <ul>
                    <li><b>Ator</b>: {ator}</li>   
                    <li><b>Apelido</b>: {apelido} </li>  
                    <li><b>Status</b>: {status} </li>
                </ul>
            </div>
        </InfoCard>

    )

}