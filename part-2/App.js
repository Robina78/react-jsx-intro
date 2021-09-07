const App = () => {
    return (
        <div>
            <Tweet 
              username="ruby2235" 
              name="Ruby" 
              date={new Date().toDateString()} 
              message="This is my first react tweet" />
            <Tweet 
              username="ella17" 
              name="Ella" 
              date={new Date().toDateString()} 
              message="This message is from my angel" />
            <Tweet 
              username="rodwin15" 
              name="rodwin" 
              date={new Date().toDateString()} 
              message="This message is my handsome boy" />
        </div>
    );
}
    



ReactDOM.render(<App />, document.getElementById("root"))