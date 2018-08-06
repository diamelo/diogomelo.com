import React from 'react'
import './Card.css'

const Card = ({ data }) => (
    <div className="CardGroup">
        {
            data.allContentfulProjects.edges.map(edge => 
                <div className="Card">
                    <img src={edge.node.image.file.url} />
                    <h3>{edge.node.title}</h3>
                    <p>{edge.node.text}</p>
                </div> 
            )
        }
    </div>
)

export default Card


