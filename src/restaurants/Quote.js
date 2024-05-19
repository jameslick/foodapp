

const Quote = ({quotes})=> {



    return(
        <div>
            <h1>Quotes</h1>
        <ul className="list-group">
            
                {
                    quotes.map((quo,index)=>{
                        return (
                            <li className="list-group-item" key={index}>{quo.text}<span>{quo.author}</span></li>
                        )
                    })
                }
            
        </ul>
        </div>
    )
}
export default Quote;