import React from 'react'
import { Link } from 'react-router-dom'
import { Skeleton, Card } from 'antd';

const { Meta } = Card;

export default function PokemonList({ pokemon, loading }) {
    console.log(pokemon)
    let imgPath = 'https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/'

    return (
        // <div>{
        pokemon.map(p => {
            let urlx = p.url.split('/')

            if (loading) {
                return (
                    <Skeleton loading={loading} avatar={'circle'} paragraph={true} />
                )
            } else {
                return (
                    <Link key={p.name} to={`/wild-pokemon-detail/${urlx[6]}`}>

                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={imgPath + urlx[6] + '.png'} />}
                        >
                            <Meta title={p.name} description={''} />
                        </Card>
                    </Link>
                )
            }
        })
        // }</div>

        // <Card
        //     hoverable
        //     style={{ width: 240 }}
        //     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        // >
        //     <Meta title="Europe Street beat" description="www.instagram.com" />
        // </Card> 

        // <div>{
        //     pokemon.map(p => {
        //         let urlx = p.url.split('/')

        //         return (
        //             <Link to={`/wild-pokemon-detail/${urlx[6]}`}>
        //                 <div key={p.id}>
        //                     <img src={imgPath + urlx[6] + '.png'} /><br />
        //                     {p.name}
        //                 </div>
        //             </Link>
        //         )
        //     })
        // }</div >
    )
}
