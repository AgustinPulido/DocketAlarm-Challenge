let data = {
    "states": [
        {
            "name": "Alabama",
            "circuit": "11th"
        },
        {
            "name": "Alaska",
            "circuit": "9th"
        },
        {
            "name": "Arizona",
            "circuit": "9th"
        },
        {
            "name": "Arkansas",
            "circuit": "8th"
        },
        {
            "name": "California",
            "circuit": "9th"
        },
        {
            "name": "Colorado",
            "circuit": "10th"
        },
        {
            "name": "Connecticut",
            "circuit": "2nd"
        },
        {
            "name": "Delaware",
            "circuit": "3rd"
        },
        {
            "name": "Florida",
            "circuit": "11th"
        },
        {
            "name": "Georgia",
            "circuit": "11th"
        },
        {
            "name": "Hawaii",
            "circuit": "9th"
        },
        {
            "name": "Idaho",
            "circuit": "9th"
        },
        {
            "name": "Illinois",
            "circuit": "7th"
        },
        {
            "name": "Indiana",
            "circuit": "7th"
        },
        {
            "name": "Iowa",
            "circuit": "8th"
        },
        {
            "name": "Kansas",
            "circuit": "10th"
        },
        {
            "name": "Kentucky",
            "circuit": "6th"
        },
        {
            "name": "Louisiana",
            "circuit": "5th"
        },
        {
            "name": "Maine",
            "circuit": "1st"
        },
        {
            "name": "Maryland",
            "circuit": "4th"
        },
        {
            "name": "Massachusetts",
            "circuit": "1st"
        },
        {
            "name": "Michigan",
            "circuit": "6th"
        },
        {
            "name": "Minnesota",
            "circuit": "8th"
        },
        {
            "name": "Mississippi",
            "circuit": "5th"
        },
        {
            "name": "Missouri",
            "circuit": "8th"
        },
        {
            "name": "Montana",
            "circuit": "9th"
        },
        {
            "name": "Nebraska",
            "circuit": "8th"
        },
        {
            "name": "Nevada",
            "circuit": "9th"
        },
        {
            "name": "New Hampshire",
            "circuit": "1st"
        },
        {
            "name": "New Jersey",
            "circuit": "3rd"
        },
        {
            "name": "New Mexico",
            "circuit": "10th"
        },
        {
            "name": "New York",
            "circuit": "2nd"
        },
        {
            "name": "North Carolina",
            "circuit": "4th"
        },
        {
            "name": "North Dakota",
            "circuit": "8th"
        },
        {
            "name": "Ohio",
            "circuit": "6th"
        },
        {
            "name": "Oklahoma",
            "circuit": "10th"
        },
        {
            "name": "Oregon",
            "circuit": "9th"
        },
        {
            "name": "Pennsylvania",
            "circuit": "3rd"
        },
        {
            "name": "Rhode Island",
            "circuit": "1st"
        },
        {
            "name": "South Carolina",
            "circuit": "4th"
        },
        {
            "name": "South Dakota",
            "circuit": "8th"
        },
        {
            "name": "Tennessee",
            "circuit": "6th"
        },
        {
            "name": "Texas",
            "circuit": "5th"
        },
        {
            "name": "Utah",
            "circuit": "10th"
        },
        {
            "name": "Vermont",
            "circuit": "2nd"
        },
        {
            "name": "Virginia",
            "circuit": "4th"
        },
        {
            "name": "Washington",
            "circuit": "9th"
        },
        {
            "name": "West Virginia",
            "circuit": "4th"
        },
        {
            "name": "Wisconsin",
            "circuit": "7th"
        },
        {
            "name": "Wyoming",
            "circuit": "10th"
        }
    ]
};

function createCircuitsCheckboxes() {
    const container = $('.circuits');
    const column = $('<div>', {
        class: 'col-md-12',
        id: 'circuits'
    });
    uniqueCircuits(data.states).forEach((jurisdiccion) => {
        const div = $('<div>', {
            class: 'item form-check',
        });
        const checkbox = $('<input>', {
            type: 'checkbox',
            value: `${jurisdiccion.circuit}`,
            class: `form-check-input`
        });
        const label = $('<label>', {
            text: `Circuit ${jurisdiccion.circuit}`,
            for: `${jurisdiccion.circuit}`,
            class: `form-check-label`
        });
        div.append(checkbox, label, '<br>');
        column.append(div)
        container.append(column);
    });
}

function createJurisdictionsCheckboxes() {
    const container = $('.jurisdictions');
    const elementsPerColumn = Math.ceil(data.states.length / 3);
    for (let i = 0; i < 3; i++) {
        const columna = $('<div>', {
            class: 'col-md-4',
            id: 'jurisdictions'
        });
        for (let j = i * elementsPerColumn; j < (i + 1) * elementsPerColumn && j < data.states.length; j++) {
            const div = $('<div>', {
                class: `${data.states[j].name.toLowerCase()}`,
                id: 'form-check'
            });
            const checkbox = $('<input>', {
                type: 'checkbox',
                id: `${data.states[j].circuit}`,
                value: `${data.states[j].name}`,
                class: `form-check-input`
            });
            const label = $('<label>', {
                text: `${data.states[j].name}`,
                for: `flexCheckDefault`,
                class: `form-check-label`
            });
            div.append(checkbox, label, '<br>');
            columna.append(div)
        }
        container.append(columna);
    }
}

function uniqueCircuits(states) {
    const uniqueCircuits = {};
    states.forEach(obj => {
        const key = obj.circuit.slice(0, -2);
        if (!uniqueCircuits[key]) {
            uniqueCircuits[key] = obj;
        }
    });
    const sortedCircuits = Object.values(uniqueCircuits).sort((a, b) => a.circuit - b.circuit);
    return Object.values(sortedCircuits);
}

$(document).ready(function () {
    createJurisdictionsCheckboxes();
    createCircuitsCheckboxes();
});