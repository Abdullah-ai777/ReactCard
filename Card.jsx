import './Card.css';
function Card({imeg,name,price,link,p,r,h}){
let style={backgroundColor: name[0]=="L"? "rgb(250, 78, 112)":'rgb(78, 107, 250)' }
let style2={backgroundColor: name[0]=="A"? 'rgb(78, 107, 250)':"rgb(250, 78, 112)" }
   
    return(
        <>
       
        <div className="outer"style={style} >
            <div className="inner">
                <img src={imeg}alt="" />
            </div>
            <h1>{name}</h1>
            <p>price</p> <h3>{price}</h3>
            <a href={link} target='blank'>
            <button> buy now </button>
            </a>
            <div className='func' style={style}> 
                <h4> {p}  </h4>
                <h4> {r}</h4>
                <h4> {h} </h4>
            </div>
        </div>
       
        </>
    )
}
export default Card;