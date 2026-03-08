//<!--creating a new dom element-->
        const heading = React.createElement("h1",
             { id: "heading"}, 
             "Hello world from React!")
             ;

       // <!--here we re using the react dom to crate root . react core doesnot have it-->
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);