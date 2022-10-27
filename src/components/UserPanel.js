import React from 'react';


class UserPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weight: 0,
            protein: 0,
            total: 0,
            name: '',
            foods: []
        };
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleProteinChange = this.handleProteinChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    addObjectToArray = e => {
        e.preventDefault();
        let proteinPerFood = (this.state.weight * this.state.protein) / 100
        this.setState({
            foods: [
                ...this.state.foods,
                { name: this.state.name, protein: proteinPerFood }
            ],
            name: '',
            protein: 0,
            weight: 0,
            total: this.state.total + proteinPerFood
        })
    };

    handleWeightChange(e) {
        this.setState({
            weight: e.target.value
        });
    }

    handleProteinChange(e) {
        this.setState({
            protein: e.target.value
        });
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return <>
            <h2>Total Protein {this.state.total}g</h2>

            <label>food:</label>
            <input
                name="name"
                value={this.state.name}
                onChange={this.handleNameChange} />
            <label>weight (grams):</label>
            <input
                name="weight"
                value={this.state.weight}
                onChange={this.handleWeightChange} />
            <label>protein/100g:</label>
            <input
                name="protein"
                value={this.state.protein}
                onChange={this.handleProteinChange} />
            {this.state.foods.map(food => {
                return (
                    <div key={food.id}>
                        <p>food: {food.name} protein: {food.protein}g</p>
                        <hr />
                    </div>
                );
            })}

            <button className="add-button" onClick={this.addObjectToArray}>
                Add food
            </button>
        </>
    }
}

export default UserPanel;













