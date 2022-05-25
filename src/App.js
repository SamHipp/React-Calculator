import React from "react";

// Main App component, including state and button inputs______________
// User Story #1: My calculator should contain a clickable element containing an = (equal sign) with a corresponding id="equals".
// User Story #2: My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".
// User Story #3: My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide".
// User Story #4: My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding id="decimal".
// User Story #5: My calculator should contain a clickable element with an id="clear".

// NOTE - Code for calculations should be done here; display component should be "dumb"

// Variables____________________________________________________________________________

const operationRegex = /[/\*-+]/g;
const numRegex = /\d/g;
const decimalRegex = /\./g;
const expressionRegex = /\d+/g;
const runningExpressionRegex = /^[/\*-+]/;
let inputExpression = "";
let isRunningExpression = false;


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: [],
            lastPressed: "",
            lastResult: ""
        }
        this.setInput = this.setInput.bind(this);
        this.evaluate = this.evaluate.bind(this);
    }



// Function for handling key presses; key values should be used to determine input value__________

setInput(event) {
    let keyValue = event.target.id;
    switch(keyValue) {
        case "clear":
            this.setState({
                input: [],
                lastPressed: "clear",
                lastResult: this.state.lastResult
            });
            break;
            // User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 * (-5)).
        case "divide":
            if(this.state.input.length < 11) {
            switch(true) {
                case numRegex.test(this.state.lastPressed): 
                    return(this.setState({
                        input: [...this.state.input, "/"],
                        lastPressed: "/",
                        lastResult: this.state.lastResult
                    }));
                case this.state.lastResult != "" && this.state.input == [] || this.state.lastPressed === "equals" || this.state.lastPressed === "clear":
                    return(this.setState({
                        input: [...this.state.input, "/"],
                        lastPressed: "/",
                        lastResult: this.state.lastResult
                    }));
                case operationRegex.test(this.state.lastPressed):
                    return(this.setState({
                        input: [...this.state.input.slice(0, -1), "/"],
                        lastPressed: "/",
                        lastResult: this.state.lastResult
                    }));
                
                default: 
                    return(this.setState({
                        input: this.state.input,
                        lastPressed: this.state.lastPressed,
                        lastResult: this.state.lastResult
                    }));
            }
        }
        case "multiply":
            if(this.state.input.length < 11) {
                switch(true) {
                    case numRegex.test(this.state.lastPressed): 
                    return(this.setState({
                        input: [...this.state.input, "*"],
                        lastPressed: "*",
                        lastResult: this.state.lastResult
                    }));
                case this.state.lastResult != "" && this.state.input == [] || this.state.lastPressed === "equals" || this.state.lastPressed === "clear":
                    return(this.setState({
                        input: [...this.state.input, "*"],
                        lastPressed: "*",
                        lastResult: this.state.lastResult
                    }));
                case operationRegex.test(this.state.lastPressed):
                    return(this.setState({
                        input: [...this.state.input.slice(0, -1), "*"],
                        lastPressed: "*",
                        lastResult: this.state.lastResult
                    }));
                
                default: 
                    return(this.setState({
                        input: this.state.input,
                        lastPressed: this.state.lastPressed,
                        lastResult: this.state.lastResult
                    }));
                }
        }
        case "subtract":
            if(this.state.input.length < 11) {
                switch(true) {
                    case numRegex.test(this.state.lastPressed): 
                    return(this.setState({
                        input: [...this.state.input, "-"],
                        lastPressed: "-",
                        lastResult: this.state.lastResult
                    }));
                case this.state.lastResult != "" && this.state.input == [] || this.state.lastPressed === "equals" || this.state.lastPressed === "clear":
                    return(this.setState({
                        input: [...this.state.input, "-"],
                        lastPressed: "-",
                        lastResult: this.state.lastResult
                    }));
                case operationRegex.test(this.state.lastPressed):
                    return(this.setState({
                        input: [...this.state.input.slice(0, -1), "-"],
                        lastPressed: "-",
                        lastResult: this.state.lastResult
                    }));
                
                default: 
                    return(this.setState({
                        input: this.state.input,
                        lastPressed: this.state.lastPressed,
                        lastResult: this.state.lastResult
                    }));
                }
        }
        case "add":
            if(this.state.input.length < 11) {
                switch(true) {
                    case numRegex.test(this.state.lastPressed): 
                    return(this.setState({
                        input: [...this.state.input, "+"],
                        lastPressed: "+",
                        lastResult: this.state.lastResult
                    }));
                case this.state.lastResult != "" && this.state.input == [] || this.state.lastPressed === "equals" || this.state.lastPressed === "clear":
                    return(this.setState({
                        input: [...this.state.input, "+"],
                        lastPressed: "+",
                        lastResult: this.state.lastResult
                    }));
                case operationRegex.test(this.state.lastPressed):
                    return(this.setState({
                        input: [...this.state.input.slice(0, -1), "+"],
                        lastPressed: "+",
                        lastResult: this.state.lastResult
                    }));
                
                default: 
                    return(this.setState({
                        input: this.state.input,
                        lastPressed: this.state.lastPressed,
                        lastResult: this.state.lastResult
                    }));
                }
        }
        case "one":
            if(this.state.input.length < 11) {
            return(this.setState({
                input: [...this.state.input, 1],
                lastPressed: 1,
                lastResult: this.state.lastResult
            }));
        }
        case "two":
            if(this.state.input.length < 11) {
            return(this.setState({
                input: [...this.state.input, 2],
                lastPressed: 2,
                lastResult: this.state.lastResult
            }));
        }
        case "three":
            if(this.state.input.length < 11) {
            return(this.setState({
                input: [...this.state.input, 3],
                lastPressed: 3,
                lastResult: this.state.lastResult
            }));
        }
        case "four":
            if(this.state.input.length < 11) {
            return(this.setState({
                input: [...this.state.input, 4],
                lastPressed: 4,
                lastResult: this.state.lastResult
            }));
        }
        case "five":
            if(this.state.input.length < 11) {
            return(this.setState({
                input: [...this.state.input, 5],
                lastPressed: 5,
                lastResult: this.state.lastResult
            }));
        }
        case "six":
            if(this.state.input.length < 11) {
            return(this.setState({
                input: [...this.state.input, 6],
                lastPressed: 6,
                lastResult: this.state.lastResult
            }));
        }
        case "seven":
            if(this.state.input.length < 11) {
            return this.setState({
                input: [...this.state.input, 7],
                lastPressed: 7,
                lastResult: this.state.lastResult
            });
        }
        case "eight":
            if(this.state.input.length < 11) {
            return(this.setState({
                input: [...this.state.input, 8],
                lastPressed: 8,
                lastResult: this.state.lastResult
            }));
        }
        case "nine":
            if(this.state.input.length < 11) {
            return(this.setState({
                input: [...this.state.input, 9],
                lastPressed: 9,
                lastResult: this.state.lastResult
            }));
        }
            // User Story #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
        case "zero":
            if(this.state.input.length < 11) {
            return(this.setState({
                input: [...this.state.input, 0],
                lastPressed: 0,
                lastResult: this.state.lastResult
            }));
        }
            // User Story #11: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.
        case "decimal":
            if(this.state.input.length < 10) {
                if(!operationRegex.test(this.state.lastPressed) && !decimalRegex.test(this.state.input))
                    {
                    return(this.setState({
                        input: [...this.state.input, "."],
                        lastPressed: ".",
                        lastResult: this.state.lastResult
                    }));
                }
                        
        }
    }
    
}

