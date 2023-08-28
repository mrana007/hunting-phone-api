const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data
    // console.log(phones);
    displayPhones(phones);
}


const displayPhones = phones =>{
    console.log(phones);

    const phoneContainer = document.getElementById('phone-container');
    // clear phone container card before adding new cards
    phoneContainer.textContent = '';

    // display show all phone button if there are more then 12 phones
    const showAllContainer = document.getElementById('show-all-container')
    if(phones.length > 12){
        showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden')
    }

    // display only first 12 phones
    phones = phones.slice(0, 12);

    phones.forEach(phone => {
        // console.log(phone);
        // step-2: create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
        // step-3: set innerHTML
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Phones" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>There are many variations of passages of available, but the majority have suffered</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        // step-4: appendChild
        phoneContainer.appendChild(phoneCard);
    })
}
 

// handle search button
const handleSearch = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}

const handleSearch2 = () =>{
    const searchField = document.getElementById('search-field2');
    const searchText = searchField.value;
    loadPhone(searchText);

}

// loadPhone();