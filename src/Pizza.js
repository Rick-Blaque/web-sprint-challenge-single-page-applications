import React, { Component } from 'react'

export class Pizza extends Component {
    static defaultProps = {
         
    }
    this.state = {
        inputValue = inputValue.value
    }
    render() {
        return (
            <div>
                <form id='pizza-form'>
                    <label/>
                    <input type='text' value={inputValue}/>
                    <button>Send!</button>
                </form>
            </div>
        )
    }
}

export default Pizza
