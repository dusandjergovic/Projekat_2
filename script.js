$(document).ready(function() {

    $('.btn').click(function() {
        var taskOne = $("<div>");

        var nameOfTask = $("<input>");

        var containerForTask = $('<div>')
        containerForTask.addClass('containerForTask');
        
        var btnOfTask = $('<button>');
        btnOfTask.addClass('btnOfTask')
        btnOfTask.text('Add list')

        var spanOfTask = $('<button>');
        spanOfTask.text('X')

        containerForTask.append(btnOfTask, spanOfTask)

        btnOfTask.click(function() {

           

            let naslov = $('<textarea>');
            naslov.addClass('naslov');

            naslov.text(nameOfTask.val())

            let createTask = $('<button>')
            createTask.text(' + Add list')

            let deleteNaslov = $('<button>');
            deleteNaslov.text('Obrisi task')

            deleteNaslov.click(function() {
                $('.box').hide()
            })

            let divForNaslov = $('<div>');
            divForNaslov.addClass('divForNaslov')
            divForNaslov.append(naslov, deleteNaslov)


            $('.box').prepend(divForNaslov);
            $('.box').append(createTask);


            nameOfTask.hide();
            containerForTask.hide()

            createTask.click(function() {
                createTask.hide();

                let divForTask = $('<div>');
                divForTask.addClass('divForTask');

                let textForSubTask = $('<textarea>');
                textForSubTask.attr('placeholder', 'Unesite podZadatak');

                // let deleteSubTask = $('<button>');
                // deleteSubTask.text('X');

                let divForSubTask = $('<div>');
                divForSubTask.addClass('divForSubTask');

                let divForTextArea = $('<div>');
                divForTextArea.addClass('divForTextArea');

                let btnForSubTask = $('<button>');
                btnForSubTask.text('Dodaj podZadatak');
                btnForSubTask.addClass('btnForSubTask')

                // let btnToDeleteSubTask = $('<button>');
                // btnToDeleteSubTask.text('X')
                // btnToDeleteSubTask.addClass('btnToDeleteSubTask')

                divForSubTask.append(btnForSubTask) //btnToDeleteSubTask
                divForTask.append(divForTextArea, divForSubTask)
                $('.box').append(divForTask);

                btnForSubTask.click(function() {
                    let textForNextSubTask = $('<textarea>');
                    textForNextSubTask.attr('placeholder', 'Unesite podZadatak');

                    let deleteSubTask = $('<button>');
                    deleteSubTask.text('X');

                    let divForDiv = $('<div>');
                    divForDiv.addClass('divForDiv');
                    divForDiv.prepend(textForNextSubTask, deleteSubTask)

                    divForTextArea.append(divForDiv); 
                    
                    deleteSubTask.click(function() {
                        divForDiv.hide();
                    })
                })

                

            })

            // console.log('test');
        })

        spanOfTask.click(function() {
            taskOne.hide()
        })
        
        taskOne.addClass("box");
        nameOfTask.addClass('name')
        taskOne.append(nameOfTask, containerForTask)
        $('#containerForFields').append(taskOne);


    })

})