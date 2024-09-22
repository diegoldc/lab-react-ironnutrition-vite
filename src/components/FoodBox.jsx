function FoodBox({ food, handleDelete }) {
  return (
    <div className="list">
      <ul>
        {food.map((eachFood, index) => {
          return (
            <li className="card" key={index}>
              <p>{eachFood.name}</p>

              <img className="logo" src={eachFood.image} />

              <p>Calories: {eachFood.calories}</p>
              <p>Servings SERVINGS</p>

              <p>
                <b>
                  Total Calories: {eachFood.servings} * {eachFood.calories}{" "}
                </b>{" "}
                kcal
              </p>

              <button onClick={() => handleDelete(eachFood.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FoodBox; // Your code here
