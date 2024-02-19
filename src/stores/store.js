import { defineStore } from 'pinia'

export const useFoodsStore = defineStore('foods', {
    state: () => {
        return { 
            foodList: [],
            categoryList: [],
            addedOrder: [],
            orderList: [],
        }
    },
    actions: {
        async fetchFoodFromDB() {
             try {
                const foods = [
                    { id: 1, url: '../../public/most_popular/food1.png', name: "Sorvetes Primavera", category : "Dessert", price : "175", popular: true},
                    { id: 2, url: '../../public/most_popular/food2.png', name: "Steak Fries Veggies", category : "Meat", price : "172", popular: true},
                    { id: 3, url: '../../public/most_popular/food3.png', name: "Chicken Salad ", category : "Chicken", price : "185", popular: true},
                    { id: 4, url: '../../public/most_popular/food4.png', name: "Fried Chiken", category : "Chicken", price : "175", popular: false},
                ]
                const category = [
                    "All",
                    "Breakfast",
                    "Chicken",
                    "Seafoods",
                    "Meat",
                    "Dessert"
                ]
                this.foodList = foods
                this.categoryList = category
             } catch (error){
                 console.log("error",error);
             }
         },
        async addOrder(item) {
            try {
                this.addedOrder.push(item);
                console.log("this.addedOrder",item);

            } catch (error) {
                console.log("error",error);
            }
        },
        async placeOrder(item){
            try {
                let randomNumber = '';
                for (let i = 0; i < 15; i++) {
                    randomNumber += Math.floor(Math.random() * 10); // Generate a random digit (0-9) and append to the number
                }
                item.tracking_number = randomNumber
                this.orderList.push(item);
                console.log("this.order",this.orderList);

            } catch (error) {
                console.log("error",error);
            }
        }
     },
  })