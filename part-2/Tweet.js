const Tweet = (props) => {
  
    return (
        <div className="tweet">
            <span> {props.name} </span>
            <span className="username">{props.username} </span>
            <span className="date"> {props.date}</span>
            <p>Message: {props.message}</p>
        </div>
    )
}