let data = [
    
    {
        name: 'Andrew',
        age: '28'
    },
    {
        name: 'Kirstine',
        age: '26'
    },
    {
        name: 'Freya',
        age: '1'
    },
    {
        name: 'Archer',
        age: '1'
    },

];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return (
        '<div>' + item.name + ' ' + 'is ' + item.age + ' years old.' + 
        '</div>'
    )

})

info.innerHTML = details.join('\n');
