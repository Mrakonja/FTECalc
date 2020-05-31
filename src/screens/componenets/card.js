



function Card( props ) {
    let i;
    if (props.label === "FOR MD's"){
        i= faUser
    } else {
       
        i = faCalculator
    }
  return (
    <div className="cardWrapper" style={cardWStyle}>
      <h1 style={labelStyle}>{props.label}</h1>
      <div className='Card' style={CardStyle}>
      <Link to={props.nextp}  style={LinkStyle}>
        <FontAwesomeIcon icon={i} color="white" size='7x' />
        <h2>{props.ButtonText}</h2>
      </Link>
 
      </div>
    </div>

  );
}

export default Card;