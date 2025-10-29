const main =document.getElementById('main');
const cart =main 
                .firstElementChild
                .firstElelmentChild
                .nextElementSibling;

const products = Array.from(main
                 .firstElementChild
                 .firstElementChild
                 .firstElementChild
                 .nextElementSibling
                 .children);

products.forEach((product) => {
    product.addEventListener('click', () => {
        const div = document.createElement('div');
        const productName = document.createElement('h6');
        const price = document.createElement('span');

        productName.textContent = product
                                .firstElementChild
                                .innerText

        div.classList.add('flex')
        console.log(product
                    .firstElementChild
                    .innerText)

        div.classList.add('bg-purple-400', 'p-2,');
        div.append(productName);
        console.log('div')

        cart.append(div);

                                
    })

    })
