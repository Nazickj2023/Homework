document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form[action="/shop?type=filter_product"]');
    const resultContainer = document.getElementById("filter_products"); 
    
    form.addEventListener("submit", async (e) => {
        e.preventDefault(); 

        const type_product = form.querySelector('select[name="type_product"]').value;
        const formData = new FormData();
        formData.append("type_product", type_product);

        const response = await fetch("/shop?type=filter_product", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        
        if (data.length === 0) {
            resultContainer.innerHTML = "все данние форми скушали";
            return;
        }
        const divs = document.querySelectorAll('[id^="list_product-"]');
        divs.forEach(div => {
            div.remove(); 
        });

        
        let html = '';
        data.forEach(product => {
            html += `
                <hr>
                <img src="/shop/static/images/products/${product.product_name}.png" alt="${product.product_name}" width="200" height="200">
                <p>Назва продукту: ${product.product_name}</p>
                <p>Вартість продукту: ${product.price}</p>
                <p>Знижка на одиницю продукту: ${product.discount}</p>
                <p>Кількість продукту: ${product.count}</p>
                <p>Опис продукту: ${product.description}</p>
                <button type="button" class="buy" id="${product.id}">BUY</button>
                <hr>
            `;
        });

        resultContainer.innerHTML = html;
    });
});

