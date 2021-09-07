function App() {
    return (
        <div>
            <Person 
            name="Homer"
            age={38}
            hobbies={["bowling", "watching tv", "drinking bear"]}
            />
            <Person name="Emmy" age={27} hobbies={["painting", "gambling"]} />
            <Person name="Barto" age={10} hobbies={["skateboarding", "making prank calls"]}/>
            <Person 
                name="Laila"
                age={8}
                hobbies={["reading", "saxophone", "eating vegetables"]}
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));