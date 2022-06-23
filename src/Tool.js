// use props without destructuring
// function Tool(props) { // automatically allows you to use props in your React app's component.
//     const name = props.name; // Declare props variable
//     const tool = props.tool;
//     return ( // Place variables in JSX exm: {name}, {tool}
//         <div>
//             <h1>My name is {name}</h1>
//             <p>My favorite design tool is {tool}</p>
//         </div>
//     );
// }

// export default Tool;
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// use props with destructuring
// function Tool({name, tool   }) { // Instead of passing props as an argument, we destructured and passed in the variables as the function's argument.
    
//     return ( // Place variables in JSX exm: {name}, {tool}
//         <div>
//             <h1>My name is {name}</h1>
//             <p>My favorite design tool is {tool}</p>
//         </div>
//     );
// }

// export default Tool;
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// set default values for props
function Tool({name, tool   }) { // Instead of passing props as an argument, we destructured and passed in the variables as the function's argument.
    
    return ( // Place variables in JSX exm: {name}, {tool}
        <div>
            <h1>My name is {name}</h1>
            <p>My favorite design tool is {tool}</p>
        </div>
    );
}

Tool.defaultProps = { // declared default values for props. To do that, we started with the component's name and a dot/period connecting it with defaultProps
    name: "Designer",
    tool: "Corel Draw"
}

export default Tool;