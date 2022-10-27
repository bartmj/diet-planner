import React from 'react';

const options = [
    { id: 1, value: 'chicken', protein: 27, calories: 239 },
    { id: 2, value: 'eggs', protein: 13, calories: 155.1 },
    { id: 3, value: 'cheese piątnica semi-fat', protein: 16, calories: 485 },
    { id: 4, value: 'peanut butter', protein: 23.78, calories: 642 },
    { id: 5, value: 'oats', protein: 14, calories: 418 },
    { id: 6, value: 'walnut', protein: 15, calories: 654.4 },
    { id: 7, value: 'dark bread', protein: 8.5, calories: 218 },
    { id: 8, value: 'protein bar Olymp 64 g', protein: 31, calories: 369 },
    { id: 9, value: 'WPI 90 Olymp', protein: 90, calories: 373 },
    { id: 10, value: 'wheat noodles, cooked', protein: 5.15, calories: 131 }
]

class UserPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weight: 0,
            protein: 0,
            total: 0,
            totalKcal: 0,
            calories: 0,
            id: 0,
            name: '',
            foods: []
        };
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleProteinChange = this.handleProteinChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCaloriesChange = this.handleCaloriesChange.bind(this);
    }

    addObjectToArray = e => {
        e.preventDefault();
        let proteinPerFood = (this.state.weight * this.state.protein) / 100
        let caloriesPerFood = (this.state.weight * this.state.calories) / 100
        this.setState({
            foods: [
                ...this.state.foods,
                { id: this.state.id + 1, name: this.state.name, protein: proteinPerFood, calories: caloriesPerFood }
            ],
            name: '',
            protein: 0,
            weight: 0,
            id: this.state.id + 1,
            total: this.state.total + proteinPerFood,
            totalKcal: this.state.totalKcal + caloriesPerFood
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

    handleCaloriesChange(e) {
        this.setState({
            calories: e.target.value
        });
    }

    handleNameChange(e) {
        let n = e.target.value
        this.setState({
            name: n
        })
        let obj = options.find(o => o.value === n);
        if (obj) {
            this.setState({
                protein: obj.protein,
                calories: obj.calories
            });
        }
    }

    render() {
        return <>
            <h3>Total calories {Math.round(this.state.totalKcal * 100) / 100}kcal</h3>
            <h3>Total protein {Math.round(this.state.total * 100) / 100}g</h3>

            <label>food:</label>
            <input
                id="multiselect"
                type="text"
                name=""
                list="productName"
                onChange={this.handleNameChange}
                value={this.state.name} />
            <datalist id="productName">
                {options.map(option => {
                    return (
                        <option key={option.id} value={option.value}>{option.value}</option>
                    );
                })}
            </datalist>
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
            <label>calories/100g</label>
            <input
                name="calories"
                value={this.state.calories}
                onChange={this.handleCaloriesChange} />
            {this.state.foods.map(food => {
                return (
                    <div key={food.id}>
                        <p>food: {food.name}, protein: {food.protein}g, calories: {food.calories}</p>
                        <hr />
                    </div>
                );
            })}

            <button
                className="add-button"
                onClick={this.addObjectToArray}>
                Add food
            </button>
        </>
    }
}

export default UserPanel;













