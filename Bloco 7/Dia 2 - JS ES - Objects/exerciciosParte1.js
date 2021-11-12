const order = {
    name: 'Luiz Silva',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 50,
    },
  };
  
  const customerInfo = (order) => {    
    console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, N°: ${order.address.number}, AP: ${order.address.number}`);
  }
  
  // customerInfo(order);
  
  const orderModifier = (order) => {
    let pizzaOrder = () => {
        let pizzas = Object.keys(order.order.pizza);
        let retorno = [];
        for (index in pizzas) {
            if (index === 0) {
                retorno.push (`${pizzas[index]}`);
            } else {
                retorno.push (` ${pizzas[index]}`);
            }
        }
        return retorno.toString();        
    }
    let drinksOrder = () => {
        let drinks = Object.keys(order.order.drinks);
        let retorno = [];
        for (index in drinks) {
            if (drinks[index] == 'coke') {
                drinks[index] = 'Coca-Cola Zero';
            }
            if (index === 0) {
                retorno.push (`${drinks[index]}`);
            } else {
                retorno.push (` ${drinks[index]}`);
            }
        }
        return retorno.toString();        
    }
    console.log(`Olá ${order.name}, o total do seu pedido de ${pizzaOrder()} e${drinksOrder()} é R$ ${order.payment.total},00`);
  }
  
  orderModifier(order);