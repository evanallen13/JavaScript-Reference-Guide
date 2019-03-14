const hummus = function(factor){
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1){
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1,"can","chickenpea");
    ingredient(.25,"cup","tahini");
};

hummus(4);