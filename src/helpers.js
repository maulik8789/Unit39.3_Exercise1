const choices = (items) => {
    let i = Math.floor(Math.random() * items.length);
    return items[i];

};

const remove = (item, items) => {
    for (let i = 0; i < items.length; i++){
        if(items[i] == item){
            return [...items.splice(0, 1), ...items.splice(1, items.length)];
        }
    }
}

export {choices, remove}