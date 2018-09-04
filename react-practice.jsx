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

// 16. Use Default Props

    const ShoppingCart = (props) => {
        return (
        <div>
            <h1>Shopping Cart Component</h1>
        </div>
        )
    };
    // change code below this line
    ShoppingCart.defaultProps = { items: 0};

// 17. Override Default Props

    const Items = (props) => {
        return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
    }
    
    Items.defaultProps = {
        quantity: 0
    }
    
    class ShoppingCart extends React.Component {
        constructor(props) {
        super(props);
        }
        render() {
        { /* change code below this line */ }
        return <Items quantity={10}/>
        { /* change code above this line */ }
        }
    };

// 18.  Use PropTypes to Define the Props You Expect

    const Items = (props) => {
        return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
    };
    
    // change code below this line
    Items.propTypes = {quantity: PropTypes.number.isRequired}
    // change code above this line
    
    Items.defaultProps = {
        quantity: 0
    };
    
    class ShoppingCart extends React.Component {
        constructor(props) {
        super(props);
        }
        render() {
        return <Items />
        }
    };

// 19. Access Props Using this.props

    class ReturnTempPassword extends React.Component {
        constructor(props) {
        super(props);
    
        }
        render() {
        return (
            <div>
                { /* change code below this line */ }
                <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
                { /* change code above this line */ }
            </div>
        );
        }
    };
    
    class ResetPassword extends React.Component {
        constructor(props) {
        super(props);
    
        }
        render() {
        return (
            <div>
                <h2>Reset Password</h2>
                <h3>We've generated a new temporary password for you.</h3>
                <h3>Please reset this password from your account settings ASAP.</h3>
                { /* change code below this line */ }
            <ReturnTempPassword tempPassword={'asdfghjk'} />
                { /* change code above this line */ }
            </div>
        );
        }
    };

// 20. Review Using Props with Stateless Functional Components

    class CampSite extends React.Component {
        constructor(props) {
        super(props);
        }
        render() {
        return (
            <div>
            <Camper name={'Camper'}/>
            </div>
        );
        }
    };
    // change code below this line
    class Camper extends React.Component {
        constructor(props) {
        super(props);
        }
        render() {
        return (
            <div>
            <p>{this.props.name}</p>
            </div>
        )
        }
    }
    
    Camper.defaultProps = { name: 'CamperBot'};
    Camper.propTypes = {name: PropTypes.string.isRequired};

// 21. Create a Stateful Component

    class StatefulComponent extends React.Component {
        constructor(props) {
        super(props);
        // initialize state here
        this.state = {
            name: 'Dan'
        };
        }
        render() {
        return (
            <div>
            <h1>{this.state.name}</h1>
            </div>
        );
        }
    };
    
//  22. Render State in the User Interface

    class MyComponent extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp'
        }
        }
        render() {
        return (
            <div>
            { /* change code below this line */ }
            <h1>{this.state.name}</h1>
            { /* change code above this line */ }
            </div>
        );
        }
    };

// 23. Render State in the User Interface Another Way

    class MyComponent extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp'
        }
        }
        render() {
        // change code below this line
            const name = this.state.name;
        // change code above this line
        return (
            <div>
            { /* change code below this line */ }
            <h1>{name}</h1>
            { /* change code above this line */ }
            </div>
        );
        }
    };

// 24. Set State with this.setState

    class MyComponent extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            name: 'Initial State'
        };
        this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
        // change code below this line
        this.setState({name: 'React Rocks!'});
        // change code above this line
        }
        render() {
        return (
            <div>
            <button onClick={this.handleClick}>Click Me</button>
            <h1>{this.state.name}</h1>
            </div>
        );
        }
    };

// 25. Bind 'this' to a class Method

    class MyComponent extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            itemCount: 0
        };
        // change code below this line
        this.addItem = this.addItem.bind(this);
        // change code above this line
        }
        addItem() {
        this.setState({
            itemCount: this.state.itemCount + 1
        });
        }
        render() {
        return (
            <div>
            { /* change code below this line */ }
            <button onClick={this.addItem}>Click Me</button>
            { /* change code above this line */ }
            <h1>Current Item Count: {this.state.itemCount}</h1>
            </div>
        );
        }
    };

// 26. Use State to Toggle and Element

    class MyComponent extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        // change code below this line
        this.toggleVisibility = this.toggleVisibility.bind(this);
        // change code above this line
        }
        // change code below this line
    toggleVisibility() {
        this.setState({ visibility: !this.state.visibility});
    }
        // change code above this line
        render() {
        if (this.state.visibility) {
            return (
            <div>
                <button onClick={this.toggleVisibility}>Click Me</button>
                <h1>Now you see me!</h1>
            </div>
            );
        } else {
            return (
            <div>
                <button onClick={this.toggleVisibility}>Click Me</button>
            </div>
            );
        }
        }
    };

