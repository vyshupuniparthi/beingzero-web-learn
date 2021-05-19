var newId = 4
var newTest = { 'name': null, 'id': newId, 'articles': null }

view();
$('#add-test').on('click', function () {
    $('.form-wrapper').removeClass('hidden')

})

$('#test-result').on('keyup', function () {
    newTest.articles = $(this).val()
    console.log(newTest)

})
$('#test-id').on('keyup', function () {
    newTest.id = $(this).val()
    console.log(newTest)

})
$('#test-name').on('change', function () {
    newTest.name = $(this).val()
    console.log(newTest)
})

$('#create-test').on('click', function () {
    if (newTest.name == null) {
        alert('No test selected!')
    } else {
        data={ 
            name : newTest.name,
            id : newTest.id,
            articles : newTest.articles,
            isdeleted : false,
         }
         $.ajax({
            url: "/crud",
            type: "POST",
            data: data,
            success: function(data) {
               console.log(data);
            },
            error: function (xhr, status, error) {
            alert(error);
            }
            });
        // console.log(data);
        addRow(newTest)
        $('#test-name').val('')
        $('#test-result').val('')
        $('.form-wrapper').addClass('hidden')
       
    }
})

function view()
{
   
    $.ajax({
        url: "/crud",
        type: "GET",
        success: function(data) {
      //  alert(data.Articels);
      // alert(data);
       for(var i=0;i<data.length;i++) {
           console.log(data[i]);
          addRow(data[i]);
        }
        },
        error: function (xhr, status, error) {
        alert(error);
        }
        });
      
}



function addRow(obj) {
    var row = `<tr scope="row" class="test-row-${obj.id}" id="${obj.id}">
                   
                   <td>${obj.name}</td>
                   <td id="result-${obj.id}" data-testid="${obj.id}"">${obj.articles}</td>
                   <td>
                     <button class="del btn btn-sm btn-danger" data-testid=${obj.id} id="${obj.id}">Delete</button>
                     <button class="btn btn-sm btn-info" disabled data-testid="${obj.id}"  id="save-${obj.id}">Save</button>
                     <button class="btn btn-sm btn-danger hidden" data-testid="${obj.id}"  id="cancel-${obj.id}">Cancel</button>
                     <button class="btn btn-sm btn-primary hidden" data-testid="${obj.id}"  id="confirm-${obj.id}">Confirm</button>
                   </td>
               </tr>`
    $('#tests-table').append(row)

    $(`.del`).on('click', deleteTest)
    $(`#cancel-${obj.id}`).on('click', cancelDeletion)
    $(`#confirm-${obj.id}`).on('click', confirmDeletion)
    $(`#save-${obj.id}`).on('click', saveUpdate)
    $(`#result-${obj.id}`).on('click', editResult)

}
var data;
function editResult() {
    var testid = $(this).data('testid')
    var value = $(this).html()

    $(this).unbind()
    $(this).html(`<input class="result form-control" data-testid="${testid}" type="text" value="${value}">`)

    $(`.result`).on('keyup', function () {
        var testid = $(this).data('testid')
        var saveBtn = $(`#save-${testid}`)
        saveBtn.prop('disabled', false)
        data = { articles: JSON.parse($(".result").val())};
        console.log($(".result").val());
    })
}
function saveUpdate() {
   
       
   var testid = $(this).data('testid');
   console.log(testid);
   console.log(data);
   $.ajax({
    url: "/crud/"+testid,
    type: "PUT",
    data: data,
    success: function (data) {
   // alert(data);
    data = JSON.parse(data);
    },
    error: function (xhr, status, error) {
    alert(error);
    }
    });
   

    var saveBtn = $(`#save-${testid}`)
    var row = $(`.test-row-${testid}`)

    saveBtn.prop('disabled', true)
    row.css('opacity', "0.5")

    setTimeout(function () {
        row.css('opacity', '1')
    }, 2000)
}

function deleteTest() {


    console.log("Coming here!");
    var testid = $(this).attr("id");
    var deleteBtn = $(`#delete-${testid}`)
    var saveBtn = $(`#save-${testid}`)
    var cancelBtn = $(`#cancel-${testid}`)
    var confirmBtn = $(`#confirm-${testid}`)

    deleteBtn.addClass('hidden')
    saveBtn.addClass('hidden')

    cancelBtn.removeClass('hidden')
    confirmBtn.removeClass('hidden')
}

function cancelDeletion() {
    var testid = $(this).data('testid')
    var deleteBtn = $(`#delete-${testid}`)
    var saveBtn = $(`#save-${testid}`)
    var cancelBtn = $(`#cancel-${testid}`)
    var confirmBtn = $(`#confirm-${testid}`)

    deleteBtn.removeClass('hidden')
    saveBtn.removeClass('hidden')

    cancelBtn.addClass('hidden')
    confirmBtn.addClass('hidden')

}

function confirmDeletion() {
    var testid = $(this).data('testid')
    $.ajax({
        url: "/crud/"+testid,
        type: "DELETE",
        success: function (data) {
        alert(data);
        data = JSON.parse(data);
        },
        error: function (xhr, status, error) {
        alert(error);
        }
        });
    var row = $(`.test-row-${testid}`)
    row.remove()

}