// Function for evaluating expression_____________________________________________


evaluate() {
        inputExpression = this.state.input.join('');
        isRunningExpression = runningExpressionRegex.test(inputExpression);
    if (expressionRegex.test(inputExpression) || isRunningExpression) {
        
        let answer = 0;
        if (isRunningExpression) {
            let preAnswer = `${this.state.lastResult.toString()} ${inputExpression}`;
            answer = eval(preAnswer);
        } else if (isRunningExpression == false) {
            answer = eval(inputExpression);
        }
        
        return this.setState({
            input: [],
            lastPressed: "equals",
            lastResult: answer.toString()
        });

            }
        // }, 0)
    // }
}

    

    // Rendering section _______________________________________________________________
    // NOTE: Keys should follow pattern of keyboard numpad
    render() {
        return (
            <div className="app-container">
                <h1 className="title">React Calculator</h1>
                <div className="calculator-body">
                <Output display={this.state.input} lastdisplay={this.state.lastResult} />
                <div className="numpad-container">
                    <div className="button" id="clear" onClick={this.setInput}>AC</div>
                    <div className="button" id="divide" onClick={this.setInput}>/</div>
                    <div className="button" id="multiply" onClick={this.setInput}>x</div>
                    <div className="button" id="subtract" onClick={this.setInput}>-</div>
                    <div className="button" id="seven" onClick={this.setInput}>7</div>
                    <div className="button" id="eight" onClick={this.setInput}>8</div>
                    <div className="button" id="nine" onClick={this.setInput}>9</div>
                    <div className="button" id="add" onClick={this.setInput}>+</div>
                    <div className="button" id="four" onClick={this.setInput}>4</div>
                    <div className="button" id="five" onClick={this.setInput}>5</div>
                    <div className="button" id="six" onClick={this.setInput}>6</div>
                    <div className="button" id="one" onClick={this.setInput}>1</div>
                    <div className="button" id="two" onClick={this.setInput}>2</div>
                    <div className="button" id="three" onClick={this.setInput}>3</div>
                    <div className="button" id="equals" onClick={this.evaluate}>=</div>
                    <div className="button" id="zero" onClick={this.setInput}>0</div>
                    <div className="button" id="decimal" onClick={this.setInput}>.</div>
                </div>
                </div>
                <footer className="footer">
                    <p className="footer-text">Made by Sam Hipp</p>
                </footer>
            </div>
        );
    }
}

// Output component - Should include "rave mode" - Using number on screen % 360 as hue variable_______________________

// User Story #8: As I input numbers, I should be able to see my input in the element with the id of display.
const Output = (props) => {
    return (
        <div className="output-container">
            <p className="display-label">ANSWER:</p>
            <p className="display">{props.lastdisplay}</p>
            <p className="display-label">INPUT:</p>
            <p className="display">{props.display}</p>
        </div>
    )
}

export default App;