// 27. Write a Simple Counter

    class Counter extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        // change code below this line
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        // change code above this line
        }
        // change code below this line
    increment() {
        this.setState({count: this.state.count + 1});
    }
    
    decrement() {
        this.setState({count: this.state.count - 1});
    }
    
    reset() {
        this.setState({count: 0});
    }
        // change code above this line
        render() {
        return (
            <div>
            <button className='inc' onClick={this.increment}>Increment!</button>
            <button className='dec' onClick={this.decrement}>Decrement!</button>
            <button className='reset' onClick={this.reset}>Reset</button>
            <h1>Current Count: {this.state.count}</h1>
            </div>
        );
        }
    };

// 28. Create a Controlled Input

    class ControlledInput extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        // change code below this line
    this.handleChange = this.handleChange.bind(this);
        // change code above this line
        }
        // change code below this line
    handleChange(event) {
        this.setState({input: event.target.value})
    ;}
        // change code above this line
        render() {
        return (
            <div>
            { /* change code below this line */}
            <input value={this.state.input} onChange={this.handleChange}/>
            { /* change code above this line */}
            <h4>Controlled Input:</h4>
            <p>{this.state.input}</p>
            </div>
        );
        }
    };

// 29. Create a Controlled Form

    class MyForm extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChange(event) {
        this.setState({
            input: event.target.value
        });
        }
        handleSubmit(event) {
        // change code below this line
        event.preventDefault();
        this.setState({
            submit: this.state.input
        });
        // change code above this line
        }
        render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                { /* change code below this line */ }
                <input value={this.state.input} onChange={this.handleChange}/>
                { /* change code above this line */ }
                <button type='submit'>Submit!</button>
            </form>
            { /* change code below this line */ }
            <h1>{this.state.submit}</h1>
            { /* change code above this line */ }
            </div>
        );
        }
    };

// 30. Pass State as Props to Child Components

    class MyApp extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            name: 'CamperBot'
        }
        }
        render() {
        return (
            <div>
            <Navbar name={this.state.name}/* your code here */ />
            </div>
        );
        }
    };
    
    class Navbar extends React.Component {
        constructor(props) {
        super(props);
        }
        render() {
        return (
        <div>
            <h1>Hello, my name is: {this.props.name}/* your code here */ </h1>
        </div>
        );
        }
    };

// 31. Pass a Callback as Props

    class MyApp extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
        }
        handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
        }
        render() {
        return (
            <div>
            { /* change code below this line */ }
            <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
            <RenderInput input={this.state.inputValue}/>
            { /* change code above this line */ }
            </div>
        );
        }
    };
    
    class GetInput extends React.Component {
        constructor(props) {
        super(props);
        }
        render() {
        return (
            <div>
            <h3>Get Input:</h3>
            <input
                value={this.props.input}
                onChange={this.props.handleChange}/>
            </div>
        );
        }
    };
    
    class RenderInput extends React.Component {
        constructor(props) {
        super(props);
        }
        render() {
        return (
            <div>
            <h3>Input Render:</h3>
            <p>{this.props.input}</p>
            </div>
        );
        }
    };

// 32. Use the Lifecycle Method componentWillMount

    class MyComponent extends React.Component {
        constructor(props) {
        super(props);
        }
        componentWillMount() {
        // change code below this line
        console.log(this.componentWillMount);
        // change code above this line
        }
        render() {
        return <div />
        }
    };

// 33. Use the Lifecycle Method componentDidMount

    class MyComponent extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            activeUsers: null
        };
        }
        componentDidMount() {
        setTimeout( () => {
            this.setState({
            activeUsers: 1273
            });
        }, 2500);
        }
        render() {
        return (
            <div>
            <h1>Active Users: {this.state.activeUsers}{ /* change code here */ }</h1>
            </div>
        );
        }
    };

// 34. Add Event Listeners

    class MyComponent extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        }
        // change code below this line
        componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
        }
        componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
        }
        // change code above this line
        handleEnter() {
        this.setState({
            message: this.state.message + 'You pressed the enter key! '
        });
        }
        handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.handleEnter();
        }
        }
        render() {
        return (
            <div>
            <h1>{this.state.message}</h1>
            </div>
        );
        }
    };

// 35. Manage Updates with Lifecycle Methods

    class Dialog extends React.Component {
        constructor(props) {
        super(props);
        }
        componentWillUpdate() {
        console.log('Component is about to update...');
        }
        // change code below this line
    componentWillReceiveProps(nextProps) {
        console.log(this.props)
        console.log(nextProps(nextProps))
    }
    componentDidUpdate() {
        console.log('Working statement')
    }
        // change code above this line
        render() {
        return <h1>{this.props.message}</h1>
        }
    };
    
    class Controller extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            message: 'First Message'
        };
        this.changeMessage = this.changeMessage.bind(this);
        }
        changeMessage() {
        this.setState({
            message: 'Second Message'
        });
        }
        render() {
        return (
            <div>
            <button onClick={this.changeMessage}>Update</button>
            <Dialog message={this.state.message}/>
            </div>
        );
        }
    };