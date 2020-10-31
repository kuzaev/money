import { db } from "./firebaseConfig";

export default {
    addExpense: (expense) => {
        return db.collection("expenses").add(expense)
            .then(({ id }) => ({ ...expense, id }))
            .catch(err => console.log(err));
    },

    updateCostByCategory: (cost, categoryId) => {
        return db.collection("categories").doc(categoryId).get()
            .then(doc => {
                if (doc.exists) {
                    let data = doc.data();
                    let oldCost = data.cost || 0;
                    cost = Number(cost);
                    oldCost = Number(oldCost);

                    let newCost = cost + oldCost;

                    return db.collection("categories").doc(categoryId).update({ cost: newCost })
                        .then(() => newCost)
                        .catch(err => err);
                }
            })
    }
}
