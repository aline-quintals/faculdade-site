document.addEventListener('DOMContentLoaded', function () {

    const calendarEl = document.getElementById('calendar');

    const calendar = new FullCalendar.Calendar(calendarEl, {

        locale: 'pt-br',

        initialView: 'dayGridMonth',

        height: 450,

        contentHeight: 350,

        aspectRatio: 1.5,

        fixedWeekCount: false,

        showNonCurrentDates: true,

        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: ''
        },

        buttonText: {
            today: 'Hoje'
        },

        
        events: [

            {
                title: 'Hackathon',
                date: '2026-06-01'
            },

            {
                title: 'Hackathon',
                date: '2026-06-02'
            },

            {
                title: 'Hackathon',
                date: '2026-06-03'
            },

            {
                title: 'N2 - Prog.',
                date: '2026-06-08'
            },

            {
                title: 'N2 - Matemática',
                date: '2026-06-09'
            },

            {
                title: 'N2 - Front-End',
                date: '2026-06-11'
            },

            {
                title: 'N2 - Sistemas',
                date: '2026-06-12'
            }

        ]

    });

    calendar.render();

});