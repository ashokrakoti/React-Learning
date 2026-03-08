/**
 * <div>
 *    <div>
 *          <h1> heading <h1>
 *          <h1> heading <h1>      
 *    </div>
 * </div>
 */

/**
 * <parent>
 *    <child>
 *          <h1> heading <h1>
 *          <h1> heading <h1>      
 *    </child>
 *    <child>
 *          <h1> heading <h1>
 *          <h1> heading <h1>      
 *    </child>
 * </parent>
 */



//<!--creating a new dom element-->
        const parent = React.createElement("div",
             { id: "parent"}, 
             [React.createElement("div",{id : "child"},[
                  React.createElement("h1",{ id: "heading1"},"hello world from inner html"),
                  React.createElement("h2",{ id: "heading2"},"hello world from inner html"),
                  React.createElement("h3",{ id: "heading3"},"hello world from inner html")
            ]),
            React.createElement("div",{id : "child"},[
                  React.createElement("h1",{ id: "heading1"},"hello world from inner html"),
                  React.createElement("h2",{ id: "heading2"},"hello world from inner html"),
                  React.createElement("h3",{ id: "heading3"},"hello world from inner html")
            ])]
      );

       // <!--here we re using the react dom to crate root . react core doesnot have it-->
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);