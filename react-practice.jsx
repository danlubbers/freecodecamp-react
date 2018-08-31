// 1. Create a Simple JSX Element

    const JSX = <h1>Hello JSX!</h1>;

// 2. Create a Complex JSX Element

    const JSX = 
        <div>
            <h1></h1>
            <p></p>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>  
        </div>

// 3. Add Comments in JSX

    const JSX = (
        <div>
        {/* This is how you comment in JSX */ }
        <h1>This is a block of JSX</h1>
        <p>Here's a subtitle</p>
        </div>
    );

// 4. Render HTML Elements to the DOM

    const JSX = (
        <div>
        <h1>Hello World</h1>
        <p>Lets render this to the DOM</p>
        </div>
    );
    // change code below this line
  ReactDOM.render(JSX, document.getElementById('challenge-node'));

// 5. Define an HTML Class in JSX

    const JSX = (
        <div className='myDiv'>
        <h1>Add a class to this div</h1>
        </div>
    );

// 6. Learn About Self-Closing JSX Tags

    const JSX = (
        <div>
        <h2>Welcome to React!</h2> <br />
        <p>Be sure to close all tags!</p>
        <hr />
        </div>
  );
  

// 7. Create a Stateless Functional Component

    const MyComponent = function() {
        // change code below this line
        return(
        <div>
        'String of text'
        </div>
        )
        // change code above this line
    }
// 8. Create a React Component

    class MyComponent extends React.Component {
        constructor(props) {
        super(props);
        }
        render() {
        // change code below this line
        return(
        <div>
        <h1>Hello React!</h1>
        </div>
        )
        // change code above this line
        }
    };

// 9. Create a Component with Composition

    const ChildComponent = () => {
        return (
        <div>
            <p>I am the child</p>
        </div>
        );
    };
    
    class ParentComponent extends React.Component {
        constructor(props) {
        super(props);
        }
        render() {
        return (
            <div>
            <h1>I am the parent</h1>
            { /* change code below this line */ }
            <ChildComponent />
    
            { /* change code above this line */ }
            </div>
        );
        }
    };

// 10. Use React to Render Nested Components

    const TypesOfFruit = () => {
        return (
        <div>
            <h2>Fruits:</h2>
            <ul>
            <li>Apples</li>
            <li>Blueberries</li>
            <li>Strawberries</li>
            <li>Bananas</li>
            </ul>
        </div>
        );
    };
    
    const Fruits = () => {
        return (
        <div>
            { /* change code below this line */ }
            <TypesOfFruit />
            { /* change code above this line */ }
        </div>
        );
    };
    
    class TypesOfFood extends React.Component {
        constructor(props) {
        super(props);
        }
    
        render() {
        return (
            <div>
            <h1>Types of Food:</h1>
            { /* change code below this line */ }
            <Fruits />
            { /* change code above this line */ }
            </div>
        );
        }
    };

// 11. Compose React Components

    class Fruits extends React.Component {
        constructor(props) {
        super(props);
        }
        render() {
        return (
            <div>
            <h2>Fruits:</h2>
            { /* change code below this line */ }
            <NonCitrus />
            <Citrus />
            { /* change code above this line */ }
            </div>
        );
        }
    };
    
    class TypesOfFood extends React.Component {
        constructor(props) {
        super(props);
        }
        render() {
        return (
            <div>
            <h1>Types of Food:</h1>
            { /* change code below this line */ }
            <Fruits />
            { /* change code above this line */ }
            <Vegetables />
            </div>
        );
        }
    };

// 12. Render a Class Component to the DOM

    class TypesOfFood extends React.Component {
        constructor(props) {
        super(props);
        }
        render() {
        return (
            <div>
            <h1>Types of Food:</h1>
            {/* change code below this line */}
            <Fruits />
            <Vegetables />
            {/* change code above this line */}
            </div>
        );
        }
    };
    
    // change code below this line
    ReactDOM.render(<TypesOfFood/>, document.getElementById('challenge-node'))

// 13. Write a React Component from Scratch

    class MyComponent extends React.Component {
        render() {
        return(
            <div>
            <h1>My First React Component!</h1>
            </div>
        )
        }
    }
    
    ReactDOM.render(<MyComponent/>, document.getElementById('challenge-node'));

// 14. Pass Props to a Stateless Functional Component

    const CurrentDate = (props) => {
        return (
        <div>
            { /* change code below this line */ }
            <p>The current date is: {props.date}</p>
            { /* change code above this line */ }
        </div>
        );
    };
    
    class Calendar extends React.Component {
        constructor(props) {
        super(props);
        }
        render() {
        return (
            <div>
            <h3>What date is it?</h3>
            { /* change code below this line */ }
            <CurrentDate date={Date()}/>
            { /* change code above this line */ }
            </div>
        );
        }
    };

// 15. Pass an Array as Props

    const List= (props) => {
        { /* change code below this line */ }
        return <p>{props.tasks.join(', ')}</p>
        { /* change code above this line */ }
    };
    
    class ToDo extends React.Component {
        constructor(props) {
        super(props);
        }
        render() {
        return (
            <div>
            <h1>To Do Lists</h1>
            <h2>Today</h2>
            { /* change code below this line */ }
            <List tasks={['one', 'two']}/>
            <h2>Tomorrow</h2>
            <List tasks={['three', 'four', 'five']}/>
            { /* change code above this line */ }
            </div>
        );
        }
    };